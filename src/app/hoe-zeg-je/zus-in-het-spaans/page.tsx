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
  title: "Hoe zeg je zus in het Spaans?",
  description: "Hoe zeg je zus in het Spaans? Het Spaanse woord is hermana, uitleg en voorbeelden.",
  path: "/hoe-zeg-je/zus-in-het-spaans/",
  locale: "nl",
  alternates: {
    en: "/how-to-say/sister-in-spanish/",
    nl: "/hoe-zeg-je/zus-in-het-spaans/",
  },
  ogType: "article",
  ogImage: "/og/generated/hoe-zeg-je-zus-in-het-spaans.png",
  ogImageAlt: "zus | Letters",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="nl" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1>Hoe zeg je <span lang="nl">zus</span> in het Spaans?</h1>
      <p className="article-lead"><strong>Antwoord:</strong> <span lang="es">hermana</span>. Voor “broer” gebruik je <span lang="es">hermano</span>.</p>

      <LettersWordInline words={["zus","hermana","broer","hermano"]} intervalMs={3000} ariaLive="polite" />

      <nav className="article-related" aria-label="Gerelateerd">
        <h2>Gerelateerd</h2>
        <ul>
          <li><Link href="/translate/spanish-to-dutch/hermana/"><span lang="es">hermana</span> in het Nederlands</Link></li>
          <li><Link href="/how-to-say/sister-in-spanish/" hrefLang="en">How to say sister in Spanish (English)</Link></li>
          <li><Link href="/learn/spanish/word/hermana/">Woord: <span lang="es">hermana</span></Link></li>
        </ul>
      </nav>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="nl"
        pageType="article"
      />
    </>
  );
}
