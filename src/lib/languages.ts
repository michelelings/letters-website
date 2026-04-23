import type { Locale } from "@/lib/site";

export type LanguageLink = {
  href: string;
  hreflang: Locale;
  label: string;
  current?: boolean;
};

const ORDER: Locale[] = ["en", "es", "nl", "de"];

export const LANGUAGE_LABEL: Record<Locale, string> = {
  en: "English",
  es: "Español",
  nl: "Nederlands",
  de: "Deutsch",
};

/**
 * Build footer language switch links from the same `alternates` object passed to
 * `pageMetadata`, so `hreflang` options stay in sync with canonical alternates.
 */
export function footerLanguageLinks(
  currentLocale: Locale,
  alternates: Partial<Record<Locale, string>> | undefined,
): LanguageLink[] | undefined {
  if (!alternates) return undefined;
  const links: LanguageLink[] = [];
  for (const l of ORDER) {
    const href = alternates[l];
    if (href) {
      links.push({
        href,
        hreflang: l,
        label: LANGUAGE_LABEL[l],
        current: l === currentLocale,
      });
    }
  }
  return links.length > 0 ? links : undefined;
}
