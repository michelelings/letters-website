declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-CYNDT2QSQX";

export function analyticsEvent(name: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function lettersLocale(): string {
  if (typeof window === "undefined") return "en";
  const dl = window.dataLayer;
  if (dl && Array.isArray(dl)) {
    const hit = dl
      .filter((row) => row && typeof (row as { letters_locale?: unknown }).letters_locale === "string")
      .pop() as { letters_locale?: string } | undefined;
    if (hit?.letters_locale) return hit.letters_locale;
  }
  const lang = document.documentElement.getAttribute("lang") || "en";
  if (lang.indexOf("es") === 0) return "es";
  return (lang.slice(0, 2) || "en").toLowerCase();
}

function pageType(): string {
  if (typeof document === "undefined") return "page";
  return document.querySelector(".article-post") ? "article" : "page";
}

function isLettersAppUrl(href: string): boolean {
  return /testflight\.apple\.com|apps\.apple\.com/i.test(href || "");
}

let installed = false;

export function installGlobalAnalytics() {
  if (typeof window === "undefined" || installed) return;
  installed = true;

  document.addEventListener(
    "click",
    (e) => {
      const t = e.target as HTMLElement | null;
      if (!t || typeof t.closest !== "function") return;
      const a = t.closest("a") as HTMLAnchorElement | null;
      if (!a || !a.href || !isLettersAppUrl(a.href)) return;
      if (!a.matches(".article-topbar__cta, .beta-cta__btn")) return;

      analyticsEvent("download_click", {
        link_url: a.href,
        locale: lettersLocale(),
        page_type: pageType(),
        cta_location: a.matches(".article-topbar__cta")
          ? "topbar"
          : "inline",
      });
    },
    true,
  );
}

export function installOchoLinkTracking(locale: string, pageTypeOverride?: string) {
  if (typeof window === "undefined") return () => {};
  const ochoLink = document.querySelector(".site-footer p a") as HTMLAnchorElement | null;
  if (!ochoLink) return () => {};
  const handler = () => {
    const params: Record<string, unknown> = {
      link_url: ochoLink.href,
      locale,
    };
    if (pageTypeOverride) params.page_type = pageTypeOverride;
    analyticsEvent("ocho_link_click", params);
  };
  ochoLink.addEventListener("click", handler);
  return () => ochoLink.removeEventListener("click", handler);
}
