import type { ReactNode } from "react";

/**
 * A Spanish (or other) line plus a translation line, matching the “example sentence” pattern on learn pages.
 */
export function ExampleSentence({
  source,
  sourceLang = "es",
  translation,
}: {
  source: ReactNode;
  sourceLang?: string;
  translation: ReactNode;
}) {
  return (
    <>
      <p lang={sourceLang}>{source}</p>
      <p>{translation}</p>
    </>
  );
}
