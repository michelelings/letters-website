import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Learn Spanish Vocabulary Without Classes",
  description: "How to learn Spanish vocabulary without classes: themed practice, input you enjoy, speaking early, and game-style recall, a self-study path from Letters.",
  path: "/guides/how-to-learn-spanish-without-classes/",
  locale: "en",
  alternates: {
    en: "/guides/how-to-learn-spanish-without-classes/",
    es: "/es/guides/aprender-vocabulario-espanol-sin-clases/",
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
        path: "/guides/how-to-learn-spanish-without-classes/",
        headline: "How to Learn Spanish Vocabulary Without Classes",
        description: "How to learn Spanish vocabulary without classes: themed practice, input you enjoy, speaking early, and game-style recall, a self-study path from Letters.",
      }}

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
        langs={[
          { href: "/guides/how-to-learn-spanish-without-classes/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/aprender-vocabulario-espanol-sin-clases/", hreflang: "es", label: "Español" },
        ]}
    >
      <h1 itemProp="headline">How to Learn Spanish Vocabulary Without Classes</h1>
      <p className="article-lead" itemProp="description">You can <strong>learn Spanish vocabulary</strong> without a classroom if you replace “teacher pace” with <strong>high-frequency practice</strong>: tight themes, input you actually enjoy, early speaking in safe settings, and <strong>recall</strong> that feels more like a game than a midterm.</p>
      
      <h2>Build around situations, not giant word lists</h2>
      <p>Pick bundles you will reuse: food, directions, plans with friends, lodging. Finish one situation before chasing the next. Courses sequence grammar; self-study wins when <strong>vocabulary is organized by use</strong>.</p>
      
      <h2>Feed your ears and eyes daily</h2>
      <p>Comprehensible input (graded readers, slow podcasts, captions-on shows) gives words <em>living neighbors</em> in memory. Passive-only is slow, pair it with quick production.</p>
      
      <h2>Talk early, badly, on purpose</h2>
      <p>Short exchanges beat silent perfectionism. Record yourself, speak to apps, join low-stakes chats. Vocabulary sticks when it exits your mouth, not only when it enters your eyes.</p>
      
      <h2>Keep grammar light at first</h2>
      <p>Learn chunks (<em>quiero…</em>, <em>me gustaría…</em>, <em>¿dónde está…?</em>) as whole phrases. You can refine tense and agreement later; early wins come from <strong>communicating</strong>.</p>
      
      <h2>Gamify recall on your phone</h2>
      <p>Short tile or spelling puzzles mirror retrieval under mild pressure, closer to conversation prep than endless multiple choice. <strong>Letters</strong> is aimed at people who want that tactile, low-friction loop.</p>
      
      <h2>Summary</h2>
      <p>The classroom is optional; <strong>structure is not</strong>. Theme your words, immerse lightly, speak sooner than feels comfortable, and practice recall in formats you will actually open tomorrow.</p>
      
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/learn-spanish-vocabulary/",
      label: <>Learn Spanish vocabulary (hub)</>,
      },
      {
      href: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
      label: <>Spanish vocabulary for travel</>,
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
