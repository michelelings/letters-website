/**
 * Mirrors iOS BuildBoardView + ShuffleSession + AnswerSlotReflow + tile chrome.
 * Handoff doc errata applied: committedSlotIDs, tap branch uses session.placedTileIDs,
 * drag pipeline uses refs to avoid stale pointermove state.
 *
 * React 18+
 */

import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

// --- Types ---

export type LetterTile = { id: string; value: string };

export type VocabularyPrompt = {
  id: string;
  sourceWord: string;
  targetWord: string;
  sourceLanguage: string;
  targetLanguage: string;
  topic: string;
};

export type RoundState = "playing" | "allPlaced" | "solved" | "celebrating";

export type TileState =
  | "idle"
  | "dragging"
  | "correct"
  | "wrong"
  | "hintLocked"
  | "empty";

export type ShuffleRound = { id: string; prompt: VocabularyPrompt; tiles: LetterTile[] };

// --- Theme (TileTheme.swift) ---

const cssVars = {
  "--lg-bg-primary": "#f5f5f7",
  "--lg-bg-secondary": "#e8e8ed",
  "--lg-bg-accent": "#007aff",
  "--lg-fg-primary": "#1c1c1e",
  "--lg-fg-secondary": "#636366",
} as React.CSSProperties;

function cornerRadiusForSize(w: number, h: number): number {
  return Math.min(w, h) * 0.25;
}

// --- BoardTileSizing ---

const BANK_TILE_SIZE = { width: 56, height: 88 };
const ANSWER_OVERLAP = 0.08;
const ANSWER_ASPECT = 88 / 56;

function answerTileSize(letterCount: number, availableWidth: number) {
  const safeWidth = Math.max(availableWidth, 1);
  if (letterCount <= 0) return { ...BANK_TILE_SIZE };
  const defaultSize = BANK_TILE_SIZE;
  const effectivePerTile = defaultSize.width * (1 - ANSWER_OVERLAP);
  const neededWidth = defaultSize.width + (letterCount - 1) * effectivePerTile;
  if (neededWidth <= safeWidth) return { ...defaultSize };
  const denom = 1 + (letterCount - 1) * (1 - ANSWER_OVERLAP);
  const tileWidth = Math.max(safeWidth / denom, 1);
  return { width: tileWidth, height: Math.max(tileWidth * ANSWER_ASPECT, 1) };
}

// --- LetterBankLayout ---

function balancedRowSizes(itemCount: number, maxTilesPerRow: number): number[] {
  if (itemCount <= 0) return [];
  const safeMax = Math.max(maxTilesPerRow, 1);
  const rowCount = Math.ceil(itemCount / safeMax);
  const baseRowSize = Math.floor(itemCount / rowCount);
  const remainder = itemCount % rowCount;
  return Array.from({ length: rowCount }, (_, i) => baseRowSize + (i < remainder ? 1 : 0));
}

function splitIntoBalancedRows<T>(items: T[], maxTilesPerRow = 5): T[][] {
  if (items.length === 0) return [];
  const sizes = balancedRowSizes(items.length, maxTilesPerRow);
  const rows: T[][] = [];
  let start = 0;
  for (const size of sizes) {
    rows.push(items.slice(start, start + size));
    start += size;
  }
  return rows;
}

// --- ShuffleRound ---

function guaranteedShuffle(letters: string[]): string[] {
  if (letters.length <= 1) return [...letters];
  let result: string[];
  const original = letters.join("");
  do {
    result = [...letters];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j]!, result[i]!];
    }
  } while (result.join("") === original);
  return result;
}

export function makeShuffleRound(prompt: VocabularyPrompt): ShuffleRound {
  const letters = prompt.targetWord.toUpperCase().split("");
  const shuffled = guaranteedShuffle(letters);
  return {
    id: crypto.randomUUID(),
    prompt,
    tiles: shuffled.map((ch) => ({ id: crypto.randomUUID(), value: ch })),
  };
}

// --- AnswerSlotReflow ---

