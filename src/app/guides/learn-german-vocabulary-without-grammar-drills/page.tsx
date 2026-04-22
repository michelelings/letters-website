import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Learn German Vocabulary Without Grammar Drills",
  description: "Learn German vocabulary without grammar drills first: chunks, compounds, themed sets, and playful recall, game-friendly advice from Letters.",
  path: "/guides/learn-german-vocabulary-without-grammar-drills/",
  locale: "en",
  alternates: {
    en: "/guides/learn-german-vocabulary-without-grammar-drills/",
    es: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
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
      <h1 itemProp="headline">Learn German Vocabulary Without Grammar Drills</h1>
      <p className="article-lead" itemProp="description">You can <strong>learn German vocabulary</strong> without living inside declension tables first. Start with <strong>usable chunks</strong>, respect how <strong>compounds</strong> telegraph meaning, theme words around <strong>travel and daily life</strong>, and add grammar when curiosity, not shame, pulls you there.</p>

      <h2>Phrases beat bare stems</h2>
      <p>Learn <em>ich hätte gern…</em>, <em>wo ist…?</em>, <em>ein Ticket nach…</em> as bundles. Gender and case stick faster when words arrive dressed for work, not naked on a list.</p>

      <h2>Use compound logic as a cheat code</h2>
      <p>Long nouns split into parts you may already know. Practice spotting familiar bricks, it turns intimidating strings into puzzles instead of tongue twisters.</p>

      <h2>Delay perfection on der/die/das</h2>
      <p>Track articles for high-frequency words; do not freeze every sentence until case is flawless. Understand first; polish with exposure and targeted drills later.</p>

      <h2>Thematic depth over random breadth</h2>
      <p>Food, transit, small talk, close one drawer before opening the next. German rewards pattern recognition once context repeats.</p>

      <h2>Make recall tactile</h2>
      <p>Spelling from available letters mirrors assembling compounds mentally. <strong>Letters</strong> fits learners who want tactile word play alongside German’s love of long written words.</p>

      <h2>Summary</h2>
      <p>Vocabulary-first German is valid: chunks, compound awareness, themes, and patient grammar. You are allowed to enjoy the language before you ace every declension.</p>

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/learn-german-vocabulary/">Learn German vocabulary (hub)</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/learn-spanish-vocabulary/">Learn Spanish vocabulary</Link></li>
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
          { href: "/guides/learn-german-vocabulary-without-grammar-drills/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
