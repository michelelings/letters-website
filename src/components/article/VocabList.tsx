import type { ReactNode } from "react";
import Link from "next/link";
import { Term } from "./Term";

export type VocabListItem = {
  term: ReactNode;
  gloss: ReactNode;
  href?: string;
  termLang?: string;
};

export function VocabList({ items }: { items: VocabListItem[] }) {
  return (
    <ul>
      {items.map((item, i) => {
        const key = `${i}-${String(item.href ?? item.term)}`;
        const termInner =
          item.href != null ? (
            <Link href={item.href}>
              {item.termLang != null ? (
                <Term lang={item.termLang}>{item.term}</Term>
              ) : (
                item.term
              )}
            </Link>
          ) : item.termLang != null ? (
            <Term lang={item.termLang}>{item.term}</Term>
          ) : (
            item.term
          );
        return (
          <li key={key}>
            <strong>{termInner}</strong>
            {" → "}
            {item.gloss}
          </li>
        );
      })}
    </ul>
  );
}