function moveNearestEmptySlot(slotIDs: (string | null)[], targetIndex: number): (string | null)[] {
  const result = [...slotIDs];
  const emptyIndices = result.map((v, i) => (v == null ? i : -1)).filter((i) => i >= 0);

  let nearestEmptyIndex: number | undefined;
  let bestDist = Infinity;
  for (const ei of emptyIndices) {
    const d = Math.abs(ei - targetIndex);
    if (d < bestDist || (d === bestDist && ei < (nearestEmptyIndex ?? Infinity))) {
      bestDist = d;
      nearestEmptyIndex = ei;
    }
  }
  if (nearestEmptyIndex === undefined) return result;

  if (nearestEmptyIndex < targetIndex) {
    for (let index = nearestEmptyIndex; index < targetIndex; index++) {
      result[index] = result[index + 1]!;
    }
  } else if (nearestEmptyIndex > targetIndex) {
    for (let index = nearestEmptyIndex; index > targetIndex; index--) {
      result[index] = result[index - 1]!;
    }
  }
  result[targetIndex] = null;
  return result;
}

export function previewSlotIDs(
  placedTileIDs: (string | null)[],
  draggingTileID: string,
  targetIndex: number | null | undefined
): (string | null)[] {
  if (placedTileIDs.length === 0) return placedTileIDs;

  const fallbackIndex =
    placedTileIDs.findIndex((id) => id === draggingTileID) >= 0
      ? placedTileIDs.findIndex((id) => id === draggingTileID)
      : placedTileIDs.findIndex((id) => id == null) >= 0
        ? placedTileIDs.findIndex((id) => id == null)
        : 0;

  const clampedTargetIndex = Math.min(
    Math.max(targetIndex ?? fallbackIndex, 0),
    placedTileIDs.length - 1
  );

  let working = [...placedTileIDs];
  const sourceIndex = placedTileIDs.findIndex((id) => id === draggingTileID);
  if (sourceIndex >= 0) working[sourceIndex] = null;

  return moveNearestEmptySlot(working, clampedTargetIndex);
}

function committedSlotIDs(
  placedTileIDs: (string | null)[],
  draggingTileID: string,
  targetIndex: number
): (string | null)[] {
  const preview = previewSlotIDs(placedTileIDs, draggingTileID, targetIndex);
  if (targetIndex < 0 || targetIndex >= preview.length) return preview;
  const next = [...preview];
  next[targetIndex] = draggingTileID;
  return next;
}

// --- ShuffleSession ---

export class ShuffleSession {
  rounds: ShuffleRound[];
  currentRoundIndex = 0;
  placedTileIDs: (string | null)[] = [];
  hintLockedIndices = new Set<number>();
  state: RoundState = "playing";

  constructor(rounds: ShuffleRound[]) {
    this.rounds = shuffleArray(rounds);
    this.resetForCurrentRound();
  }

  get currentRound(): ShuffleRound | null {
    return this.rounds[this.currentRoundIndex] ?? null;
  }

  get placedTiles(): (LetterTile | null)[] {
    const round = this.currentRound;
    if (!round) return [];
    return this.placedTileIDs.map((id) => {
      if (id == null) return null;
      return round.tiles.find((t) => t.id === id) ?? null;
    });
  }

  get answerLetters(): string[] {
    const p = this.currentRound?.prompt.targetWord.toUpperCase() ?? "";
    return [...p];
  }

  get allSlotsFilled(): boolean {
    return this.placedTileIDs.every((id) => id != null);
  }

  get isCurrentRoundSolved(): boolean {
    const answer = this.answerLetters;
    if (this.placedTiles.length !== answer.length) return false;
    return this.placedTiles.every((tile, i) => tile?.value === answer[i]);
  }

  private checkAutoStateTransition(): void {
    if (this.isCurrentRoundSolved) {
      this.state = "solved";
      return;
    }
    if (this.allSlotsFilled && this.state === "playing") {
      this.state = "allPlaced";
    }
  }

  tileStateAt(index: number): TileState {
    if (this.hintLockedIndices.has(index)) return "hintLocked";
    switch (this.state) {
      case "playing":
        return "idle";
      case "allPlaced":
        return this.placedTiles[index]?.value === this.answerLetters[index] ? "correct" : "wrong";
      case "solved":
      case "celebrating":
        return "correct";
      default:
        return "idle";
    }
  }

