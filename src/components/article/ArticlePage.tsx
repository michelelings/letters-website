import type { ComponentProps, ReactNode } from "react";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleJsonLd } from "./ArticleJsonLd";
import { LocaleEffect } from "@/components/LocaleEffect";
import { SiteFooter } from "@/components/SiteFooter";
import type { SiteFooterProps } from "@/components/SiteFooter";
import type { Locale } from "@/lib/site";

export type ArticlePageProps = {
  children: ReactNode;
  /** schema.org Article microdata on the article wrapper (pillar guides, etc.) */
  schemaArticle?: boolean;
  /**
   * JSON-LD for Article. Use together with `schemaArticle` for pages that are pillar or evergreen articles.
   * Title and description can mirror the same strings as `pageMetadata` for that route.
   */
  articleJsonLd?: {
    path: string;
    headline: string;
    description?: string;
  };
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
  ...footerProps
}: ArticlePageProps) {
  const locale = jsonLdLocale(footerProps.locale);
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
          {schemaArticle && articleJsonLd && (
            <ArticleJsonLd
              path={articleJsonLd.path}
              headline={articleJsonLd.headline}
              description={articleJsonLd.description}
              locale={locale}
            />
          )}
          {children}
        </article>
      </main>
      <SiteFooter {...footerProps} />
    </>
  );
}
