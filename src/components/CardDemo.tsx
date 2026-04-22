"use client";

import { useEffect, useRef } from "react";
import { initLettersCardDemo } from "@/lib/words";
import type { Locale } from "@/lib/site";

export interface CardDemoProps {
  clueLocale?: Locale;
  /** Optional fixed word list overrides the default locale-derived list. */
  words?: string[];
  preferredWord?: string;
  /** Initial clue to render during SSR / before hydration. */
  initialClue?: string;
  /** When true, wraps the demo in `.letters-word-mount` for use inside articles. */
  embedded?: boolean;
}

/**
 * Interactive Letters puzzle demo. Mounts the static DOM skeleton that the
 * vanilla-style controller in `@/lib/words` expects, then initializes it.
 */
export function CardDemo({
  clueLocale,
  words,
  preferredWord,
  initialClue = "Learn",
  embedded = false,
}: CardDemoProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const cleanup = initLettersCardDemo(ref.current, {
      clueLocale: clueLocale === "en" || clueLocale === "es" ? clueLocale : undefined,
      words,
      preferredWord,
    });
    return cleanup;
  }, [clueLocale, preferredWord, words?.join("|")]);

  const section = (
    <section
      ref={ref}
      className="card-demo"
      id="card-demo"
      aria-label="Letters prototype. Type letter keys to fill slots. Backspace removes the last letter."
    >
      {embedded ? (
        <p className="card-demo__clue" id="card-clue">
          {initialClue}
        </p>
      ) : (
        <h1 className="card-demo__clue" id="card-clue">
          {initialClue}
        </h1>
      )}
      <div className="card-demo__slots" id="card-slots" aria-label="Answer slots" />
      <div className="card-demo__bank" id="card-bank" aria-label="Letter bank" />
      <p className="card-demo__feedback" id="card-feedback" aria-live="polite" />
      <button className="card-demo__reset" id="card-reset" type="button">
        Reset
      </button>
    </section>
  );

  if (!embedded) return section;
  return (
    <div className="letters-word-mount">
      <div className="letters-word-mount__stage letters-word-mount__stage--card-demo">
        {section}
      </div>
    </div>
  );
}
