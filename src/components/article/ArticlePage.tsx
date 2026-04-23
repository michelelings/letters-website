import type { ComponentProps, ReactNode } from "react";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import type { BreadcrumbItem } from "@/lib/breadcrumb";
import { ArticleBreadcrumb } from "./ArticleBreadcrumb";
import { ArticleJsonLd } from "./ArticleJsonLd";
import { LocaleEffect } from "@/components/LocaleEffect";
import { SiteFooter } from "@/components/SiteFooter";
import type { SiteFooterProps } from "@/components/SiteFooter";
import { footerLanguageLinks } from "@/lib/languages";
import type { Locale } from "@/lib/site";

export type ArticlePageProps = {
  children: ReactNode;
  /** schema.org Article microdata on the article wrapper (pillar guides, etc.) */
  schemaArticle?: boolean;
  /**
   * JSON-LD for Article. Uses the same title and description you pass to `pageMetadata` for the route.
   * Renders when set; `schemaArticle` only adds microdata on the `article` element, not the script.
   */
  articleJsonLd?: {
    path: string;
    headline: string;
    description?: string;
  };
  /**
   * Same `alternates` object as in `pageMetadata` for this page. Replaces ad hoc `langs` on the
   * footer so `hreflang` links stay in sync with canonicals.
   */
  i18nAlternates?: Partial<Record<Locale, string>>;
  /** Optional: Home, Guides, then current page. Emits BreadcrumbList JSON-LD and a small nav. */
  breadcrumb?: BreadcrumbItem[];
  /** Props forwarded to the sticky article top bar (Spanish pages override CTA text, and so on). */
  topbar?: ComponentProps<typeof ArticleTopbar>;
} & SiteFooterProps;

function jsonLdLocale(locale: string): Locale {
  if (locale === "en" || locale === "es" || locale === "nl" || locale === "de")
    return locale;
  return "en";
}

export function ArticlePage({
  schemaArticle,
  articleJsonLd,
  children,
  topbar,
  i18nAlternates,
  langs,
  breadcrumb,
  ...footerProps
}: ArticlePageProps) {
  const locale = jsonLdLocale(footerProps.locale);
  const resolvedLangs =
    langs ?? footerLanguageLinks(footerProps.locale, i18nAlternates);
  return (
    <>
      <LocaleEffect locale={footerProps.locale} />
      <ArticleBodyClass />
      <ArticleTopbar {...(topbar ?? {})} />
      <main id="main" className="article-wrap">
        <article
          className="article-post"
          {...(schemaArticle
            ? { itemScope: true as const, itemType: "https://schema.org/Article" }
            : {})}
        >
          {articleJsonLd && (
            <ArticleJsonLd
              path={articleJsonLd.path}
              headline={articleJsonLd.headline}
              description={articleJsonLd.description}
              locale={locale}
            />
          )}
          {breadcrumb && breadcrumb.length > 0 && (
            <ArticleBreadcrumb items={breadcrumb} />
          )}
          {children}
        </article>
      </main>
      <SiteFooter {...footerProps} langs={resolvedLangs} />
    </>
  );
}
