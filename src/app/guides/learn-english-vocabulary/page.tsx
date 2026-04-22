import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn English Vocabulary: Games vs Flashcards",
  description: "Learn English vocabulary with games instead of flashcard marathons, for non-native speakers who want low-pressure practice.",
  path: "/guides/learn-english-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/learn-english-vocabulary/",
    es: "/es/guides/aprender-vocabulario-ingles/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Letters: word game from Ocho",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
      <h1 itemProp="headline">Learn English Vocabulary: Games vs Flashcards</h1>
      <p className="article-lead" itemProp="description">To <strong>learn English vocabulary</strong> as a non-native speaker, balance <strong>chunks</strong> (phrases, not only single words), <strong>active recall</strong>, and formats that feel like <strong>play</strong>, especially if traditional flashcards have failed you before.</p>

      <h2>Chunks beat lonely words</h2>
      <p>Learn collocations and short phrases (“take a break”, “pay attention”) so rhythm and grammar ride along with meaning.</p>
      <h2>Recognition is not enough</h2>
      <p>Train production: say it, spell it, or rebuild the word from letters before you check the answer.</p>
      <h2>Games when they demand recall</h2>
      <p>The best English vocabulary games force retrieval under time or layout constraints, similar to real-time conversation.</p>
      <h2>Adult-friendly difficulty</h2>
      <p>Skip childish themes if they kill your motivation; pick content that matches your tastes and goals.</p>
      <h2>Letters for English learners</h2>
      <p><strong>Letters</strong> offers tactile, short rounds you can repeat daily, useful when you want English practice without a heavy course load.</p>
      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
          <li><Link href="/guides/english-vocabulary-games-for-adults/">English vocabulary games for adults</Link></li>
          <li><Link href="/guides/best-vocabulary-games-for-adults/">Best vocabulary games for adults</Link></li>
          <li><Link href="/guides/best-apps-to-learn-vocabulary/">Best apps to learn vocabulary</Link></li>
          <li><Link href="/guides/">All guides</Link></li>
        </ul>
      </nav>
      <div className="article-cta-box">
        <p><strong>Try Letters</strong>: short word puzzles from Ocho. Play first, pressure second.</p>
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
        langs={[
          { href: "https://www.letters.game/guides/learn-english-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-ingles/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
