import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Learn Japanese Vocabulary (The Fun Way)",
  description: "How to learn Japanese vocabulary the fun way: stabilize hiragana, use themed sets, force recall, and build habits, puzzle-friendly tips from Letters.",
  path: "/guides/how-to-learn-japanese-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/how-to-learn-japanese-vocabulary/",
    es: "/es/guides/como-aprender-vocabulario-japones/",
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
      <h1 itemProp="headline">How to Learn Japanese Vocabulary (The Fun Way)</h1>
      <p className="article-lead" itemProp="description"><strong>How to learn Japanese vocabulary</strong> without turning every evening into rote copying? Pair <strong>readable hiragana</strong>, <strong>tight themes</strong> (food, transit, verbs), and <strong>recall</strong> in formats that feel like puzzles, so progress stays motivating.</p>

      <h2>Make hiragana annoyingly automatic first</h2>
      <p>Until basic syllables are fast to read, every word carries extra decoding tax. Mix character drills with <strong>meaningful words</strong> so you are never practicing script in a vacuum.</p>

      <h2>Learn in themed sets, not random frequency marathons</h2>
      <p>A weekend of unrelated “top 500 words” scatters attention. Pick small clusters, <em>conbini</em> items, train phrases, daily verbs, and finish them before opening the next theme.</p>

      <h2>Force recall, not just recognition</h2>
      <p>Romaji can be a comfort blanket that slows reading goals. Push toward <strong>reading kana</strong> with meaning, then produce readings yourself before you peek. That gap is where memory forms.</p>

      <h2>Use sentences early (but keep them short)</h2>
      <p>Even two-word utterances encode pitch and particle habits better than isolated lemmas. Shadow simple lines, then vary one slot at a time (<em>これください</em> → swap noun).</p>

      <h2>Stack tiny daily reps</h2>
      <p>Japanese rewards consistency: five honest minutes beats a monthly guilt binge. Tie practice to something you already do daily so it does not compete with willpower.</p>

      <h2>Why puzzle-style practice helps</h2>
      <p>Spelling and assembling from letters (or kana tiles) mirrors <strong>retrieval under light constraints</strong>, closer to conversation prep than passive video. <strong>Letters</strong> is aimed at learners who want tactile word play alongside character work.</p>

      <h2>Summary</h2>
      <p>Stabilize kana, theme your lists, prioritize production, and keep sessions small. Fun is not a gimmick, it is how casual learners stay long enough for Japanese to stick.</p>

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/learn-japanese-vocabulary/">Learn Japanese vocabulary (hub)</Link></li>
          <li><Link href="/guides/learn-chinese-vocabulary/">Learn Chinese vocabulary</Link></li>
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
          { href: "/guides/how-to-learn-japanese-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/como-aprender-vocabulario-japones/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
