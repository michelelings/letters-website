import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
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
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
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

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/learn-vocabulary-daily/">Learn vocabulary daily (hub)</Link></li>
          <li><Link href="/guides/learn-more-vocabulary-in-5-minutes-a-day/">More vocabulary in 5 minutes a day</Link></li>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
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
          { href: "/guides/learn-new-vocabulary-every-day/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/aprender-vocabulario-nuevo-cada-dia/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
