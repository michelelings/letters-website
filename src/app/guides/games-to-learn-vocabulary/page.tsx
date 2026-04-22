import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Games to Learn Vocabulary (That Actually Work)",
  description: "What makes vocabulary games effective: retrieval, spacing, and meaningful challenge, and what to avoid.",
  path: "/guides/games-to-learn-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/games-to-learn-vocabulary/",
    es: "/es/guides/juegos-aprender-vocabulario/",
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
      <h1 itemProp="headline">Games to Learn Vocabulary (That Actually Work)</h1>
      <p className="article-lead" itemProp="description">The best <strong>games to learn vocabulary</strong> force <strong>retrieval</strong>, respect <strong>spacing</strong>, and attach words to <strong>meaning</strong>. Pretty graphics alone do not build memory.</p>

      <h2>Retrieval over passive matching</h2>
      <p>Tap-to-reveal matching is easy; producing the word is what sticks.</p>
      <h2>Challenge, not chaos</h2>
      <p>Optimal difficulty keeps you successful ~70–85% of the time, stretch, not demoralize.</p>
      <h2>Spacing and revisits</h2>
      <p>Good games bring words back before you forget, not only once.</p>
      <h2>Meaning and story</h2>
      <p>Themes, levels, or narratives beat raw alphabetized lists.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> focuses tactile spelling and short sessions suited to spaced, repeatable play.</p>
      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/word-games-vs-flashcards-vocabulary/">Word games vs flashcards</Link></li>
          <li><Link href="/guides/best-apps-to-learn-vocabulary/">Best apps to learn vocabulary</Link></li>
          <li><Link href="/guides/best-vocabulary-games-for-adults/">Best vocabulary games for adults</Link></li>
          <li><Link href="/guides/english-vocabulary-games-for-adults/">English vocabulary games for adults</Link></li>
          <li><Link href="/guides/learn-vocabulary-daily/">Learn vocabulary daily</Link></li>
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
          { href: "https://www.letters.game/guides/games-to-learn-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/juegos-aprender-vocabulario/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
