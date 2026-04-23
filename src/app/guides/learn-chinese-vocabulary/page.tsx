import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
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
    <ArticlePage
      schemaArticle

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
    >
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
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/how-to-learn-chinese-vocabulary/",
      label: <>How to learn Chinese vocabulary (the fun way)</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
      },
      {
      href: "/guides/learn-japanese-vocabulary/",
      label: <>Learn Japanese vocabulary</>,
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
