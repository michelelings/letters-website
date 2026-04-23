import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
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
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path: "/guides/best-apps-to-learn-vocabulary/",
        headline: "Best Apps to Learn Vocabulary (Ranked 2026)",
        description: "How to pick the best apps to learn vocabulary when you want games, not grammar homework, framework for 2026.",
      }}
      i18nAlternates={{
        en: "https://www.letters.game/guides/best-apps-to-learn-vocabulary/",
        es: "https://www.letters.game/es/guides/mejores-apps-aprender-vocabulario/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "en", path: "/guides/best-apps-to-learn-vocabulary/", label: "Best Apps to Learn Vocabulary (Ranked 2026)" })}

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
    >
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
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/learn-english-vocabulary/",
      label: <>Learn English vocabulary</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
      },
      {
      href: "/guides/learn-vocabulary-daily/",
      label: <>Learn vocabulary daily</>,
      },
      {
      href: "/guides/",
      label: <>All guides</>,
      }
      ]}
      />
      <ArticleCta label="Download Letters">
      <p><strong>Try Letters</strong>: short word puzzles from Ocho. Play first, pressure second.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
