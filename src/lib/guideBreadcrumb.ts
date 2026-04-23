import type { BreadcrumbItem } from "@/lib/breadcrumb";

/** Home → Guides (index) or Home → current for single-level index pages. */
export function guidesIndexBreadcrumb(
  locale: "en" | "es",
  path: string,
  label: string,
): BreadcrumbItem[] {
  if (locale === "es") {
    return [
      { name: "Inicio", href: "/es/" },
      { name: label, href: path },
    ];
  }
  return [
    { name: "Home", href: "/" },
    { name: label, href: path },
  ];
}

export function guideArticleBreadcrumb(args: {
  locale: "en" | "es";
  path: string;
  label: string;
}): BreadcrumbItem[] {
  const { locale, path, label } = args;
  if (locale === "es") {
    return [
      { name: "Inicio", href: "/es/" },
      { name: "Guías", href: "/es/guides/" },
      { name: label, href: path },
    ];
  }
  return [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides/" },
    { name: label, href: path },
  ];
}
