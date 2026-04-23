import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn Vocabulary Daily: A Simple System",
  description: "Build a daily vocabulary habit with tiny sessions, streak psychology, and realistic anchors, from Letters.",
  path: "/guides/learn-vocabulary-daily/",
  locale: "en",
  alternates: {
    en: "/guides/learn-vocabulary-daily/",
    es: "/es/guides/aprender-vocabulario-diario/",
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
        path: "/guides/learn-vocabulary-daily/",
        headline: "Learn Vocabulary Daily: A Simple System",
        description: "Build a daily vocabulary habit with tiny sessions, streak psychology, and realistic anchors, from Letters.",
      }}

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
        langs={[
          { href: "https://www.letters.game/guides/learn-vocabulary-daily/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-diario/", hreflang: "es", label: "Español" },
        ]}
    >
      <h1 itemProp="headline">Learn Vocabulary Daily: A Simple System</h1>
      <p className="article-lead" itemProp="description">To <strong>learn vocabulary daily</strong>, shrink the bar until it fits real life: <strong>same cue</strong> each day, <strong>two to seven minutes</strong> of retrieval, and a <strong>forgiveness rule</strong> so one miss does not collapse the habit.</p>
      
      <h2>Anchor to an existing routine</h2>
      <p>After coffee, before sleep, lunch, attach vocabulary to something you already do.</p>
      <h2>Smallest viable session</h2>
      <p>Even five honest minutes count; zero minutes count as a break, not failure.</p>
      <h2>Streaks as scaffolding</h2>
      <p>Use streaks to make the next session obvious, not to shame you.</p>
      <h2>Weekly review, not guilt</h2>
      <p>Skim weak words weekly; celebrate showing up imperfectly.</p>
      <h2>Letters for daily play</h2>
      <p><strong>Letters</strong> is designed for repeatable short rounds, ideal daily anchor.</p>
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/learn-more-vocabulary-in-5-minutes-a-day/",
      label: <>More vocabulary in 5 minutes a day</>,
      },
      {
      href: "/guides/learn-new-vocabulary-every-day/",
      label: <>Learn new vocabulary every day</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
      },
      {
      href: "/guides/best-apps-to-learn-vocabulary/",
      label: <>Best apps to learn vocabulary</>,
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
