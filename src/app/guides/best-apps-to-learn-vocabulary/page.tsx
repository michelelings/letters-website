import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Best Apps to Learn Vocabulary (Ranked 2026)",
  description: "How to pick the best apps to learn vocabulary when you want games, not grammar homework, framework for 2026.",
  path: "/guides/best-apps-to-learn-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/best-apps-to-learn-vocabulary/",
    es: "/es/guides/mejores-apps-aprender-vocabulario/",
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
      <h1 itemProp="headline">Best Apps to Learn Vocabulary (Ranked 2026)</h1>
      <p className="article-lead" itemProp="description">The <strong>best apps to learn vocabulary</strong> share traits: real <strong>recall practice</strong>, sensible <strong>spacing</strong>, transparent <strong>pricing</strong>, and an experience you open without dread. Rankings change, criteria should not.</p>

      <h2>Does it make you produce words?</h2>
      <p>Swipe-heavy apps can feel productive while skipping retrieval.</p>
      <h2>Spacing and review quality</h2>
      <p>Look for systems that reschedule weak items intelligently.</p>
      <h2>Pricing clarity</h2>
      <p>Free trials should show the real experience, not a bait-and-switch.</p>
      <h2>Joy and friction</h2>
      <p>Pick the app you will open on a tired Tuesday.</p>
      <h2>Where Letters fits</h2>
      <p><strong>Letters</strong> targets learners who want tactile word puzzles over grammar grind, try it alongside your shortlist.</p>
      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/learn-english-vocabulary/">Learn English vocabulary</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
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
          { href: "https://www.letters.game/guides/best-apps-to-learn-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "https://www.letters.game/es/guides/mejores-apps-aprender-vocabulario/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
