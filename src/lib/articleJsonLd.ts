import { absUrl, SITE_NAME, SITE_URL, type Locale } from "@/lib/site";

export function buildArticleJsonLdObject({
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
  return {
    "@context": "https://schema.org",
    "@type": "Article" as const,
    headline,
    url: absUrl(path),
    inLanguage: locale,
    ...(description ? { description } : {}),
    isPartOf: {
      "@type": "WebSite" as const,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
