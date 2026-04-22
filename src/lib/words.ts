/**
 * Letters word-tile animations and interactive card puzzle.
 *
 * Ported from the original `words.js`. DOM-manipulation style is preserved
 * intentionally, because the tile animations (stagger, crossfade, drag ghost,
 * success flip) are carefully tuned against the CSS custom properties in
 * `globals.css`. React components mount a static skeleton and then call
 * `initWordContainer` / `initLettersCardDemo` inside `useEffect`.
 */

type Locale = "en" | "es";

const WORDS_BY_LOCALE: Record<Locale, string[]> = {
  en: [
    "Welcome",
    "Hello",
    "Hi",
    "Words",
    "Letters",
    "Play",
    "Puzzle",
    "Game",
    "Learn",
    "Spell",
    "Letters.game",
    "Wordplay",
    "Daily",
    "Fun",
    "Challenge",
    "Practice",
    "Score",
    "Nice",
    "Great",
    "Wow",
  ],
  es: [
    "Bienvenido",
    "Hola",
    "Palabras",
    "Letras",
    "Jugar",
    "Juego",
    "Aprender",
    "Divertido",
    "Reto",
    "Práctica",
    "Genial",
    "Vamos",
    "Súper",
    "Perfecto",
    "Letters.game",
    "Palabra",
    "Puzle",
    "Diario",
    "Nivel",
    "Gana",
  ],
};

const WORD_CLUES_BY_LOCALE: Record<Locale, Record<string, string>> = {
  en: {
    welcome: "A friendly greeting when someone arrives",
    hello: "A simple greeting",
    hi: "A very short greeting",
    words: "Units of language you read and write",
    letters: "Alphabet pieces used to spell words",
    play: "Have fun in a game",
    puzzle: "A brain-teasing challenge",
    game: "An activity with rules and goals",
    learn: "Build knowledge or a new skill",
    spell: "Put letters in the correct order",
    "letters.game": "The website name",
    wordplay: "Fun with language and meanings",
    daily: "Happening every day",
    fun: "Enjoyable and playful",
    challenge: "Something that tests your skill",
    practice: "Repeat to get better",
    score: "Points you earn in a game",
    nice: "Kind or pleasant",
    great: "Really good",
    wow: "Reaction of surprise",
    hermana: "Sister",
    madre: "Mother",
    padre: "Father",
    hermano: "Brother",
    abuela: "Grandmother",
    abuelo: "Grandfather",
    viaje: "Trip or journey",
    comer: "To eat",
    hola: "Hello",
    gracias: "Thanks",
    familia: "Family",
  },
  es: {
    bienvenido: "Saludo para recibir a alguien",
    hola: "Saludo comun",
    palabras: "Unidades del lenguaje",
    letras: "Piezas del alfabeto",
    jugar: "Pasarlo bien en un juego",
    juego: "Actividad con reglas",
    aprender: "Adquirir conocimiento",
    divertido: "Que causa alegria",
    reto: "Algo que pone a prueba",
    práctica: "Repeticion para mejorar",
    genial: "Muy bueno",
    vamos: "Invitacion para empezar",
    súper: "Excelente o muy bueno",
    perfecto: "Sin errores",
    palabra: "Conjunto de letras con significado",
    puzle: "Rompecabezas",
    diario: "Que ocurre cada dia",
    nivel: "Etapa o grado",
    gana: "Consigue la victoria",
  },
};

export function contentLocale(): Locale {
  if (typeof document === "undefined") return "en";
  const lang = (document.documentElement.lang || "en").toLowerCase();
  return lang.startsWith("es") ? "es" : "en";
}

function wordListForLocale(): string[] {
  return WORDS_BY_LOCALE[contentLocale()] || WORDS_BY_LOCALE.en;
}

function clueMapForLocale(locale: Locale = contentLocale()) {
  return WORD_CLUES_BY_LOCALE[locale] || WORD_CLUES_BY_LOCALE.en;
}

export function clueForWord(word: string, locale: Locale = contentLocale()): string {
  const key = String(word || "").trim().toLowerCase();
  if (!key) return locale === "es" ? "Adivina la palabra" : "Guess the word";
  const localeMap = clueMapForLocale(locale);
  const fallbackMap = WORD_CLUES_BY_LOCALE.en;
  return (
    localeMap[key] ||
    fallbackMap[key] ||
    (locale === "es" ? "Adivina la palabra" : "Guess the word")
  );
}

