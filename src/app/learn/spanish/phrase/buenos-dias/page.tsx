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
  title: "buenos días (good morning)",
  description: "buenos días means good morning in Spanish, when to use it and what to say later in the day.",
  path: "/learn/spanish/phrase/buenos-dias/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/phrase/buenos-dias/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-phrase-buenos-dias.png",
  ogImageAlt: "buenos días | Letters",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1 lang="es">buenos días</h1>
      <p className="article-lead"><strong>English:</strong> good morning, the standard greeting from morning through much of the day in many Spanish-speaking regions.</p>

      <LettersWordInline words={["buenos días","buenas tardes","buenas noches","hola"]} intervalMs={3200} ariaLive="polite" />

      <p>Later, switch to <span lang="es">buenas tardes</span> (afternoon) and <span lang="es">buenas noches</span> (evening or night). Exact timing varies by country and habit.</p>
      <nav className="article-related" aria-label="Related">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
          <li><Link href="/learn/spanish/">Learn Spanish</Link></li>
        </ul>
      </nav>
      <DownloadCta label="Download Letters" />
      <p className="article-supplement-pdf">
        <Link href="/downloads/learn/spanish/phrase/buenos-dias/cheat-sheet.pdf" className="article-supplement-pdf__btn" download>Printable PDF</Link>
      </p>
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
      />
    </>
  );
}
