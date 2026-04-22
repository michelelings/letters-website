"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/site";

/**
 * Sets `<html lang>` and pushes `letters_locale` into GA dataLayer to match the
 * legacy site. Used inside per-route pages so the locale is reflected in the
 * DOM and in analytics without requiring a full separate `<html>` per locale.
 */
export function LocaleEffect({ locale }: { locale: Locale }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ letters_locale: locale });
    }
  }, [locale]);
  return null;
}
