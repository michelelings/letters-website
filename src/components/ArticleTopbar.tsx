import Link from "next/link";
import { APP_DOWNLOAD_URL } from "@/lib/site";

export function ArticleTopbar({
  brand = "Letters",
  ctaLabel = "Download",
}: {
  brand?: string;
  ctaLabel?: string;
}) {
  return (
    <header className="article-topbar">
      <div className="article-topbar__inner">
        <Link href="/" className="article-topbar__brand">
          {brand}
        </Link>
        <a
          className="article-topbar__cta"
          href={APP_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
