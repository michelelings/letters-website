"use client";

import { useEffect, useRef } from "react";

export interface GuidesFocusBarProps {
  label: string;
  defaultOptionLabel: string;
  languageOptions: { value: string; label: string }[];
}

/**
 * Language focus selector for the guides index. Reorders the sibling
 * `.guides-index__lang-wrap > [data-guide-lang]` sections based on the
 * user's saved preference in localStorage (scoped to the device).
 */
export function GuidesFocusBar({
  label,
  defaultOptionLabel,
  languageOptions,
}: GuidesFocusBarProps) {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    const STORAGE_KEY = "letters_guides_focus_lang";
    const wrap = document.getElementById("guides-lang-sections");
    const sel = selectRef.current;
    if (!wrap || !sel) return;

    function reorder() {
      const v = sel!.value;
      const sections = Array.from(
        wrap!.querySelectorAll<HTMLElement>("[data-guide-lang]"),
      );
      sections.sort((a, b) => {
        const aLang = a.getAttribute("data-guide-lang");
        const bLang = b.getAttribute("data-guide-lang");
        const aFirst = v && aLang === v ? 0 : 1;
        const bFirst = v && bLang === v ? 0 : 1;
        if (aFirst !== bFirst) return aFirst - bFirst;
        return (
          (parseInt(a.getAttribute("data-order") || "0", 10) || 0) -
          (parseInt(b.getAttribute("data-order") || "0", 10) || 0)
        );
      });
      sections.forEach((s) => wrap!.appendChild(s));
      try {
        if (v) localStorage.setItem(STORAGE_KEY, v);
        else localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (
        saved &&
        Array.prototype.some.call(sel.options, (o: HTMLOptionElement) => o.value === saved)
      ) {
        sel.value = saved;
      }
    } catch {
      /* ignore */
    }

    reorder();
    sel.addEventListener("change", reorder);
    return () => sel.removeEventListener("change", reorder);
  }, []);

  return (
    <div className="guides-focus-bar">
      <label className="guides-focus-bar__label" htmlFor="guides-focus-lang">
        {label}
      </label>
      <select
        ref={selectRef}
        className="guides-focus-bar__select"
        id="guides-focus-lang"
        name="guides_focus_lang"
        autoComplete="off"
        defaultValue=""
      >
        <option value="">{defaultOptionLabel}</option>
        {languageOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
