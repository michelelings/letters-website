import Link from "next/link";
import type { GuideListItem } from "./types";

export function GuideCardList({ items }: { items: GuideListItem[] }) {
  return (
    <ul className="guides-index__list">
      {items.map((g) => (
        <li key={g.href}>
          <Link href={g.href}>{g.title}</Link>
          <p>{g.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
