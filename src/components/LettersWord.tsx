"use client";

import { useEffect, useRef } from "react";
import { initWordContainer } from "@/lib/words";

export interface LettersWordProps {
  /** Static word that never cycles. */
  staticWord?: string;
  /** Comma/pipe-separated list of words to rotate through. */
  words?: string[];
  /** Milliseconds between rotations. Minimum 800. Default 3000. */
  intervalMs?: number;
  /** "sequential" (default) or "random". */
  rotate?: "sequential" | "random";
  className?: string;
  id?: string;
  ariaLive?: "off" | "polite" | "assertive";
}

/**
 * Animated tile-word widget used on landing pages and inside articles.
 * The heavy lifting happens in `@/lib/words`, which manipulates the DOM
 * directly inside the rendered container so animations match the legacy site.
 */
export function LettersWord({
  staticWord,
  words,
  intervalMs,
  rotate,
  className,
  id,
  ariaLive = "polite",
}: LettersWordProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return initWordContainer(ref.current);
  }, [staticWord, words?.join("|"), intervalMs, rotate]);

  const wordsAttr = words?.join(",");

  return (
    <div
      ref={ref}
      id={id}
      className={["word", className].filter(Boolean).join(" ")}
      data-static-word={staticWord}
      data-letters-words={wordsAttr}
      data-letters-interval={intervalMs ? String(intervalMs) : undefined}
      data-letters-rotate={rotate}
      aria-live={ariaLive}
    />
  );
}

/** Wrapper for articles: .letters-word-mount > .letters-word-mount__stage > .word */
export function LettersWordInline(props: LettersWordProps) {
  const cls = ["word--inline", props.className].filter(Boolean).join(" ");
  return (
    <div className="letters-word-mount">
      <div className="letters-word-mount__stage">
        <LettersWord {...props} className={cls} />
      </div>
    </div>
  );
}
