import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Learn Korean Vocabulary (The Fun Way)",
  description: "How to learn Korean vocabulary the fun way: Hangul ease, themed sets, honorifics without fear, and habits that stick, from Letters.",
  path: "/guides/how-to-learn-korean-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/how-to-learn-korean-vocabulary/",
    es: "/es/guides/como-aprender-vocabulario-coreano/",
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
      <h1 itemProp="headline">How to Learn Korean Vocabulary (The Fun Way)</h1>
      <p className="article-lead" itemProp="description"><strong>How to learn Korean vocabulary</strong> when drama binge meets discipline? Treat <strong>Hangul fluency</strong> as a weekend problem, build <strong>themed sets</strong> around what you watch, learn <strong>polite chunks</strong> before grammar rabbit holes, and keep sessions short enough for daily life.</p>

      <h2>Make Hangul automatic, not admirable</h2>
      <p>Scrolling romanized captions feels faster; it slows literacy. Push through early Hangul discomfort, within weeks the alphabet stops being the lesson and becomes the doorway.</p>

      <h2>Theme packs tied to your interests</h2>
      <p>Fandom, food, travel, campus life, mine what you already love so recall has emotion. Random frequency lists compete poorly with phrases you want to shout at the screen.</p>

      <h2>Pick one register to start</h2>
      <p>Honorific layers matter, but paralysis matters more. Learn consistent spoken forms for <em>you</em> first; refine politeness levels when patterns start repeating.</p>

      <h2>Sound production beats silent study</h2>
      <p>Korean pronunciation is learnable but exacting. Shadow short lines, exaggerate mouth placement, and compare to natives, hearing yourself reduces the “I know it in my head” trap.</p>

      <h2>Pair with Chinese characters if you go advanced</h2>
      <p>Hanja is optional for many learners but connects shared roots later; do not let it block beginner wins.</p>

      <h2>Letters and Korean</h2>
      <p><strong>Letters</strong> fits spelling-forward practice when you want tile play instead of worksheet drills.</p>

      <h2>Summary</h2>
      <p>Hangul speed, themed passion projects, one speech register to anchor, loud practice. Korean grows fast when you stop negotiating with perfectionism, especially if games help you show up daily.</p>

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/learn-korean-vocabulary/">Learn Korean vocabulary (hub)</Link></li>
          <li><Link href="/guides/learn-chinese-vocabulary/">Learn Chinese vocabulary</Link></li>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/learn-vocabulary-daily/">Learn vocabulary daily</Link></li>
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
          { href: "/guides/how-to-learn-korean-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/como-aprender-vocabulario-coreano/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
