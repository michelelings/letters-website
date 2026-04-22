import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn Korean Vocabulary: Daily Puzzle Game",
  description: "Learn Korean vocabulary with Hangul fluency, pop-culture hooks, and daily micro-sessions, from Letters.",
  path: "/guides/learn-korean-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/learn-korean-vocabulary/",
    es: "/es/guides/aprender-vocabulario-coreano/",
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
      <h1 itemProp="headline">Learn Korean Vocabulary: Daily Puzzle Game</h1>
      <p className="article-lead" itemProp="description"><strong>Learn Korean vocabulary</strong> by locking in <strong>Hangul</strong>, learning <strong>themed chunks</strong>, and using <strong>daily puzzle-style recall</strong>, especially if K-culture keeps you motivated.</p>

      <h2>Hangul first, fast</h2>
      <p>Get syllable blocks readable early, it unlocks every later step.</p>
      <h2>Themed decks</h2>
      <p>Food, emotions, social media verbs, pick what you actually say.</p>
      <h2>Politeness levels later</h2>
      <p>Start with neutral/polite basics; stack formality nuance as you grow.</p>
      <h2>Daily micro-session</h2>
      <p>Consistency matters more than marathon weekends.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> supports daily spelling play once Hangul letters are familiar.</p>
      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/how-to-learn-korean-vocabulary/">How to learn Korean vocabulary (the fun way)</Link></li>
          <li><Link href="/guides/learn-japanese-vocabulary/">Learn Japanese vocabulary</Link></li>
          <li><Link href="/guides/learn-vocabulary-daily/">Learn vocabulary daily</Link></li>
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
          { href: "https://www.letters.game/guides/learn-korean-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-coreano/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
