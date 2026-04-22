"use client";

import Link from "next/link";
import { useEffect } from "react";
import { OCHO_URL } from "@/lib/site";
import type { Locale } from "@/lib/site";
import { installOchoLinkTracking } from "@/lib/analytics";

interface LangLink {
  href: string;
  hreflang: Locale;
  label: string;
  current?: boolean;
}

interface ExtraLink {
  href: string;
  label: string;
  /** For external-ish links we still use `<a>`; defaults to Next.js `<Link>`. */
  external?: boolean;
}

export interface SiteFooterProps {
  /** "Letters is made by Ocho" / "Letters es de Ocho". */
  madeByLabel?: string;
  ochoLabel?: string;
  extras?: ExtraLink[];
  langs?: LangLink[];
  langAriaLabel?: string;
  extrasAriaLabel?: string;
  locale: Locale;
  pageType?: "page" | "article";
}

export function SiteFooter({
  madeByLabel = "Letters is made by",
  ochoLabel = "Ocho",
  extras,
  langs,
  langAriaLabel = "Choose language",
  extrasAriaLabel = "Site",
  locale,
  pageType,
}: SiteFooterProps) {
  useEffect(() => {
    return installOchoLinkTracking(locale, pageType);
  }, [locale, pageType]);

  return (
    <footer className="site-footer">
      {extras && extras.length > 0 && (
        <nav className="site-footer__extras" aria-label={extrasAriaLabel}>
          {extras.map((l, i) => (
            <span key={l.href}>
              {l.external ? (
                <a href={l.href}>{l.label}</a>
              ) : (
                <Link href={l.href}>{l.label}</Link>
              )}
              {i < extras.length - 1 && (
                <span className="lang-switch__sep mx-[0.3rem]" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>
      )}
      {langs && langs.length > 0 && (
        <nav className="lang-switch" aria-label={langAriaLabel}>
          {langs.map((l, i) => (
            <span key={l.href}>
              <a
                href={l.href}
                hrefLang={l.hreflang}
                aria-current={l.current ? "true" : undefined}
              >
                {l.label}
              </a>
              {i < langs.length - 1 && (
                <span className="lang-switch__sep mx-[0.3rem]" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </nav>
      )}
      <p>
        {madeByLabel}{" "}
        <a href={OCHO_URL} target="_blank" rel="noopener noreferrer">
          {ochoLabel}
        </a>
      </p>
    </footer>
  );
}
