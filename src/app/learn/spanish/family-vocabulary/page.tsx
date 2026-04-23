import type { Metadata } from "next";
import {
  ArticlePage,
  ArticleCta,
  Lead,
  PrintableDownload,
  RelatedLinks,
  VocabList,
} from "@/components/article";
import { CardDemo } from "@/components/CardDemo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Spanish family vocabulary",
  description: "Spanish family vocabulary: mother, father, sister, brother, grandparents, with example sentences and audio-friendly study tips.",
  path: "/learn/spanish/family-vocabulary/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/family-vocabulary/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-family-vocabulary.png",
  ogImageAlt: "hermana | Letters",
});

export default function Page() {
  return (
    <ArticlePage
      articleJsonLd={{
        path: "/learn/spanish/family-vocabulary/",
        headline: "Spanish family vocabulary",
        description: "Spanish family vocabulary: mother, father, sister, brother, grandparents, with example sentences and audio-friendly study tips.",
      }}
      i18nAlternates={{
        en: "/learn/spanish/family-vocabulary/",
      }}
        locale="en"
        pageType="article"
        extras={[
          { href: "/learn/spanish/", label: "Learn Spanish" },
          { href: "/guides/", label: "Guides" },
        ]}
    >
      <h1>Spanish family vocabulary</h1>
      <Lead>Core words for talking about relatives, learn the nouns, then plug them into simple sentences you can reuse.</Lead>
      
      <CardDemo embedded words={["hermana","madre","padre","hermano","abuela","abuelo"]} clueLocale="en" initialClue="Guess the word" />
      
      <h2>Vocabulary</h2>
      <VocabList
        items={[
          { term: "madre", gloss: "mother", termLang: "es" },
          { term: "padre", gloss: "father", termLang: "es" },
          {
            term: "hermana",
            gloss: "sister",
            href: "/learn/spanish/word/hermana/",
            termLang: "es",
          },
          { term: "hermano", gloss: "brother", termLang: "es" },
          { term: "abuela", gloss: "grandmother", termLang: "es" },
          { term: "abuelo", gloss: "grandfather", termLang: "es" },
        ]}
      />
      
      <h2>Example sentences</h2>
      <p>Mi <strong>hermana</strong> vive en Madrid., My sister lives in Madrid.</p>
      <p>Visito a mis <strong>padres</strong> los domingos., I visit my parents on Sundays.</p>
      
      <h2>Audio</h2>
      <p>Hearing each word in a short sentence helps lock in stress and vowel sounds. Listen to native audio where you can, then say the line out loud.</p>
      
      <h2>Practice</h2>
      <p>Review this list in short bursts: cover the English, recall the Spanish, then try writing or spelling the words from memory. <strong>Letters</strong> is built for that kind of quick rehearsal.</p>
      
      <RelatedLinks
      ariaLabel="Related pages"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/phrase/buenos-dias/",
      label: <><em>buenos días</em></>,
      },
      {
      href: "/learn/spanish/travel/restaurants/",
      label: <>Spanish for restaurants (travel)</>,
      },
      {
      href: "/learn/spanish/",
      label: <>Learn Spanish</>,
      },
      {
      href: "/spanish/",
      label: <>Spanish hub</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Letters</strong>, practice these words in quick rounds.</p>
      </ArticleCta>
      <PrintableDownload href="/downloads/learn/spanish/family-vocabulary/cheat-sheet.pdf" />
      
    </ArticlePage>
  );
}
