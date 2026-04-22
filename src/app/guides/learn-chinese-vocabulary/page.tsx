import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn Chinese Vocabulary Through Puzzle Games",
  description: "Learn Chinese vocabulary with pinyin grounding, character recognition, and themed sets, puzzle-friendly approach.",
  path: "/guides/learn-chinese-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/learn-chinese-vocabulary/",
    es: "/es/guides/aprender-vocabulario-chino/",
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
      <h1 itemProp="headline">Learn Chinese Vocabulary Through Puzzle Games</h1>
      <p className="article-lead" itemProp="description"><strong>Learn Chinese vocabulary</strong> sustainably by pairing <strong>pinyin</strong> with <strong>meaningful themes</strong>, leaning on <strong>character recognition</strong> in doses, and practicing <strong>recall</strong> in quick game-like loops.</p>

      <h2>Pinyin as scaffolding</h2>
      <p>Use pinyin to anchor sounds while you build character knowledge, not as a permanent crutch.</p>
      <h2>Themed vocabulary</h2>
      <p>Food, transport, family, finite sets reduce overload.</p>
      <h2>Characters in batches</h2>
      <p>Learn high-value characters that unlock many words.</p>
      <h2>Tone awareness</h2>
      <p>Practice hearing and speaking tones early; pair with minimal pairs carefully.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> can reinforce spelling/recall once you know the pinyin letters for your deck.</p>
      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/how-to-learn-chinese-vocabulary/">How to learn Chinese vocabulary (the fun way)</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
          <li><Link href="/guides/learn-japanese-vocabulary/">Learn Japanese vocabulary</Link></li>
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
          { href: "https://www.letters.game/guides/learn-chinese-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-chino/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