  place(tile: LetterTile, targetIndex: number): void {
    if (this.state !== "playing" && this.state !== "allPlaced") return;
    if (targetIndex < 0 || targetIndex >= this.placedTileIDs.length) return;
    if (this.hintLockedIndices.has(targetIndex)) return;

    const sourceIndex = this.placedTileIDs.findIndex((id) => id === tile.id);
    if (sourceIndex === targetIndex) return;

    const displaced = this.placedTileIDs[targetIndex];

    if (sourceIndex >= 0) {
      if (this.hintLockedIndices.has(sourceIndex)) return;
      this.placedTileIDs[sourceIndex] = displaced;
    }

    this.placedTileIDs[targetIndex] = tile.id;
    this.checkAutoStateTransition();
  }

  movePlacedTile(tile: LetterTile, to: number): void {
    if (this.state !== "playing" && this.state !== "allPlaced") return;
    if (to < 0 || to >= this.placedTileIDs.length) return;
    if (this.hintLockedIndices.has(to)) return;
    const sourceIndex = this.placedTileIDs.findIndex((id) => id === tile.id);
    if (sourceIndex < 0 || sourceIndex === to) return;
    if (this.hintLockedIndices.has(sourceIndex)) return;

    const movingID = this.placedTileIDs[sourceIndex];

    if (sourceIndex < to) {
      for (let i = sourceIndex; i < to; i++) {
        this.placedTileIDs[i] = this.placedTileIDs[i + 1]!;
      }
    } else {
      for (let i = sourceIndex; i > to; i--) {
        this.placedTileIDs[i] = this.placedTileIDs[i - 1]!;
      }
    }
    this.placedTileIDs[to] = movingID!;
    this.checkAutoStateTransition();
  }

  dropPlacedTile(tile: LetterTile, targetIndex: number): void {
    if (this.state !== "playing" && this.state !== "allPlaced") return;
    if (targetIndex < 0 || targetIndex >= this.placedTileIDs.length) return;
    if (this.hintLockedIndices.has(targetIndex)) return;
    const sourceIndex = this.placedTileIDs.findIndex((id) => id === tile.id);
    if (sourceIndex < 0) return;
    if (this.hintLockedIndices.has(sourceIndex)) return;

    const newPlacement = committedSlotIDs(this.placedTileIDs, tile.id, targetIndex);
    for (const index of this.hintLockedIndices) {
      if (index < newPlacement.length && newPlacement[index] !== this.placedTileIDs[index]) {
        return;
      }
    }
    this.placedTileIDs = newPlacement;
    this.checkAutoStateTransition();
  }

  dropBankTile(tile: LetterTile, targetIndex: number): void {
    if (this.state !== "playing" && this.state !== "allPlaced") return;
    if (targetIndex < 0 || targetIndex >= this.placedTileIDs.length) return;
    if (this.hintLockedIndices.has(targetIndex)) return;
    if (this.placedTileIDs.includes(tile.id)) {
      this.dropPlacedTile(tile, targetIndex);
      return;
    }
    const newPlacement = committedSlotIDs(this.placedTileIDs, tile.id, targetIndex);
    for (const index of this.hintLockedIndices) {
      if (index < newPlacement.length && newPlacement[index] !== this.placedTileIDs[index]) {
        return;
      }
    }
    this.placedTileIDs = newPlacement;
    this.checkAutoStateTransition();
  }

  remove(tile: LetterTile): void {
    if (this.state !== "playing" && this.state !== "allPlaced") return;
    const index = this.placedTileIDs.findIndex((id) => id === tile.id);
    if (index < 0) return;
    if (this.hintLockedIndices.has(index)) return;
    this.placedTileIDs[index] = null;
    if (this.state === "allPlaced") this.state = "playing";
  }

  moveTileToBank(tile: LetterTile): void {
    this.remove(tile);
  }

  clearBoard(): void {
    if (this.state !== "playing" && this.state !== "allPlaced") return;
    for (let i = 0; i < this.placedTileIDs.length; i++) {
      if (!this.hintLockedIndices.has(i)) this.placedTileIDs[i] = null;
    }
    if (this.state === "allPlaced") this.state = "playing";
  }

