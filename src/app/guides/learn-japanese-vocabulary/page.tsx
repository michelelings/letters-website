import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn Japanese Vocabulary Through Puzzle Games",
  description: "Learn Japanese vocabulary with hiragana-friendly recall, short sessions, and gamified repetition, from Letters.",
  path: "/guides/learn-japanese-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/learn-japanese-vocabulary/",
    es: "/es/guides/aprender-vocabulario-japones/",
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
          { href: "https://www.letters.game/guides/learn-japanese-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-japones/", hreflang: "es", label: "Español" },
        ]}
    >
      <h1 itemProp="headline">Learn Japanese Vocabulary Through Puzzle Games</h1>
      <p className="article-lead" itemProp="description"><strong>Learn Japanese vocabulary</strong> faster when you pair <strong>hiragana recognition</strong>, <strong>meaningful themes</strong> (food, travel, verbs), and <strong>recall</strong> in formats that feel like games, not endless copying drills.</p>
      
      <h2>Stabilize hiragana early</h2>
      <p>Until basic syllabary is automatic, every word fight includes decoding overhead. Mix character recognition with meaning.</p>
      <h2>Themed sets</h2>
      <p>Food, transit, daily verbs, tight bundles beat random joyrides through a frequency list.</p>
      <h2>Recall, not only flash</h2>
      <p>Produce readings and meanings yourself; romaji-only comfort slows progress if you want to read real Japanese.</p>
      <h2>Short daily wins</h2>
      <p>Five focused minutes beat monthly guilt spirals.</p>
      <h2>Letters and Japanese</h2>
      <p><strong>Letters</strong> suits learners who want tactile spelling practice alongside character memory.</p>
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/how-to-learn-japanese-vocabulary/",
      label: <>How to learn Japanese vocabulary (the fun way)</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
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
