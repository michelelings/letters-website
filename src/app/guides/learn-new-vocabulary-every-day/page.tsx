import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn New Vocabulary Every Day: A Simple System",
  description: "Learn new vocabulary every day with a simple system: daily cap, review rhythm, capture habit, and playful recall, from Letters.",
  path: "/guides/learn-new-vocabulary-every-day/",
  locale: "en",
  alternates: {
    en: "/guides/learn-new-vocabulary-every-day/",
    es: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
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
        path: "/guides/learn-new-vocabulary-every-day/",
        headline: "Learn New Vocabulary Every Day: A Simple System",
        description: "Learn new vocabulary every day with a simple system: daily cap, review rhythm, capture habit, and playful recall, from Letters.",
      }}

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
        langs={[
          { href: "/guides/learn-new-vocabulary-every-day/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/aprender-vocabulario-nuevo-cada-dia/", hreflang: "es", label: "Español" },
        ]}
    >
      <h1 itemProp="headline">Learn New Vocabulary Every Day: A Simple System</h1>
      <p className="article-lead" itemProp="description">To <strong>learn new vocabulary every day</strong> without drowning, cap <strong>introductions</strong>, protect <strong>reviews</strong>, <strong>capture</strong> words from real life, and end with <strong>retrieval</strong>, not another passive scroll.</p>
      
      <h2>Rule one: few new, many old</h2>
      <p>Add a small number of fresh words daily; spend most minutes warming up yesterday and last week. Growth feels slow day-to-day and shocking month-to-month, that is the trade you want.</p>
      
      <h2>Carry a capture tool</h2>
      <p>Menus, overheard lines, subtitles, snap a note in seconds. Unprocessed captures become guilt; processed ones become tomorrow’s five-minute job.</p>
      
      <h2>Close loops weekly</h2>
      <p>Once a week, delete duplicates, merge synonyms you keep confusing, and promote words you truly own. Queues rot without pruning.</p>
      
      <h2>Mix modes</h2>
      <p>Read, listen, say, spell. If you only recognize, production lags. If you only drill, context lags. Alternate.</p>
      
      <h2>Play is allowed to be the main event</h2>
      <p>Games that force spelling and recall count as serious study. <strong>Letters</strong> is for people who want daily touch without opening a courseware tab.</p>
      
      <h2>Summary</h2>
      <p>Cap adds, prioritize reviews, capture from life, prune weekly, alternate skills. That is the whole system, simple on paper, powerful when you refuse to skip the boring middle.</p>
      
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/learn-vocabulary-daily/",
      label: <>Learn vocabulary daily (hub)</>,
      },
      {
      href: "/guides/learn-more-vocabulary-in-5-minutes-a-day/",
      label: <>More vocabulary in 5 minutes a day</>,
      },
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
      },
      {
      href: "/guides/",
      label: <>All guides</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Try Letters</strong>: a word puzzle game from Ocho. Short sessions, tactile tiles, built for learners who want play before pressure.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