  private resetForCurrentRound(): void {
    const round = this.currentRound;
    if (!round) return;
    this.hintLockedIndices = new Set();
    this.state = "playing";
    this.placedTileIDs = Array(round.prompt.targetWord.length).fill(null);
  }
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

export function cloneSession(s: ShuffleSession): ShuffleSession {
  const c = new ShuffleSession([]);
  c.rounds = s.rounds;
  c.currentRoundIndex = s.currentRoundIndex;
  c.placedTileIDs = [...s.placedTileIDs];
  c.hintLockedIndices = new Set(s.hintLockedIndices);
  c.state = s.state;
  return c;
}

// --- Board layout ---

type TilePlacement = { kind: "answer"; index: number } | { kind: "bank" };
type DropTarget = { kind: "answer"; index: number } | { kind: "bank" };

type BoardRect = { x: number; y: number; width: number; height: number; maxX: number; maxY: number };

function rect(x: number, y: number, w: number, h: number): BoardRect {
  return { x, y, width: w, height: h, maxX: x + w, maxY: y + h };
}

function unionRects(rects: BoardRect[]): BoardRect | null {
  if (rects.length === 0) return null;
  const minX = Math.min(...rects.map((r) => r.x));
  const minY = Math.min(...rects.map((r) => r.y));
  const maxX = Math.max(...rects.map((r) => r.maxX));
  const maxY = Math.max(...rects.map((r) => r.maxY));
  return rect(minX, minY, maxX - minX, maxY - minY);
}

function insetRect(r: BoardRect, dx: number, dy: number): BoardRect {
  return rect(r.x - dx, r.y - dy, r.width + 2 * dx, r.height + 2 * dy);
}

function contains(r: BoardRect, x: number, y: number): boolean {
  return x >= r.x && x <= r.maxX && y >= r.y && y <= r.maxY;
}

function stableRotation(index: number): number {
  const seed = ((index * 7 + 3) % 11) / 11;
  return (seed - 0.5) * 6;
}

const TAP_THRESHOLD = 10;
const PROMPT_ANSWER_SPACING = 20;
const ANSWER_MESSAGE_SPACING = 12;
const SECTION_PULL_IN = 14;
const BANK_ROW_SPACING = 14;
const BANK_TILE_SPACING = 10;

function bankRowsOriginY(containerHeight: number, bankRows: LetterTile[][], tileHeight: number): number {
  const safeRowCount = Math.max(bankRows.length, 1);
  const bankHeight = safeRowCount * tileHeight + Math.max(safeRowCount - 1, 0) * BANK_ROW_SPACING;
  const bottomHalfOrigin = containerHeight * 0.5 - SECTION_PULL_IN;
  const bottomHalfHeight = containerHeight - bottomHalfOrigin;
  return bottomHalfOrigin + Math.max((bottomHalfHeight - bankHeight) / 2, 0);
}

type BoardMetrics = {
  answerTileSize: { width: number; height: number };
  bankTileSize: { width: number; height: number };
  promptFrame: BoardRect;
  answerSlotRects: BoardRect[];
  messageFrame: BoardRect;
  bankSlotRects: Map<string, BoardRect>;
  bankFrame: BoardRect | null;
};

function computeBoardMetrics(
  containerWidth: number,
  containerHeight: number,
  answerCount: number,
  bankRows: LetterTile[][]
): BoardMetrics {
  const horizontalPadding = 20;
  const topPadding = 12;
  const availableWidth = Math.max(containerWidth - horizontalPadding * 2, 1);

  const answerTile = answerTileSize(answerCount, availableWidth);
  const bankTile = BANK_TILE_SIZE;

  const promptHeight = 92;
  const messageHeight = 24;
  const topGroupHeight =
    promptHeight + PROMPT_ANSWER_SPACING + answerTile.height + ANSWER_MESSAGE_SPACING + messageHeight;
  const topBandHeight = containerHeight * 0.5 + SECTION_PULL_IN;
  const topGroupOriginY = Math.max((topBandHeight - topGroupHeight) / 2, topPadding);

  const promptFrame = rect(horizontalPadding, topGroupOriginY, availableWidth, promptHeight);

  const answerSlotRects: BoardRect[] = [];
  if (answerCount > 0) {
    const effW = answerTile.width * 0.92;
    const rowW = answerTile.width + (answerCount - 1) * effW;
    const originX = horizontalPadding + (availableWidth - rowW) / 2;
    const topPad = promptFrame.maxY + PROMPT_ANSWER_SPACING;
    for (let i = 0; i < answerCount; i++) {
      answerSlotRects.push(rect(originX + i * effW, topPad, answerTile.width, answerTile.height));
    }
  }

  const firstAnswer = answerSlotRects[0];
  const messageY = (firstAnswer?.maxY ?? promptFrame.maxY) + ANSWER_MESSAGE_SPACING;
  const messageFrame = rect(horizontalPadding, messageY, availableWidth, messageHeight);

  const bankOriginY = bankRowsOriginY(containerHeight, bankRows, bankTile.height);
  const bankSlotRects = new Map<string, BoardRect>();
  let rowY = bankOriginY;
  for (const row of bankRows) {
    const rowW = row.length * bankTile.width + Math.max(row.length - 1, 0) * BANK_TILE_SPACING;
    const rowX = horizontalPadding + (availableWidth - rowW) / 2;
    row.forEach((tile, col) => {
      bankSlotRects.set(
        tile.id,
        rect(rowX + col * (bankTile.width + BANK_TILE_SPACING), rowY, bankTile.width, bankTile.height)
      );
    });
    rowY += bankTile.height + BANK_ROW_SPACING;
  }

  const bankFrameUnion = unionRects([...bankSlotRects.values()]);
  const bankFrame = bankFrameUnion ? insetRect(bankFrameUnion, 14, 14) : null;

  return {
    answerTileSize: answerTile,
    bankTileSize: bankTile,
    promptFrame,
    answerSlotRects,
    messageFrame,
    bankSlotRects,
    bankFrame,
  };
}

// --- Presentation ---

function LetterTileView({
  letter,
  state,
  size,
}: {
  letter: string;
  state: TileState;
  size: { width: number; height: number };
}) {
  const r = cornerRadiusForSize(size.width, size.height);
  const dragging = state === "dragging";
  return (
    <div
      style={{
        width: size.width,
        height: size.height,
        borderRadius: r,
        background: "var(--lg-bg-primary)",
        boxShadow: "0 3px 6px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: dragging ? "scale(0.92)" : "scale(1)",
        transition: "transform 0.2s ease",
        border:
          state === "correct" || state === "wrong"
            ? "2px solid var(--lg-bg-accent)"
            : "1px solid rgba(0,122,255,0.35)",
      }}
    >
      <span
        style={{
          fontSize: Math.min(size.width * 0.54, 30),
          fontWeight: 900,
          fontFamily: "ui-rounded, system-ui, sans-serif",
          color: "var(--lg-fg-primary)",
        }}
      >
        {letter}
      </span>
    </div>
  );
}

function EmptySlotView({ size }: { size: { width: number; height: number } }) {
  const r = cornerRadiusForSize(size.width, size.height);
  return (
    <div
      style={{
        width: size.width,
        height: size.height,
        borderRadius: r,
        background: "var(--lg-bg-secondary)",
        border: "2px dashed rgba(0,122,255,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--lg-fg-secondary)",
        fontWeight: 700,
        fontSize: 18,
      }}
    >
      +
    </div>
  );
}

function BankDropSlotView({
  size,
  highlighted,
  occupied,
}: {
  size: { width: number; height: number };
  highlighted: boolean;
  occupied: boolean;
}) {
  const r = cornerRadiusForSize(size.width, size.height);
  return (
    <div
      style={{
        width: size.width,
        height: size.height,
        borderRadius: r,
        background: occupied ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.08)",
        border: `${highlighted ? 2 : 1.5}px dashed rgba(0,122,255,${highlighted ? 0.45 : 0.18})`,
      }}
    />
  );
}