function stableRotationDeg(index: number): number {
  const seed = ((index * 7 + 3) % 11) / 11;
  return (seed - 0.5) * 6;
}

const WORD_CYCLE_MS = 3000;
const EXIT_PAD_MS = 120;
const ENTER_PAD_MS = 80;
const ENTER_OVERLAP_MS = 160;

function pickWord(): string {
  const list = wordListForLocale();
  return list[Math.floor(Math.random() * list.length)];
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function parseCssTimeMs(value: string | null | undefined, fallback: number): number {
  const raw = String(value ?? "").trim();
  if (!raw) return fallback;
  if (/ms$/i.test(raw)) return Number.parseFloat(raw) || fallback;
  if (/s$/i.test(raw)) return (Number.parseFloat(raw) || 0) * 1000;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n * 1000 : fallback;
}

function durationFromRootVar(prop: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(prop)
    .trim();
  return parseCssTimeMs(raw, fallback);
}

function exitDurationForTiles(n: number): number {
  if (prefersReducedMotion()) return 0;
  const exitMs = durationFromRootVar("--tile-exit-dur", 420);
  const staggerMs = durationFromRootVar("--tile-stagger-ms", 42);
  const staggerSpan = n > 0 ? (n - 1) * staggerMs : 0;
  return Math.round(exitMs + staggerSpan + EXIT_PAD_MS);
}

function enterDurationForTiles(n: number): number {
  if (prefersReducedMotion()) return 0;
  const enterMs = durationFromRootVar("--tile-enter-dur", 550);
  const staggerMs = durationFromRootVar("--tile-stagger-ms", 42);
  const staggerSpan = n > 0 ? (n - 1) * staggerMs : 0;
  return Math.round(ENTER_OVERLAP_MS + enterMs + staggerSpan + ENTER_PAD_MS);
}

function getOrCreateFit(container: HTMLElement): HTMLElement {
  let el = container.querySelector(":scope > .word__fit") as HTMLElement | null;
  if (!el) {
    el = document.createElement("div");
    el.className = "word__fit";
    container.appendChild(el);
  }
  return el;
}

function getSizingRoot(container: HTMLElement): HTMLElement | null {
  return (
    (container.closest(".letters-word-mount") as HTMLElement | null) ||
    (container.closest(".main") as HTMLElement | null)
  );
}

function fitInnerSize(root: HTMLElement) {
  const box =
    (root.querySelector(".main__stage") as HTMLElement | null) ||
    (root.querySelector(".letters-word-mount__stage") as HTMLElement | null) ||
    root;
  const st = getComputedStyle(box);
  const padX =
    (parseFloat(st.paddingLeft) || 0) + (parseFloat(st.paddingRight) || 0);
  const padY =
    (parseFloat(st.paddingTop) || 0) + (parseFloat(st.paddingBottom) || 0);
  return {
    w: Math.max(0, box.clientWidth - padX),
    h: Math.max(0, box.clientHeight - padY),
  };
}

function measureFitContentSize(fit: HTMLElement) {
  let maxW = 0;
  let maxH = 0;
  const layers = fit.querySelectorAll<HTMLElement>(".word-layer");
  for (const layer of layers) {
    maxW = Math.max(maxW, layer.offsetWidth);
    maxH = Math.max(maxH, layer.offsetHeight);
  }
  return {
    w: maxW || fit.scrollWidth,
    h: maxH || fit.scrollHeight,
  };
}

const wordFitRafByContainer = new WeakMap<HTMLElement, number>();

function scheduleWordFit(container: HTMLElement) {
  if (!container) return;
  const prev = wordFitRafByContainer.get(container);
  if (prev) cancelAnimationFrame(prev);
  const id = requestAnimationFrame(() => {
    wordFitRafByContainer.delete(container);
    applyWordFit(container);
  });
  wordFitRafByContainer.set(container, id);
}

function applyWordFit(container: HTMLElement) {
  const root = getSizingRoot(container);
  const fit = container.querySelector(":scope > .word__fit") as HTMLElement | null;
  if (!root || !fit) return;

  container.style.setProperty("--word-fit-scale", "1");
  void container.offsetHeight;

  const { w: naturalW, h: naturalH } = measureFitContentSize(fit);
  if (!naturalW || !naturalH) return;

  const { w: availW, h: availH } = fitInnerSize(root);
  const pad = 2;
  const scaleW = (availW - pad) / naturalW;
  const scaleH = (availH - pad) / naturalH;
  let scale = Math.min(1, scaleW, scaleH);
  if (!Number.isFinite(scale) || scale <= 0) scale = 1;

  container.style.setProperty("--word-fit-scale", String(scale));
}

function buildLayerElement(word: string): HTMLElement {
  const layer = document.createElement("div");
  layer.className = "word-layer";

  let tileIndex = 0;
  [...word].forEach((char) => {
    const tile = document.createElement("span");
    tile.className = "tile";
    tile.setAttribute("aria-hidden", "true");

    const face = document.createElement("span");
    face.className = "tile__face";
    if (char !== " ") face.textContent = char;

    tile.appendChild(face);

    const depth = tileIndex + 1;
    tile.style.setProperty("--z", String(depth));
    tile.style.setProperty("--tilt", `${stableRotationDeg(tileIndex)}deg`);
    tile.style.setProperty("--stagger", String(tileIndex));
    tileIndex += 1;

    layer.appendChild(tile);
  });

  return layer;
}

function installWord(container: HTMLElement, word: string) {
  const fit = getOrCreateFit(container);
  fit.replaceChildren();
  container.classList.remove("word--crossfade");
  fit.appendChild(buildLayerElement(word));
  container.setAttribute("aria-label", word);
  scheduleWordFit(container);
}

function parseWordsAttr(value: string | null | undefined): string[] {
  if (!value || !String(value).trim()) return [];
  return String(value)
    .split(/[,|]/u)
    .map((s) => s.trim())
    .filter(Boolean);
}

function cycleIntervalMs(container: HTMLElement): number {
  const raw = container.getAttribute("data-letters-interval");
  if (raw) {
    const n = Number.parseInt(raw, 10);
    if (Number.isFinite(n) && n >= 800) return n;
  }
  return WORD_CYCLE_MS;
}

function makeWordPicker(container: HTMLElement, list: string[]) {
  if (!list.length) return () => pickWord();
  if (list.length === 1) return () => list[0];
  const mode = (container.getAttribute("data-letters-rotate") || "sequential")
    .toLowerCase()
    .trim();
  if (mode === "random") {
    return () => list[Math.floor(Math.random() * list.length)];
  }
  let i = 0;
  return () => {
    const w = list[i % list.length];
    i += 1;
    return w;
  };
}

function shouldCycle(container: HTMLElement, list: string[], staticWord: string | null): boolean {
  if (staticWord) return false;
  if (!list.length) return true;
  return list.length > 1;
}

function cycleWordsForContainer(container: HTMLElement, pickWordFn: () => string) {
  const delayMs = cycleIntervalMs(container);
  window.setTimeout(function tick() {
    const fit = getOrCreateFit(container);
    const active = fit.querySelector(".word-layer:last-of-type") as HTMLElement | null;
    const nTiles = active?.querySelectorAll(".tile").length ?? 0;

    if (!active || nTiles === 0) {
      window.setTimeout(tick, delayMs);
      return;
    }

    if (prefersReducedMotion()) {
      installWord(container, pickWordFn());
      window.setTimeout(tick, delayMs);
      return;
    }

    active.classList.add("word-layer--out");
    active.style.setProperty("--stagger-max", String(Math.max(0, nTiles - 1)));

    container.classList.add("word--crossfade");

    const word = pickWordFn();
    const inLayer = buildLayerElement(word);
    inLayer.classList.add("word-layer--in");
    inLayer.style.setProperty("--enter-overlap", `${ENTER_OVERLAP_MS / 1000}s`);
    fit.appendChild(inLayer);

    container.setAttribute("aria-label", word);
    scheduleWordFit(container);

    const nNew = inLayer.querySelectorAll(".tile").length;
    const cleanupMs = Math.max(
      exitDurationForTiles(nTiles),
      enterDurationForTiles(nNew),
    );

    window.setTimeout(() => {
      active.remove();
      container.classList.remove("word--crossfade");
      inLayer.classList.remove("word-layer--in");
      inLayer.style.removeProperty("--enter-overlap");
      scheduleWordFit(container);
      window.setTimeout(tick, delayMs);
    }, cleanupMs);
  }, delayMs);
}

function observeResize(container: HTMLElement): () => void {
  const root = getSizingRoot(container);
  if (!container || !root) return () => {};
  const refit = () => scheduleWordFit(container);
  if (document.fonts?.ready) {
    void document.fonts.ready.then(refit);
  }
  window.addEventListener("resize", refit, { passive: true });
  const observeEl =
    (root.querySelector(".main__stage") as HTMLElement | null) ||
    (root.querySelector(".letters-word-mount__stage") as HTMLElement | null) ||
    root;
  let ro: ResizeObserver | null = null;
  if (typeof ResizeObserver !== "undefined") {
    ro = new ResizeObserver(refit);
    ro.observe(observeEl);
  }
  return () => {
    window.removeEventListener("resize", refit);
    ro?.disconnect();
  };
}

export function initWordContainer(container: HTMLElement | null): () => void {
  if (!container || !container.classList.contains("word")) return () => {};

  const staticWord = container.getAttribute("data-static-word");
  if (staticWord) {
    installWord(container, staticWord);
    return observeResize(container);
  }

  const list = parseWordsAttr(container.getAttribute("data-letters-words"));
  const picker = makeWordPicker(container, list);
  installWord(container, picker());

  if (shouldCycle(container, list, null)) {
    cycleWordsForContainer(container, picker);
  }
  return observeResize(container);
}

export interface CardDemoOptions {
  words?: string[];
  clueLocale?: Locale;
  preferredWord?: string;
}

export function initLettersCardDemo(
  cardDemoEl: HTMLElement | null,
  options: CardDemoOptions = {},
): () => void {
  if (!cardDemoEl) return () => {};

  const clueLocale: Locale = options.clueLocale ?? contentLocale();

  function wordsFromWebsiteData(): string[] {
    return wordListForLocale();
  }

  function clueForSolution(word: string): string {
    return clueForWord(word, clueLocale);
  }

  function shuffledLetters(word: string): string[] {
    const letters = [...word.toUpperCase()];
    for (let i = letters.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters;
  }

  function shuffledWords(words: string[]): string[] {
    const copy = [...words];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function rotationFor(index: number): number {
    return stableRotationDeg(index);
  }

  const shapeCycle = ["square", "circle", "diamond", "pentagon", "diamond"];
  const SUCCESS_ANIMATION = {
    jumpMs: 204,
    flipMs: 420,
    settleMs: 144,
    tileStepMs: 60,
    nextDelayMs: 216,
  };
  const MOVE_ANIMATION_MS = 220;

  const clueEl = cardDemoEl.querySelector(".card-demo__clue") as HTMLElement | null;
  const slotsEl = cardDemoEl.querySelector(".card-demo__slots") as HTMLElement | null;
  const bankEl = cardDemoEl.querySelector(".card-demo__bank") as HTMLElement | null;
  const feedbackEl = cardDemoEl.querySelector(".card-demo__feedback") as HTMLElement | null;
  const resetEl = cardDemoEl.querySelector(".card-demo__reset") as HTMLButtonElement | null;

  if (!slotsEl || !bankEl) return () => {};
  const demoEl: HTMLElement = cardDemoEl;

  const preferredWord = options.preferredWord ?? (contentLocale() === "es" ? "Juego" : "Learn");

  let sequence: string[];
  if (Array.isArray(options.words) && options.words.length) {
    const cleaned = options.words
      .map((w) => String(w).trim())
      .filter((w) => /^[\p{L}]+$/u.test(w));
    sequence = cleaned.length ? shuffledWords(cleaned) : [];
  } else {
    const puzzleWords = wordsFromWebsiteData().filter((word) => /^[\p{L}]{5}$/u.test(word));
    sequence = puzzleWords.length ? shuffledWords(puzzleWords) : [];
  }
  if (!sequence.length) sequence = [preferredWord];

  let wordIndex = 0;

  const state: {
    clue: string;
    solution: string;
    slots: (string | null)[];
    bank: (string | null)[];
    slotShapes: string[];
    isLocked: boolean;
    isTransitioning: boolean;
    advanceTimer: number | null;
  } = {
    clue: "",
    solution: "",
    slots: [],
    bank: [],
    slotShapes: [],
    isLocked: false,
    isTransitioning: false,
    advanceTimer: null,
  };

  function setRound(word: string) {
    state.clue = clueForSolution(word);
    state.solution = word.toUpperCase();
    state.slots = Array(state.solution.length).fill(null);
    state.bank = shuffledLetters(word);
    state.slotShapes = Array.from(
      { length: state.solution.length },
      (_, i) => shapeCycle[i % shapeCycle.length],
    );
    state.isLocked = false;
    state.advanceTimer = null;
    if (clueEl) clueEl.textContent = state.clue;
    demoEl.style.setProperty("--card-cols", String(state.solution.length));
  }

  function currentWord(): string {
    return sequence[wordIndex % sequence.length];
  }

  function advanceToNextWord() {
    wordIndex = (wordIndex + 1) % sequence.length;
    setRound(currentWord());
    render();
  }

  function playSuccessAnimation(): number {
    const tiles = Array.from(
      slotsEl!.querySelectorAll<HTMLElement>(".card-demo__slot .card-demo__tile"),
    );
    if (!tiles.length || prefersReducedMotion()) return 0;

    const tileDuration =
      SUCCESS_ANIMATION.jumpMs + SUCCESS_ANIMATION.flipMs + SUCCESS_ANIMATION.settleMs;
    const tileStep = SUCCESS_ANIMATION.tileStepMs;

    tiles.forEach((tile, idx) => {
      const delay = idx * tileStep;
      window.setTimeout(() => {
        tile.animate(
          [
            { transform: "translateY(0) rotateY(0deg)" },
            { offset: 0.24, transform: "translateY(-13px) rotateY(0deg)" },
            { offset: 0.42, transform: "translateY(0) rotateY(0deg)" },
            { offset: 0.9, transform: "translateY(-1px) rotateY(360deg)" },
            { transform: "translateY(0) rotateY(360deg)" },
          ],
          {
            duration: tileDuration,
            easing: "cubic-bezier(0.33, 1, 0.68, 1)",
            fill: "none",
          },
        );
      }, delay);
    });

    return (tiles.length - 1) * tileStep + tileDuration;
  }

  function animateGhostToRect(ghost: HTMLElement, targetRect: DOMRect): Promise<void> {
    if (!ghost || !targetRect || prefersReducedMotion()) return Promise.resolve();
    const from = ghost.getBoundingClientRect();
    const dx = targetRect.left - from.left;
    const dy = targetRect.top - from.top;
    ghost.style.transform = "none";
    const anim = ghost.animate(
      [
        { transform: "translate3d(0, 0, 0)" },
        { transform: `translate3d(${dx}px, ${dy}px, 0)` },
      ],
      {
        duration: MOVE_ANIMATION_MS,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      },
    );
    return anim.finished.then(() => undefined).catch(() => undefined);
  }

  function feedbackForGuess(guess: string): string {
    if (guess === state.solution) return "Nice, that is correct.";
    let rightSpot = 0;
    for (let i = 0; i < guess.length; i += 1) {
      if (guess[i] === state.solution[i]) rightSpot += 1;
    }
    if (rightSpot > 0) return "Some letters are in the wrong place.";
    return "Good try. Keep moving letters.";
  }

  function updateFeedback() {
    if (!feedbackEl) return;
    if (state.slots.some((item) => item === null)) {
      feedbackEl.textContent = "";
      return;
    }
    const guess = state.slots.join("");
    const message = feedbackForGuess(guess);
    feedbackEl.textContent = message;
    if (guess === state.solution && !state.isLocked) {
      state.isLocked = true;
      if (state.advanceTimer) window.clearTimeout(state.advanceTimer);
      const successMs = playSuccessAnimation();
      state.advanceTimer = window.setTimeout(() => {
        state.advanceTimer = null;
        advanceToNextWord();
      }, successMs + SUCCESS_ANIMATION.nextDelayMs);
    }
  }

  function placeFromBank(bankIndex: number, slotIndex: number) {
    if (!state.bank[bankIndex]) return;
    const incoming = state.bank[bankIndex];
    state.bank[bankIndex] = null;
    const outgoing = state.slots[slotIndex];
    state.slots[slotIndex] = incoming;
    if (outgoing) {
      const firstOpenBank = state.bank.findIndex((item) => item === null);
      if (firstOpenBank >= 0) state.bank[firstOpenBank] = outgoing;
    }
  }

  function moveFromSlot(slotIndex: number, nextSlotIndex: number) {
    const incoming = state.slots[slotIndex];
    if (!incoming) return;
    const outgoing = state.slots[nextSlotIndex];
    state.slots[nextSlotIndex] = incoming;
    state.slots[slotIndex] = outgoing;
  }

  function returnToBank(slotIndex: number) {
    const letter = state.slots[slotIndex];
    if (!letter) return;
    state.slots[slotIndex] = null;
    const firstOpenBank = state.bank.findIndex((item) => item === null);
    if (firstOpenBank >= 0) state.bank[firstOpenBank] = letter;
  }

  function isTypingInFormField(target: EventTarget | null): boolean {
    if (!target || !(target instanceof Element)) return false;
    const tag = target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    return Boolean((target as HTMLElement).isContentEditable);
  }

  function lastFilledSlotIndex(): number {
    for (let i = state.slots.length - 1; i >= 0; i -= 1) {
      if (state.slots[i]) return i;
    }
    return -1;
  }

  function letterFromKeyboardKey(key: string): string | null {
    if (typeof key !== "string" || key.length !== 1) return null;
    const upper = key.toUpperCase();
    return /\p{L}/u.test(upper) ? upper : null;
  }

  function bankIndexForTypedLetter(letter: string): number {
    return state.bank.findIndex((item) => item != null && item.toUpperCase() === letter);
  }

  function onKeyDown(event: KeyboardEvent) {
    if (!demoEl.isConnected) return;
    if (state.isLocked || state.isTransitioning) return;
    if (event.defaultPrevented) return;
    if (isTypingInFormField(event.target)) return;
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    if (event.key === "Backspace") {
      const slotIndex = lastFilledSlotIndex();
      if (slotIndex < 0) return;
      event.preventDefault();
      returnToBank(slotIndex);
      render();
      return;
    }

    if (event.repeat) return;

    const letter = letterFromKeyboardKey(event.key);
    if (!letter) return;

    const firstOpen = state.slots.findIndex((slot) => slot === null);
    if (firstOpen < 0) return;

    const bankIndex = bankIndexForTypedLetter(letter);
    if (bankIndex < 0) return;

    event.preventDefault();
    placeFromBank(bankIndex, firstOpen);
    render();
  }

  function render() {
    slotsEl!.replaceChildren();
    bankEl!.replaceChildren();

    state.slotShapes.forEach((shape, slotIndex) => {
      const slot = document.createElement("button");
      slot.type = "button";
      slot.className = "card-demo__slot";
      slot.dataset.slotIndex = String(slotIndex);
      slot.setAttribute("aria-label", `Answer slot ${slotIndex + 1}`);
      slot.style.setProperty("--tilt", `${rotationFor(slotIndex)}deg`);
      slot.style.setProperty("--slot-z", String(slotIndex + 1));

      const letter = state.slots[slotIndex];
      if (letter) {
        slot.classList.add("is-filled");
        slot.style.setProperty("--slot-z", String(100 + slotIndex));
        const tile = document.createElement("span");
        tile.className = "card-demo__tile";
        tile.dataset.source = "slot";
        tile.dataset.index = String(slotIndex);
        tile.textContent = letter;
        slot.appendChild(tile);
      } else {
        const marker = document.createElement("span");
        marker.className = `card-demo__shape card-demo__shape--${shape}`;
        marker.setAttribute("aria-hidden", "true");
        slot.appendChild(marker);
      }
      slotsEl!.appendChild(slot);
    });

    state.bank.forEach((letter, bankIndex) => {
      const bankSlot = document.createElement("div");
      bankSlot.className = "card-demo__bank-slot";
      bankSlot.dataset.bankIndex = String(bankIndex);
      bankSlot.style.setProperty("--tilt", `${rotationFor(bankIndex + 7)}deg`);

      if (letter) {
        const bankTile = document.createElement("button");
        bankTile.type = "button";
        bankTile.className = "card-demo__tile card-demo__tile--bank";
        bankTile.dataset.source = "bank";
        bankTile.dataset.index = String(bankIndex);
        bankTile.setAttribute("aria-label", `Letter ${letter}`);
        bankTile.textContent = letter;
        bankSlot.appendChild(bankTile);
      }

      bankEl!.appendChild(bankSlot);
    });

    updateFeedback();
  }

  type DragState = {
    source: string;
    index: number;
    originEl: HTMLElement;
    pointerId: number;
    offsetX: number;
    offsetY: number;
    sourceRect: DOMRect;
    startX: number;
    startY: number;
    moved: boolean;
    ghost: HTMLElement;
  };

  let dragState: DragState | null = null;
  let ignoreTapUntil = 0;

  function onTapTile(event: MouseEvent) {
    if (!demoEl.contains(event.target as Node)) return;
    if (event.detail !== 0) return;
    if (state.isLocked || state.isTransitioning) return;
    if (Date.now() < ignoreTapUntil) return;
    const tile = (event.target as HTMLElement).closest(".card-demo__tile") as HTMLElement | null;
    if (!tile || !demoEl.contains(tile)) return;

    const source = tile.dataset.source;
    const index = Number.parseInt(tile.dataset.index || "", 10);
    if (!Number.isFinite(index)) return;

    if (source === "bank") {
      const firstOpen = state.slots.findIndex((slot) => slot === null);
      if (firstOpen >= 0) {
        placeFromBank(index, firstOpen);
        render();
      }
      return;
    }

    if (source === "slot") {
      returnToBank(index);
      render();
    }
  }

  function startDrag(event: PointerEvent) {
    const tile = (event.target as HTMLElement).closest(".card-demo__tile") as HTMLElement | null;
    if (!tile || !demoEl.contains(tile)) return;
    if (state.isLocked || state.isTransitioning) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    const source = tile.dataset.source;
    const index = Number.parseInt(tile.dataset.index || "", 10);
    if (!source || !Number.isFinite(index)) return;

    const rect = tile.getBoundingClientRect();
    const ghost = tile.cloneNode(true) as HTMLElement;
    ghost.classList.add("card-demo__tile--ghost");
    ghost.style.width = `${rect.width}px`;
    ghost.style.height = `${rect.height}px`;
    ghost.style.visibility = "hidden";
    document.body.appendChild(ghost);

    dragState = {
      source,
      index,
      originEl: tile,
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      sourceRect: rect,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
      ghost,
    };

    tile.setPointerCapture(event.pointerId);
    positionGhost(event.clientX, event.clientY);
  }

  function positionGhost(x: number, y: number) {
    if (!dragState) return;
    dragState.ghost.style.left = `${x - dragState.offsetX}px`;
    dragState.ghost.style.top = `${y - dragState.offsetY}px`;
  }

  function endDrag(event: PointerEvent) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;

    const ghost = dragState.ghost;
    const wasTap = !dragState.moved;
    let destinationRect: DOMRect | null = null;
    let didMutate = false;
    const origin = dragState.originEl;

    const dropTarget = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement | null;
    const slotTarget = dropTarget?.closest(".card-demo__slot") as HTMLElement | null;
    const bankTarget = dropTarget?.closest(".card-demo__bank") as HTMLElement | null;
    const slotInDemo = slotTarget && demoEl.contains(slotTarget) ? slotTarget : null;
    const bankInDemo = bankTarget && demoEl.contains(bankTarget) ? bankTarget : null;

    if (wasTap) {
      if (dragState.source === "bank") {
        const firstOpen = state.slots.findIndex((slot) => slot === null);
        if (firstOpen >= 0) {
          const targetSlot = slotsEl!.querySelector(
            `.card-demo__slot[data-slot-index="${firstOpen}"]`,
          ) as HTMLElement | null;
          placeFromBank(dragState.index, firstOpen);
          destinationRect = targetSlot?.getBoundingClientRect() || null;
          didMutate = true;
        }
      } else if (dragState.source === "slot") {
        const firstOpenBank = state.bank.findIndex((item) => item === null);
        const targetBank = bankEl!.querySelector(
          `.card-demo__bank-slot[data-bank-index="${firstOpenBank}"]`,
        ) as HTMLElement | null;
        returnToBank(dragState.index);
        destinationRect = targetBank?.getBoundingClientRect() || null;
        didMutate = true;
      }
    } else if (slotInDemo) {
      const targetIndex = Number.parseInt(slotInDemo.dataset.slotIndex || "", 10);
      if (Number.isFinite(targetIndex)) {
        if (dragState.source === "bank") {
          placeFromBank(dragState.index, targetIndex);
          destinationRect = slotInDemo.getBoundingClientRect();
          didMutate = true;
        } else if (dragState.source === "slot") {
          moveFromSlot(dragState.index, targetIndex);
          destinationRect = slotInDemo.getBoundingClientRect();
          didMutate = true;
        }
      }
    } else if (bankInDemo && dragState.source === "slot") {
      const firstOpenBank = state.bank.findIndex((item) => item === null);
      returnToBank(dragState.index);
      const targetBank = bankEl!.querySelector(
        `.card-demo__bank-slot[data-bank-index="${firstOpenBank}"]`,
      ) as HTMLElement | null;
      destinationRect = targetBank?.getBoundingClientRect() || null;
      didMutate = true;
    }

    if (dragState.moved || wasTap) {
      ignoreTapUntil = Date.now() + Math.max(250, MOVE_ANIMATION_MS + 80);
    }
    if (didMutate && destinationRect) {
      if (!dragState.moved) {
        origin?.classList.add("is-drag-origin");
        ghost.style.visibility = "visible";
        ghost.style.left = `${dragState.sourceRect.left}px`;
        ghost.style.top = `${dragState.sourceRect.top}px`;
      }
      state.isTransitioning = true;
      animateGhostToRect(ghost, destinationRect).finally(() => {
        origin?.classList.remove("is-drag-origin");
        ghost.remove();
        dragState = null;
        state.isTransitioning = false;
        render();
      });
      return;
    }
    origin?.classList.remove("is-drag-origin");
    ghost.remove();
    dragState = null;
    render();
  }

  function moveDrag(event: PointerEvent) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const movedX = Math.abs(event.clientX - dragState.startX);
    const movedY = Math.abs(event.clientY - dragState.startY);
    if (!dragState.moved && movedX + movedY > 6) {
      dragState.moved = true;
      dragState.originEl?.classList.add("is-drag-origin");
      dragState.ghost.style.visibility = "visible";
    }
    positionGhost(event.clientX, event.clientY);
  }

  function cancelDrag(event: PointerEvent) {
    if (!dragState || event.pointerId !== dragState.pointerId) return;
    const origin = dragState.originEl;
    origin?.classList.remove("is-drag-origin");
    dragState.ghost.remove();
    dragState = null;
  }

  const onResetClick = () => {
    if (state.advanceTimer) {
      window.clearTimeout(state.advanceTimer);
      state.advanceTimer = null;
    }
    setRound(currentWord());
    render();
  };

  resetEl?.addEventListener("click", onResetClick);
  document.addEventListener("click", onTapTile);
  document.addEventListener("pointerdown", startDrag);
  document.addEventListener("pointermove", moveDrag);
  document.addEventListener("pointerup", endDrag);
  document.addEventListener("pointercancel", cancelDrag);
  window.addEventListener("keydown", onKeyDown);

  setRound(currentWord());
  render();

  return () => {
    if (state.advanceTimer) window.clearTimeout(state.advanceTimer);
    resetEl?.removeEventListener("click", onResetClick);
    document.removeEventListener("click", onTapTile);
    document.removeEventListener("pointerdown", startDrag);
    document.removeEventListener("pointermove", moveDrag);
    document.removeEventListener("pointerup", endDrag);
    document.removeEventListener("pointercancel", cancelDrag);
    window.removeEventListener("keydown", onKeyDown);
  };
}
