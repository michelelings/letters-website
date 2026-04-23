import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { CardDemo } from "@/components/CardDemo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn Spanish",
  description: "Learn Spanish with Letters: words, phrases, travel sets, and vocabulary by topic.",
  path: "/learn/spanish/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/",
  },
  ogImage: "/og/generated/learn-spanish.png",
  ogImageAlt: "hermana | Letters",
});

export default function Page() {
  return (
    <ArticlePage

        locale="en"
        pageType="article"
        extras={[
          { href: "/spanish/", label: "Spanish hub" },
          { href: "/guides/", label: "All guides" },
        ]}
    >
      <h1>Learn Spanish</h1>
      <Lead>Build real-world Spanish through themed lists, high-frequency phrases, and travel-ready language, then reinforce it with short, focused practice.</Lead>
      
      <CardDemo embedded words={["hermana","viaje","comer","hola","gracias","familia"]} clueLocale="en" initialClue="Guess the word" />
      
      <h2>Words</h2>
      <p>Learn individual words with clear meanings, pronunciation, and example sentences.</p>
      <ul>
      <li><Link href="/learn/spanish/word/hermana/"><em>hermana</em></Link> → sister</li>
      </ul>
      
      <h2>Topics</h2>
      <p>Vocabulary grouped by situation so you remember words in context.</p>
      <ul>
      <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
      </ul>
      
      <h2>Phrases</h2>
      <p>Natural chunks you can use in conversation.</p>
      <ul>
      <li><Link href="/learn/spanish/phrase/buenos-dias/"><em>buenos días</em></Link></li>
      </ul>
      
      <h2>Travel</h2>
      <p>Language for trips: ordering food, directions, and essentials.</p>
      <ul>
      <li><Link href="/learn/spanish/travel/restaurants/">Restaurants and dining</Link></li>
      </ul>
      
      <h2>Countries</h2>
      <p>Local flavor: how people really talk in specific places.</p>
      <ul>
      <li><Link href="/learn/spanish/mexico/slang/">Mexico: everyday slang</Link></li>
      <li><Link href="/learn/spanish/costa-rica/slang/">Costa Rica: everyday slang</Link></li>
      </ul>
      
      <RelatedLinks
      ariaLabel="Related"
      heading="Related"
      items={[
      {
      href: "/spanish/",
      label: <>Spanish hub</>,
      },
      {
      href: "/guides/learn-spanish-vocabulary/",
      label: <>Learn Spanish vocabulary (guide)</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Letters</strong> helps you rehearse spelling and recall in short sessions.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
