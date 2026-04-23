import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
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
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path: "/guides/learn-korean-vocabulary/",
        headline: "Learn Korean Vocabulary: Daily Puzzle Game",
        description: "Learn Korean vocabulary with Hangul fluency, pop-culture hooks, and daily micro-sessions, from Letters.",
      }}
      i18nAlternates={{
        en: "https://www.letters.game/guides/learn-korean-vocabulary/",
        es: "https://www.letters.game/es/guides/aprender-vocabulario-coreano/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "en", path: "/guides/learn-korean-vocabulary/", label: "Learn Korean Vocabulary: Daily Puzzle Game" })}

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
    >
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
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/how-to-learn-korean-vocabulary/",
      label: <>How to learn Korean vocabulary (the fun way)</>,
      },
      {
      href: "/guides/learn-japanese-vocabulary/",
      label: <>Learn Japanese vocabulary</>,
      },
      {
      href: "/guides/learn-vocabulary-daily/",
      label: <>Learn vocabulary daily</>,
      },
      {
      href: "/guides/",
      label: <>All guides</>,
      }
      ]}
      />
      <ArticleCta label="Download Letters">
      <p><strong>Try Letters</strong>: short word puzzles from Ocho. Play first, pressure second.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
