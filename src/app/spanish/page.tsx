import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Spanish",
  description: "Learn Spanish with Letters: vocabulary, phrases, travel Spanish, topics, translations, and more.",
  path: "/spanish/",
  locale: "en",
  alternates: {
    en: "/spanish/",
  },
  ogImage: "/og/generated/spanish.png",
  ogImageAlt: "hermana | Letters",
});

export default function Page() {
  return (
    <ArticlePage
      articleJsonLd={{
        path: "/spanish/",
        headline: "Spanish",
        description: "Learn Spanish with Letters: vocabulary, phrases, travel Spanish, topics, translations, and more.",
      }}
      i18nAlternates={{
        en: "/spanish/",
      }}

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
    >
      <h1>Spanish</h1>
      <Lead>Vocabulary by theme, everyday phrases, travel Spanish, translations, and how the language varies around the world, all organized to help you learn faster.</Lead>
      
      <LettersWordInline words={["hermana","gracias","buenos días","restaurante","aprender","hola"]} intervalMs={2800} ariaLive="polite" />
      
      <h2>Learn Spanish</h2>
      <ul>
      <li><Link href="/learn/spanish/">Learn Spanish overview</Link></li>
      </ul>
      
      <h2>Words and topics</h2>
      <ul>
      <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
      <li><Link href="/learn/spanish/word/hermana/"><em>hermana</em></Link> (sister)</li>
      </ul>
      
      <h2>Phrases and travel</h2>
      <ul>
      <li><Link href="/learn/spanish/phrase/buenos-dias/"><em>buenos días</em></Link></li>
      <li><Link href="/learn/spanish/travel/restaurants/">Restaurants and dining</Link></li>
      </ul>
      
      <h2>Countries</h2>
      <p>Country guides cover local expressions, pronunciation, and travel language. More destinations are on the way.</p>
      <ul>
      <li><Link href="/learn/spanish/mexico/slang/">Mexico: everyday slang</Link></li>
      <li><Link href="/learn/spanish/costa-rica/slang/">Costa Rica: everyday slang</Link></li>
      </ul>
      
      <h2>Translate</h2>
      <ul>
      <li><Link href="/translate/spanish-to-dutch/hermana/"><em>hermana</em> in Dutch</Link></li>
      <li><Link href="/how-to-say/sister-in-spanish/">How to say “sister” in Spanish</Link></li>
      </ul>
      
      <RelatedLinks
      ariaLabel="Site"
      heading="Elsewhere"
      items={[
      {
      href: "/guides/",
      label: <>Guides</>,
      },
      {
      href: "/",
      label: <>Home</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Try Letters</strong>: word puzzles for vocabulary practice.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
