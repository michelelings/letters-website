import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
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
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path: "/guides/games-to-learn-vocabulary/",
        headline: "Games to Learn Vocabulary (That Actually Work)",
        description: "What makes vocabulary games effective: retrieval, spacing, and meaningful challenge, and what to avoid.",
      }}
      i18nAlternates={{
        en: "https://www.letters.game/guides/games-to-learn-vocabulary/",
        es: "https://www.letters.game/es/guides/juegos-aprender-vocabulario/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "en", path: "/guides/games-to-learn-vocabulary/", label: "Games to Learn Vocabulary (That Actually Work)" })}

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
    >
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
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/word-games-vs-flashcards-vocabulary/",
      label: <>Word games vs flashcards</>,
      },
      {
      href: "/guides/best-apps-to-learn-vocabulary/",
      label: <>Best apps to learn vocabulary</>,
      },
      {
      href: "/guides/best-vocabulary-games-for-adults/",
      label: <>Best vocabulary games for adults</>,
      },
      {
      href: "/guides/english-vocabulary-games-for-adults/",
      label: <>English vocabulary games for adults</>,
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
