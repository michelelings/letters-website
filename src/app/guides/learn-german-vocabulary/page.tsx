import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn German Vocabulary with Daily Puzzle Practice",
  description: "Learn German vocabulary with compounds, travel themes, and bite-sized puzzle-style practice, from Letters.",
  path: "/guides/learn-german-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/learn-german-vocabulary/",
    es: "/es/guides/aprender-vocabulario-aleman/",
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
          { href: "https://www.letters.game/guides/learn-german-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-aleman/", hreflang: "es", label: "Español" },
        ]}
    >
      <h1 itemProp="headline">Learn German Vocabulary with Daily Puzzle Practice</h1>
      <p className="article-lead" itemProp="description">To <strong>learn German vocabulary</strong>, embrace <strong>noun compounds</strong> as puzzles, learn <strong>travel-ready chunks</strong>, and repeat in <strong>short daily rounds</strong> so cases and gender feel less overwhelming.</p>
      
      <h2>Compounds are feature, not bug</h2>
      <p>Breaking words into parts (Brot, Butter, Brotzeit) builds pattern recognition.</p>
      <h2>Chunks for travel and daily life</h2>
      <p>Train realistic phrases you will say aloud, not only isolated nouns.</p>
      <h2>Gender hooks</h2>
      <p>Pair articles with imagery (“die Sonne” as vivid) instead of brute force tables.</p>
      <h2>Daily beats heroic</h2>
      <p>Steady micro-practice wins over rare three-hour attempts.</p>
      <h2>Letters</h2>
      <p>Use <strong>Letters</strong> for spelling/recall loops that respect your attention budget.</p>
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/learn-german-vocabulary-without-grammar-drills/",
      label: <>German vocabulary without grammar drills</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
      },
      {
      href: "/guides/learn-spanish-vocabulary/",
      label: <>Learn Spanish vocabulary</>,
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
