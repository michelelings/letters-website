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
  title: "Wie sagt man Schwester auf Spanisch?",
  description: "Wie sagt man Schwester auf Spanisch? Das spanische Wort ist hermana, Bedeutung und Beispiele.",
  path: "/wie-sagt-man/schwester-auf-spanisch/",
  locale: "de",
  alternates: {
    en: "/how-to-say/sister-in-spanish/",
    de: "/wie-sagt-man/schwester-auf-spanisch/",
  },
  ogType: "article",
  ogImage: "/og/generated/wie-sagt-man-schwester-auf-spanisch.png",
  ogImageAlt: "Schwester | Letters",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="de" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1>Wie sagt man <span lang="de">Schwester</span> auf Spanisch?</h1>
      <p className="article-lead"><strong>Antwort:</strong> <span lang="es">hermana</span>. Für „Bruder“ heißt es <span lang="es">hermano</span>.</p>

      <LettersWordInline words={["Schwester","hermana","Bruder","hermano"]} intervalMs={3000} ariaLive="polite" />

      <nav className="article-related" aria-label="Verwandt">
        <h2>Verwandt</h2>
        <ul>
          <li><Link href="/how-to-say/sister-in-spanish/" hrefLang="en">How to say sister in Spanish (English)</Link></li>
          <li><Link href="/learn/spanish/word/hermana/">Wort: <span lang="es">hermana</span></Link></li>
        </ul>
      </nav>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="de"
        pageType="article"
      />
    </>
  );
}
