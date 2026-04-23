import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/breadcrumb";
import { absUrl } from "@/lib/site";

export function ArticleBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: it.name,
      item: absUrl(it.href),
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="article-breadcrumb" aria-label="Breadcrumb">
        <ol className="article-breadcrumb__list">
          {items.map((it, i) => (
            <li key={it.href} className="article-breadcrumb__item">
              {i < items.length - 1 ? (
                <Link href={it.href}>{it.name}</Link>
              ) : (
                <span className="article-breadcrumb__current" aria-current="page">
                  {it.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
