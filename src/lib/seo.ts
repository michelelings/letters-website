import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, absUrl, type Locale } from "./site";

const OG_LOCALE_MAP: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  nl: "nl_NL",
  de: "de_DE",
};

export interface PageMetaInput {
  title: string;
  description?: string;
  /** Path starting with "/", e.g. "/guides/learn-vocabulary-daily/" */
  path: string;
  locale: Locale;
  /** Map of locale -> path for hreflang alternates. Should include the current locale. */
  alternates?: Partial<Record<Locale, string>>;
  /** Defaults to the global OG image. */
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
}

export function pageMetadata(input: PageMetaInput): Metadata {
  const {
    title,
    description,
    path,
    locale,
    alternates = { [locale]: path },
    ogImage = "/og-image.png",
    ogImageAlt,
    ogType = "website",
    noindex,
  } = input;

  const canonical = absUrl(path);
  const ogLocale = OG_LOCALE_MAP[locale];
  const alternateLocales = (Object.keys(OG_LOCALE_MAP) as Locale[])
    .filter((l) => l !== locale && alternates[l])
    .map((l) => OG_LOCALE_MAP[l]);

  const languages: Record<string, string> = {};
  for (const [l, p] of Object.entries(alternates)) {
    if (!p) continue;
    languages[l] = absUrl(p);
  }
  if (!languages["x-default"]) {
    languages["x-default"] = absUrl(alternates.en ?? path);
  }

  const absOgImage = ogImage.startsWith("http") ? ogImage : absUrl(ogImage);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: ogType,
      url: canonical,
      title,
      description,
      locale: ogLocale,
      alternateLocale: alternateLocales,
      siteName: SITE_NAME,
      images: [
        {
          url: absOgImage,
          width: 1200,
          height: 900,
          type: "image/png",
          alt: ogImageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absOgImage],
    },
  };
}
