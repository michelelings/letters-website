import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { CardDemo } from "@/components/CardDemo";
import { DownloadCta } from "@/components/DownloadCta";
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
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1>Learn Spanish</h1>
      <p className="article-lead">Build real-world Spanish through themed lists, high-frequency phrases, and travel-ready language, then reinforce it with short, focused practice.</p>

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

      <nav className="article-related" aria-label="Related">
        <h2>Related</h2>
        <ul>
          <li><Link href="/spanish/">Spanish hub</Link></li>
          <li><Link href="/guides/learn-spanish-vocabulary/">Learn Spanish vocabulary (guide)</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Letters</strong> helps you rehearse spelling and recall in short sessions.</p>
      </div>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[
          { href: "/spanish/", label: "Spanish hub" },
          { href: "/guides/", label: "All guides" },
        ]}
      />
    </>
  );
}
