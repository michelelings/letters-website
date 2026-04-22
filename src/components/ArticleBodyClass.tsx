"use client";

import { useEffect } from "react";

/**
 * Article pages need `<body class="body--article">` for layout padding.
 * We can't directly set <body> attributes per-page in the App Router, so we
 * toggle the class from a client effect and restore on unmount.
 */
export function ArticleBodyClass() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.add("body--article");
    return () => document.body.classList.remove("body--article");
  }, []);
  return null;
}
