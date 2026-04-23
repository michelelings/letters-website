import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Learn Vocabulary Through Games Works",
  description: "Why learning vocabulary through games works: retrieval practice, motivation, spacing in disguise, and skills that transfer, science-friendly take from Letters.",
  path: "/guides/why-learn-vocabulary-through-games/",
  locale: "en",
  alternates: {
    en: "/guides/why-learn-vocabulary-through-games/",
    es: "/es/guides/por-que-aprender-vocabulario-con-juegos/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Letters: word game from Ocho",
});

export default function Page() {
  return (
    <ArticlePage
      schemaArticle

        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
        langs={[
          { href: "/guides/why-learn-vocabulary-through-games/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/por-que-aprender-vocabulario-con-juegos/", hreflang: "es", label: "Español" },
        ]}
    >
      <h1 itemProp="headline">Why Learn Vocabulary Through Games Works</h1>
      <p className="article-lead" itemProp="description"><strong>Why learn vocabulary through games?</strong> Because durable memory comes from <strong>retrieving</strong> words under modest challenge, revisiting them on a <strong>rhythm</strong>, and doing it long enough to become a <strong>habit</strong>, and well-designed games stack those ingredients without feeling like a test.</p>
      
      <h2>Games force retrieval, not just exposure</h2>
      <p>Passively reading a list is easy; pulling a word from memory is what strengthens it. Puzzle mechanics, spell it, find it, assemble it, are dressed-up <strong>retrieval practice</strong>, one of the most replicated findings in learning research.</p>
      
      <h2>Motivation buys the repetitions you would skip</h2>
      <p>Spacing and review work on paper, but real humans skip boring homework. Points, streaks, levels, and quick wins are not childish; they are <strong>commitment devices</strong> that keep you in contact with the language.</p>
      
      <h2>Constraints mimic real recall pressure (lightly)</h2>
      <p>A timer, a limited set of letters, or a short round creates the kind of friction your brain remembers. Not high-stakes panic, just enough to stop passive recognition from masquerading as knowledge.</p>
      
      <h2>Variety reduces interference</h2>
      <p>Mixing modes (recognition, production, categories) builds more retrieval routes than a single flashcard orientation. Games naturally rotate formats if designers understand vocabulary, not only arcade reflexes.</p>
      
      <h2>When games are not enough</h2>
      <p>You still need input: reading, listening, conversation. Games complement immersion; they rarely replace it. Treat them as the <strong>engine for word memory</strong>, not the whole language diet.</p>
      
      <h2>Letters is built around this idea</h2>
      <p><strong>Letters</strong> emphasizes short, tactile word rounds for learners who want retrieval-heavy practice that still feels like play.</p>
      
      <h2>Summary</h2>
      <p>Games work for vocabulary when they prioritize retrieval, spaced contact, and sustainable motivation, not when they only reward twitch skills. Pick mechanics that make you <em>produce</em> words, and keep immersion elsewhere in the stack.</p>
      
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
      },
      {
      href: "/guides/word-games-vs-flashcards-vocabulary/",
      label: <>Word games vs flashcards</>,
      },
      {
      href: "/guides/",
      label: <>All guides</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Try Letters</strong>: a word puzzle game from Ocho. Short sessions, tactile tiles, built for learners who want play before pressure.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
