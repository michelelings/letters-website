import { buildArticleJsonLdObject } from "@/lib/articleJsonLd";
import type { Locale } from "@/lib/site";

export function ArticleJsonLd({
  path,
  headline,
  description,
  locale,
}: {
  path: string;
  headline: string;
  description?: string;
  locale: Locale;
}) {
  return (
    <script
      type="application/ld+json"
      // Safe: JSON from our own structured fields only (no user HTML).
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          buildArticleJsonLdObject({ path, headline, description, locale }),
        ),
      }}
    />
  );
}
