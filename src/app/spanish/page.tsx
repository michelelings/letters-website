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
  title: "Spanish",
  description: "Learn Spanish with Letters: vocabulary, phrases, travel Spanish, topics, translations, and more.",
  path: "/spanish/",
  locale: "en",
  alternates: {
    en: "/spanish/",
  },
  ogImage: "/og/generated/spanish.png",
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
      <h1>Spanish</h1>
      <p className="article-lead">Vocabulary by theme, everyday phrases, travel Spanish, translations, and how the language varies around the world, all organized to help you learn faster.</p>

      <LettersWordInline words={["hermana","gracias","buenos días","restaurante","aprender","hola"]} intervalMs={2800} ariaLive="polite" />

      <h2>Learn Spanish</h2>
      <ul>
        <li><Link href="/learn/spanish/">Learn Spanish overview</Link></li>
      </ul>

      <h2>Words and topics</h2>
      <ul>
        <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
        <li><Link href="/learn/spanish/word/hermana/"><em>hermana</em></Link> (sister)</li>
      </ul>

      <h2>Phrases and travel</h2>
      <ul>
        <li><Link href="/learn/spanish/phrase/buenos-dias/"><em>buenos días</em></Link></li>
        <li><Link href="/learn/spanish/travel/restaurants/">Restaurants and dining</Link></li>
      </ul>

      <h2>Countries</h2>
      <p>Country guides cover local expressions, pronunciation, and travel language. More destinations are on the way.</p>
      <ul>
        <li><Link href="/learn/spanish/mexico/slang/">Mexico: everyday slang</Link></li>
        <li><Link href="/learn/spanish/costa-rica/slang/">Costa Rica: everyday slang</Link></li>
      </ul>

      <h2>Translate</h2>
      <ul>
        <li><Link href="/translate/spanish-to-dutch/hermana/"><em>hermana</em> in Dutch</Link></li>
        <li><Link href="/how-to-say/sister-in-spanish/">How to say “sister” in Spanish</Link></li>
      </ul>

      <nav className="article-related" aria-label="Site">
        <h2>Elsewhere</h2>
        <ul>
          <li><Link href="/guides/">Guides</Link></li>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Try Letters</strong>: word puzzles for vocabulary practice.</p>
      </div>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
      />
    </>
  );
}
