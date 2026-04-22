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
  title: "hermana in Dutch (zus)",
  description: "Spanish hermana in Dutch is zus, meaning, pronunciation, and example sentences.",
  path: "/translate/spanish-to-dutch/hermana/",
  locale: "en",
  alternates: {
    en: "/translate/spanish-to-dutch/hermana/",
    nl: "/hoe-zeg-je/zus-in-het-spaans/",
  },
  ogType: "article",
  ogImage: "/og/generated/translate-spanish-to-dutch-hermana.png",
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
      <h1><span lang="es">hermana</span> in Dutch</h1>
      <p className="article-lead"><strong><span lang="es">hermana</span></strong> is <strong><span lang="nl">zus</span></strong> in Dutch, the everyday word for a sister.</p>

      <LettersWordInline words={["hermana","zus","hermano","broer"]} intervalMs={3000} ariaLive="polite" />

      <h2>Pronunciation</h2>
      <p><span lang="nl">Zus</span> sounds like “zuss” (rhymes loosely with English “bus”).</p>

      <h2>Example sentence</h2>
      <p lang="es">Mi hermana estudia medicina.</p>
      <p lang="nl">Mijn zus studeert geneeskunde.</p>
      <p>My sister studies medicine.</p>

      <nav className="article-related" aria-label="Related">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/word/hermana/"><span lang="es">hermana</span>, learn the Spanish word</Link></li>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
          <li><Link href="/how-to-say/sister-in-spanish/">How to say “sister” in Spanish</Link></li>
          <li><Link href="/hoe-zeg-je/zus-in-het-spaans/" hrefLang="nl">Hoe zeg je zus in het Spaans?</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p>Build vocabulary with <strong>Letters</strong>.</p>
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
