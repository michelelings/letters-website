import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn Spanish Vocabulary the Fun Way",
  description: "Learn Spanish vocabulary the fun way: categories, travel sets, and puzzle-style practice for casual learners, from Letters.",
  path: "/guides/learn-spanish-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/learn-spanish-vocabulary/",
    es: "/es/guides/aprender-vocabulario-espanol/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
      <h1 itemProp="headline">Learn Spanish Vocabulary the Fun Way</h1>
      <p className="article-lead">If you want to <strong>learn Spanish vocabulary</strong> without feeling like exam prep, lean on <strong>themes</strong> (food, travel, greetings), <strong>short play sessions</strong>, and <strong>recall</strong>, not endless abstract lists.</p>

      <h2>Start with categories, not the whole dictionary</h2>
      <p>Pick tight sets: café orders, airport phrases, numbers, days. Small wins feel motivating; random 2,000-word decks feel endless. Themes also mirror how memory works: words show up together in real life.</p>

      <h2>Travel and social Spanish first</h2>
      <p>Many casual learners want conversation starters and trip survival skills. Prioritize high-frequency phrases and polite defaults (“quiero…”, “¿dónde está…?”) before niche jargon. You can always widen later.</p>

      <h2>Make recall playful</h2>
      <p>Reading alone is not enough. Spell from memory, say the word before you peek, or use a letter-based puzzle where you rebuild the word, light pressure helps retention without test anxiety.</p>

      <h2>Pronunciation and spelling together</h2>
      <p>Spanish spelling is relatively regular; say the word while you learn it so sound and letters bind. Five minutes of loud, messy practice beats silent scrolling.</p>

      <h2>Why Letters fits casual Spanish learners</h2>
      <p><strong>Letters</strong> is built for short, tactile rounds, the kind of practice you can do while waiting in line. It is not a grammar exam simulator; it is word play you can repeat daily.</p>

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/best-way-to-learn-spanish-vocabulary-travel/">Best way to learn Spanish vocabulary for travel</Link></li>
          <li><Link href="/guides/how-to-learn-spanish-without-classes/">How to learn Spanish vocabulary without classes</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
          <li><Link href="/guides/learn-vocabulary-daily/">Learn vocabulary daily</Link></li>
          <li><Link href="/guides/">All guides</Link></li>
        </ul>
      </nav>

      <nav className="article-related" aria-label="Practice pages">
        <h2>Practice pages</h2>
        <ul>
          <li><Link href="/learn/spanish/">Learn Spanish overview</Link></li>
          <li><Link href="/spanish/">Spanish hub</Link></li>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
          <li><Link href="/learn/spanish/travel/restaurants/">Spanish for travel: restaurants</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Try Letters</strong>: short word puzzles from Ocho. Play first, study second.</p>
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
          { href: "/guides/learn-spanish-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/aprender-vocabulario-espanol/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
