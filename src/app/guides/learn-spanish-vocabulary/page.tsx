import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks } from "@/components/article";
import Link from "next/link";
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
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path: "/guides/learn-spanish-vocabulary/",
        headline: "Learn Spanish Vocabulary the Fun Way",
        description:
          "Learn Spanish vocabulary the fun way: categories, travel sets, and puzzle-style practice for casual learners, from Letters.",
      }}
      i18nAlternates={{
        en: "/guides/learn-spanish-vocabulary/",
        es: "/es/guides/aprender-vocabulario-espanol/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "en", path: "/guides/learn-spanish-vocabulary/", label: "Learn Spanish Vocabulary the Fun Way" })}
        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
    >
      <h1 itemProp="headline">Learn Spanish Vocabulary the Fun Way</h1>
      <Lead>If you want to <strong>learn Spanish vocabulary</strong> without feeling like exam prep, lean on <strong>themes</strong> (food, travel, greetings), <strong>short play sessions</strong>, and <strong>recall</strong>, not endless abstract lists.</Lead>
      
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
      
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
      label: <>Best way to learn Spanish vocabulary for travel</>,
      },
      {
      href: "/guides/how-to-learn-spanish-without-classes/",
      label: <>How to learn Spanish vocabulary without classes</>,
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
      
      <RelatedLinks
      ariaLabel="Practice pages"
      heading="Practice pages"
      items={[
      {
      href: "/learn/spanish/",
      label: <>Learn Spanish overview</>,
      },
      {
      href: "/spanish/",
      label: <>Spanish hub</>,
      },
      {
      href: "/learn/spanish/family-vocabulary/",
      label: <>Family vocabulary</>,
      },
      {
      href: "/learn/spanish/travel/restaurants/",
      label: <>Spanish for travel: restaurants</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Try Letters</strong>: short word puzzles from Ocho. Play first, study second.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
