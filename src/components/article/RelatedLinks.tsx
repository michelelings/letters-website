import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";

export type RelatedLinkItem = {
  href: string;
  label: ReactNode;
  linkProps?: Omit<ComponentProps<typeof Link>, "href" | "children">;
};

export function RelatedLinks({
  heading,
  ariaLabel,
  items,
}: {
  heading: string;
  ariaLabel: string;
  items: RelatedLinkItem[];
}) {
  return (
    <nav className="article-related" aria-label={ariaLabel}>
      <h2>{heading}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} {...item.linkProps}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
