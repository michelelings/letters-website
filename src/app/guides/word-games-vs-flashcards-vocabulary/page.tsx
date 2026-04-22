import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Word Games vs Flashcards for Vocabulary",
  description: "Word games vs flashcards for vocabulary: retrieval depth, context, motivation, and when each tool wins, comparison from Letters.",
  path: "/guides/word-games-vs-flashcards-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/word-games-vs-flashcards-vocabulary/",
    es: "/es/guides/juegos-palabras-vs-fichas-vocabulario/",
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
      <h1 itemProp="headline">Word Games vs Flashcards for Vocabulary</h1>
      <p className="article-lead" itemProp="description"><strong>Word games vs flashcards</strong> is not a religion, it is a fit question. Games often win on <strong>motivation</strong> and <strong>production-style recall</strong>; flashcards win on <strong>brutal efficiency</strong> for recognition-heavy decks and arbitrary facts. Most people benefit from <strong>both</strong>, at different times.</p>

      <h2>What flashcards do best</h2>
      <p>High volume recognition, date-certain review schedules, and “I just need to pass this list” crunch mode. Digital SRS shines when you already care about the format.</p>

      <h2>Where flashcards quietly hurt</h2>
      <p>Infinite decks, zero context, and guilt spirals when reviews pile up. You can know the card and still fail the conversation, recognition without production is incomplete.</p>

      <h2>What word games add</h2>
      <p>Constraints that mimic real recall: find the word, spell it, swap letters, work under a little time pressure. Well-designed games also <strong>truncate sessions</strong> into satisfying loops.</p>

      <h2>Retention is about retrieval, not packaging</h2>
      <p>Science favors <strong>testing yourself</strong>, not rereading. Both games and flashcards can deliver retrieval, pick the packaging you will open on a Tuesday night.</p>

      <h2>Practical split-week plan</h2>
      <p>Use cards for intake and scheduling; use games (or conversation) for production. If you despise cards, flip the ratio, but keep <em>some</em> honest recall without the answer visible.</p>

      <h2>Letters in this comparison</h2>
      <p><strong>Letters</strong> leans game-first: tactile tiles and short rounds for learners who want vocabulary practice that still feels like play.</p>

      <h2>Summary</h2>
      <p>Games vs flashcards is a false duel. Choose based on whether you need volume recognition, joyful production, or both, and refuse to let the tool become the excuse to skip practice.</p>

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary (hub)</Link></li>
          <li><Link href="/guides/best-apps-to-learn-vocabulary/">Best apps to learn vocabulary</Link></li>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/best-way-to-learn-vocabulary/">Best way to learn vocabulary (casual)</Link></li>
          <li><Link href="/guides/">All guides</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Try Letters</strong>: a word puzzle game from Ocho. Short sessions, tactile tiles, built for learners who want play before pressure.</p>
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
          { href: "/guides/word-games-vs-flashcards-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/juegos-palabras-vs-fichas-vocabulario/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