function PromptCardView({ prompt, onSpeak }: { prompt: VocabularyPrompt; onSpeak: () => void }) {
  const side = 44;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--lg-fg-secondary)" }}>{prompt.topic}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
        <div style={{ width: side, height: side }} />
        <div
          style={{
            fontSize: 40,
            fontWeight: 900,
            fontFamily: "ui-rounded, system-ui, sans-serif",
            letterSpacing: -1,
            flex: 1,
            textAlign: "center",
            color: "var(--lg-fg-primary)",
          }}
        >
          {prompt.sourceWord.charAt(0).toUpperCase() + prompt.sourceWord.slice(1)}
        </div>
        <button
          type="button"
          onClick={onSpeak}
          style={{
            width: side,
            height: side,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: 22,
          }}
          aria-label={`Hear ${prompt.targetLanguage} pronunciation`}
        >
          🔊
        </button>
      </div>
    </div>
  );
}

// --- BuildBoardView ---

export function BuildBoardView({
  session,
  onSessionChange,
  feedbackMessage,
  onInteraction,
  onSpeak,
}: {
  session: ShuffleSession;
  onSessionChange: (s: ShuffleSession) => void;
  feedbackMessage: string;
  onInteraction?: () => void;
  onSpeak?: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 400, h: 600 });

  const round = session.currentRound;
  const bankRows = useMemo(() => (round ? splitIntoBalancedRows(round.tiles) : []), [round]);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(el);
    const r = el.getBoundingClientRect();
    setSize({ w: r.width, h: r.height });
    return () => ro.disconnect();
  }, []);

  const metrics = useMemo(() => {
    if (!round) return null;
    return computeBoardMetrics(size.w, size.h, round.prompt.targetWord.length, bankRows);
  }, [size, round, bankRows]);

  const dragRef = useRef<{
    tileId: string | null;
    origin: TilePlacement | null;
    offset: { x: number; y: number };
    hover: DropTarget | null;
    startClient: { x: number; y: number };
  }>({
    tileId: null,
    origin: null,
    offset: { x: 0, y: 0 },
    hover: null,
    startClient: { x: 0, y: 0 },
  });

  const [, bump] = useState(0);
  const forceRender = () => bump((x) => x + 1);

  const commit = useCallback(
    (mutate: (s: ShuffleSession) => void) => {
      const next = cloneSession(session);
      mutate(next);
      onSessionChange(next);
      onInteraction?.();
    },
    [session, onSessionChange, onInteraction]
  );

  const tilePlacement = useCallback(
    (tile: LetterTile): TilePlacement => {
      const idx = session.placedTileIDs.findIndex((id) => id === tile.id);
      if (idx >= 0) return { kind: "answer", index: idx };
      return { kind: "bank" };
    },
    [session.placedTileIDs]
  );

  const dropTargetAt = useCallback((x: number, y: number, m: BoardMetrics): DropTarget | null => {
    for (let i = 0; i < m.answerSlotRects.length; i++) {
      const rSlot = insetRect(m.answerSlotRects[i]!, -12, -18);
      if (contains(rSlot, x, y)) return { kind: "answer", index: i };
    }
    if (m.bankFrame && contains(m.bankFrame, x, y)) return { kind: "bank" };
    return null;
  }, []);

  const rectFor = useCallback((tile: LetterTile, placement: TilePlacement, m: BoardMetrics): BoardRect => {
    if (placement.kind === "answer") {
      return m.answerSlotRects[placement.index] ?? rect(0, 0, 0, 0);
    }
    return m.bankSlotRects.get(tile.id) ?? rect(0, 0, 0, 0);
  }, []);

  const centerFor = useCallback(
    (placement: TilePlacement, tile: LetterTile, m: BoardMetrics) => {
      const r = rectFor(tile, placement, m);
      return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
    },
    [rectFor]
  );

  const livePreviewIds = useCallback((): (string | null)[] => {
    const d = dragRef.current;
    if (!d.tileId || !d.origin || !round) return session.placedTileIDs;

    let targetIndex: number | null = null;
    if (d.origin.kind === "answer") {
      if (d.hover?.kind === "answer") targetIndex = d.hover.index;
      else targetIndex = d.origin.index;
    } else {
      if (d.hover?.kind === "answer") targetIndex = d.hover.index;
      else return session.placedTileIDs;
    }
    return previewSlotIDs(session.placedTileIDs, d.tileId, targetIndex);
  }, [session.placedTileIDs, round]);

  const displayPlacement = useCallback(
    (tile: LetterTile, previewIds: (string | null)[]): TilePlacement => {
      const d = dragRef.current;
      if (d.tileId === tile.id) {
        return d.origin ?? tilePlacement(tile);
      }
      const pi = previewIds.findIndex((id) => id === tile.id);
      if (pi >= 0) return { kind: "answer", index: pi };
      return { kind: "bank" };
    },
    [tilePlacement]
  );

  const onTilePointerDown = (tile: LetterTile, e: React.PointerEvent) => {
    if (!metrics || !round) return;
    if (session.state !== "playing" && session.state !== "allPlaced") return;
    e.preventDefault();
    e.stopPropagation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);

    const placement = tilePlacement(tile);
    dragRef.current = {
      tileId: tile.id,
      origin: placement,
      offset: { x: 0, y: 0 },
      hover: null,
      startClient: { x: e.clientX, y: e.clientY },
    };
    forceRender();

    const onMove = (ev: PointerEvent) => {
      const d = dragRef.current;
      if (!d.tileId || !metrics || !round) return;
      const ox = ev.clientX - d.startClient.x;
      const oy = ev.clientY - d.startClient.y;
      const t = round.tiles.find((x) => x.id === d.tileId);
      if (!t) return;
      const pl = d.origin ?? tilePlacement(t);
      const base = rectFor(t, pl, metrics);
      const hx = base.x + base.width / 2 + ox;
      const hy = base.y + base.height / 2 + oy;
      const hover = dropTargetAt(hx, hy, metrics);
      dragRef.current = { ...d, offset: { x: ox, y: oy }, hover };
      forceRender();
    };

    const onUp = (ev: PointerEvent) => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        /* pointer may already be released */
      }

      const d = dragRef.current;
      const m = metrics;
      if (!m || !round || !d.tileId || !d.origin) {
        dragRef.current = {
          tileId: null,
          origin: null,
          offset: { x: 0, y: 0 },
          hover: null,
          startClient: { x: 0, y: 0 },
        };
        forceRender();
        return;
      }

      const tTile = round.tiles.find((x) => x.id === d.tileId);
      if (!tTile) {
        dragRef.current = {
          tileId: null,
          origin: null,
          offset: { x: 0, y: 0 },
          hover: null,
          startClient: { x: 0, y: 0 },
        };
        forceRender();
        return;
      }

      const placement = d.origin;
      const ox = ev.clientX - d.startClient.x;
      const oy = ev.clientY - d.startClient.y;
      const dist = Math.hypot(ox, oy);

      const base = rectFor(tTile, placement, m);
      const hx = base.x + base.width / 2 + ox;
      const hy = base.y + base.height / 2 + oy;
      const target = dropTargetAt(hx, hy, m);

      dragRef.current = {
        tileId: null,
        origin: null,
        offset: { x: 0, y: 0 },
        hover: null,
        startClient: { x: 0, y: 0 },
      };
      forceRender();

      if (dist < TAP_THRESHOLD) {
        if (placement.kind === "answer") {
          commit((sess) => sess.moveTileToBank(tTile));
        } else {
          const idx = session.placedTileIDs.findIndex((id) => id == null);
          if (idx >= 0) commit((sess) => sess.place(tTile, idx));
        }
        return;
      }

      if (placement.kind === "answer") {
        if (target?.kind === "bank") {
          commit((sess) => sess.moveTileToBank(tTile));
        } else if (target?.kind === "answer") {
          const cur = session.placedTileIDs.findIndex((id) => id === tTile.id);
          if (cur >= 0 && cur !== target.index) {
            commit((sess) => sess.dropPlacedTile(tTile, target.index));
          }
        }
      } else if (target?.kind === "answer") {
        commit((sess) => sess.dropBankTile(tTile, target.index));
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };

  if (!round || !metrics) return null;

  const previewIds = livePreviewIds();
  const d = dragRef.current;

  return (
    <div ref={wrapRef} style={{ ...cssVars, position: "relative", width: "100%", height: "100%", minHeight: 480 }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            left: metrics.promptFrame.x,
            top: metrics.promptFrame.y,
            width: metrics.promptFrame.width,
            height: metrics.promptFrame.height,
            pointerEvents: "auto",
          }}
        >
          <PromptCardView prompt={round.prompt} onSpeak={() => onSpeak?.()} />
        </div>

        {metrics.answerSlotRects.map((rSlot, index) => (
          <div
            key={`slot-${index}`}
            style={{
              position: "absolute",
              left: rSlot.x,
              top: rSlot.y,
              transform: `rotate(${stableRotation(index)}deg)`,
            }}
          >
            <EmptySlotView size={metrics.answerTileSize} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: cornerRadiusForSize(metrics.answerTileSize.width, metrics.answerTileSize.height),
                boxShadow:
                  d.hover?.kind === "answer" && d.hover.index === index
                    ? "0 0 0 3px rgba(0,122,255,0.55)"
                    : "none",
                pointerEvents: "none",
              }}
            />
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            left: metrics.messageFrame.x,
            top: metrics.messageFrame.y,
            width: metrics.messageFrame.width,
            height: metrics.messageFrame.height,
            fontSize: 15,
            fontWeight: 600,
            color: "var(--lg-fg-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {feedbackMessage}
        </div>

        {round.tiles.map((tile) => {
          const br = metrics.bankSlotRects.get(tile.id);
          if (!br) return null;
          const placed = session.placedTileIDs.includes(tile.id);
          return (
            <div key={`bankslot-${tile.id}`} style={{ position: "absolute", left: br.x, top: br.y }}>
              <BankDropSlotView
                size={metrics.bankTileSize}
                highlighted={d.hover?.kind === "bank" && d.origin?.kind === "answer"}
                occupied={!placed}
              />
            </div>
          );
        })}
      </div>

      {round.tiles.map((tile) => {
        const placement = displayPlacement(tile, previewIds);
        const isDragged = d.tileId === tile.id;
        const m = metrics;
        const sizeFor = placement.kind === "answer" ? m.answerTileSize : m.bankTileSize;
        const center = centerFor(placement, tile, m);
        const off = isDragged ? d.offset : { x: 0, y: 0 };
        const left = center.x - sizeFor.width / 2 + off.x;
        const top = center.y - sizeFor.height / 2 + off.y;

        let visualState: TileState = "idle";
        if (isDragged) visualState = "dragging";
        else if (placement.kind === "answer") {
          visualState = session.tileStateAt(placement.index);
        }

        const rot = placement.kind === "answer" ? stableRotation(placement.index) : 0;

        const z = isDragged
          ? 10000
          : placement.kind === "answer"
            ? 1000 + placement.index
            : session.placedTileIDs.includes(tile.id)
              ? 0
              : 10;

        return (
          <div
            key={tile.id}
            onPointerDown={(ev) => onTilePointerDown(tile, ev)}
            style={{
              position: "absolute",
              left,
              top,
              width: sizeFor.width,
              height: sizeFor.height,
              zIndex: z,
              transform: `rotate(${rot}deg) scale(${isDragged ? 1.08 : 1})`,
              cursor: "grab",
              touchAction: "none",
            }}
          >
            <LetterTileView letter={tile.value} state={visualState} size={sizeFor} />
          </div>
        );
      })}
    </div>
  );
}

// --- Demo wrapper ---

export function WordShuffleWebDemo({ prompt }: { prompt: VocabularyPrompt }) {
  const [session, setSession] = useState(() => new ShuffleSession([makeShuffleRound(prompt)]));

  const feedback = useMemo(() => {
    if (session.state === "allPlaced" && !session.isCurrentRoundSolved) {
      return "Some letters are in the wrong place";
    }
    if (session.state === "solved") return "Nice!";
    return "";
  }, [session]);

  return (
    <div style={{ width: "100%", maxWidth: 560, margin: "0 auto", padding: 24, ...cssVars }}>
      <BuildBoardView
        session={session}
        onSessionChange={setSession}
        feedbackMessage={feedback}
        onSpeak={() => {
          /* optional: speechSynthesis */
        }}
      />
    </div>
  );
}
