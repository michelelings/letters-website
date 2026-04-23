"use client";

import type { LanguageLink } from "@/lib/languages";

export function LanguageSwitch({
  langs,
  ariaLabel,
}: {
  langs: LanguageLink[];
  ariaLabel: string;
}) {
  if (langs.length === 0) return null;
  return (
    <nav className="lang-switch" aria-label={ariaLabel}>
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
  );
}
