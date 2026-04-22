import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { CardDemo } from "@/components/CardDemo";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Spanish family vocabulary",
  description: "Spanish family vocabulary: mother, father, sister, brother, grandparents, with example sentences and audio-friendly study tips.",
  path: "/learn/spanish/family-vocabulary/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/family-vocabulary/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-family-vocabulary.png",
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
      <h1>Spanish family vocabulary</h1>
      <p className="article-lead">Core words for talking about relatives, learn the nouns, then plug them into simple sentences you can reuse.</p>

      <CardDemo embedded words={["hermana","madre","padre","hermano","abuela","abuelo"]} clueLocale="en" initialClue="Guess the word" />

      <h2>Vocabulary</h2>
      <ul>
        <li><strong>madre</strong> → mother</li>
        <li><strong>padre</strong> → father</li>
        <li><strong><Link href="/learn/spanish/word/hermana/">hermana</Link></strong> → sister</li>
        <li><strong>hermano</strong> → brother</li>
        <li><strong>abuela</strong> → grandmother</li>
        <li><strong>abuelo</strong> → grandfather</li>
      </ul>

      <h2>Example sentences</h2>
      <p>Mi <strong>hermana</strong> vive en Madrid., My sister lives in Madrid.</p>
      <p>Visito a mis <strong>padres</strong> los domingos., I visit my parents on Sundays.</p>

      <h2>Audio</h2>
      <p>Hearing each word in a short sentence helps lock in stress and vowel sounds. Listen to native audio where you can, then say the line out loud.</p>

      <h2>Practice</h2>
      <p>Review this list in short bursts: cover the English, recall the Spanish, then try writing or spelling the words from memory. <strong>Letters</strong> is built for that kind of quick rehearsal.</p>

      <nav className="article-related" aria-label="Related pages">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/phrase/buenos-dias/"><em>buenos días</em></Link></li>
          <li><Link href="/learn/spanish/travel/restaurants/">Spanish for restaurants (travel)</Link></li>
          <li><Link href="/learn/spanish/">Learn Spanish</Link></li>
          <li><Link href="/spanish/">Spanish hub</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Letters</strong>, practice these words in quick rounds.</p>
      </div>
      <DownloadCta label="Download Letters" />
      <p className="article-supplement-pdf">
        <Link href="/downloads/learn/spanish/family-vocabulary/cheat-sheet.pdf" className="article-supplement-pdf__btn" download>Printable PDF</Link>
      </p>
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[
          { href: "/learn/spanish/", label: "Learn Spanish" },
          { href: "/guides/", label: "Guides" },
        ]}
      />
    </>
  );
}
