import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
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
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
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
      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/learn-more-vocabulary-in-5-minutes-a-day/">More vocabulary in 5 minutes a day</Link></li>
          <li><Link href="/guides/learn-new-vocabulary-every-day/">Learn new vocabulary every day</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
          <li><Link href="/guides/best-apps-to-learn-vocabulary/">Best apps to learn vocabulary</Link></li>
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
          { href: "https://www.letters.game/guides/learn-vocabulary-daily/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-diario/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
