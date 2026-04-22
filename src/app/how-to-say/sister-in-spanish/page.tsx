import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { LettersWordInline } from "@/components/LettersWord";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to say “sister” in Spanish",
  description: "Sister in Spanish is hermana, when to use it, pronunciation, and related words.",
  path: "/how-to-say/sister-in-spanish/",
  locale: "en",
  alternates: {
    en: "/how-to-say/sister-in-spanish/",
    nl: "/hoe-zeg-je/zus-in-het-spaans/",
    de: "/wie-sagt-man/schwester-auf-spanisch/",
  },
  ogType: "article",
  ogImage: "/og/generated/how-to-say-sister-in-spanish.png",
  ogImageAlt: "hermana | Letters",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1>How to say “sister” in Spanish</h1>
      <p className="article-lead">Use <strong><span lang="es">hermana</span></strong> for a female sibling. For a brother, say <strong><span lang="es">hermano</span></strong>.</p>

      <LettersWordInline words={["hermana","hermano","familia","prima"]} intervalMs={3000} ariaLive="polite" />

      <nav className="article-related" aria-label="Related">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/word/hermana/"><span lang="es">hermana</span>, word page</Link></li>
          <li><Link href="/translate/spanish-to-dutch/hermana/"><span lang="es">hermana</span> in Dutch</Link></li>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p>Practice with <strong>Letters</strong>.</p>
      </div>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[
          { href: "/spanish/", label: "Spanish hub" },
          { href: "/guides/", label: "Guides" },
        ]}
      />
    </>
  );
}
