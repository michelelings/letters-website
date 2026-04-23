import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Learn More Vocabulary in 5 Minutes a Day",
  description: "How to learn more vocabulary in 5 minutes a day: micro-sessions, one clear target, active recall, and stacking the habit, from Letters.",
  path: "/guides/learn-more-vocabulary-in-5-minutes-a-day/",
  locale: "en",
  alternates: {
    en: "/guides/learn-more-vocabulary-in-5-minutes-a-day/",
    es: "/es/guides/aprender-mas-vocabulario-5-minutos/",
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
          { href: "/guides/learn-more-vocabulary-in-5-minutes-a-day/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/aprender-mas-vocabulario-5-minutos/", hreflang: "es", label: "Español" },
        ]}
    >
      <h1 itemProp="headline">How to Learn More Vocabulary in 5 Minutes a Day</h1>
      <p className="article-lead" itemProp="description"><strong>How to learn more vocabulary</strong> when life is busy is not about motivation, it is about <strong>design</strong>. Five minutes work when each session has <strong>one job</strong>, you <strong>retrieve before peeking</strong>, and the habit is <strong>anchored</strong> to something you already do.</p>
      
      <h2>Pick one micro-outcome per session</h2>
      <p>Examples: “five words I can produce cold,” “one theme reviewed,” “ten tile rounds.” If everything is optional, nothing gets done. A narrow target makes five minutes feel complete.</p>
      
      <h2>Start with recall, end with input</h2>
      <p>Open with retrieval while focus is fresh, say it, spell it, or play a quick word game. Then add a short read or listen for context. Order matters: <strong>strain first, comfort second</strong>.</p>
      
      <h2>Keep the queue small</h2>
      <p>Three to seven active words beat a backlog of sixty. Move items to “known” aggressively; you can always re-import stragglers on Fridays.</p>
      
      <h2>Same time, same cup of coffee</h2>
      <p>Habits stick to cues. Pair practice with a daily anchor so you do not spend willpower deciding “when.”</p>
      
      <h2>Celebrate streaks without worshipping them</h2>
      <p>Two missed days does not erase progress. The goal is <strong>next session obvious</strong>, not perfection. Tools with streaks help when they reduce shame, not add it.</p>
      
      <h2>Letters and five-minute loops</h2>
      <p>If tactile spelling fits your brain better than flashcards, <strong>Letters</strong> is built for fast rounds you can squeeze between real life.</p>
      
      <h2>Summary</h2>
      <p>Five minutes compound: one job, retrieval first, tiny queue, reliable cue. That is how “not a language person” becomes someone who simply never skipped Wednesday.</p>
      
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/learn-vocabulary-daily/",
      label: <>Learn vocabulary daily (hub)</>,
      },
      {
      href: "/guides/learn-new-vocabulary-every-day/",
      label: <>Learn new vocabulary every day</>,
      },
      {
      href: "/guides/how-to-learn-vocabulary-fast/",
      label: <>How to learn vocabulary fast</>,
      },
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
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
