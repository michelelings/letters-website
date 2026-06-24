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

const path = "/weekly/spanish-restaurant-words/";
const pdfPath = "/downloads/weekly/spanish-restaurant-words.pdf";

export const metadata: Metadata = pageMetadata({
  title: "Spanish Restaurant Words: Weekly Trivia Pack",
  description:
    "Download a tiny Spanish restaurant vocabulary pack and play a short word trivia round with Letters.",
  path,
  locale: "en",
  alternates: {
    en: path,
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Spanish restaurant words weekly trivia pack from Letters",
});

export default function Page() {
  return (
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path,
        headline: "Spanish Restaurant Words: Weekly Trivia Pack",
        description:
          "Download a tiny Spanish restaurant vocabulary pack and play a short word trivia round with Letters.",
      }}
      i18nAlternates={{
        en: path,
      }}
      locale="en"
      pageType="article"
      extras={[
        { href: "/", label: "Home" },
        { href: "/guides/", label: "All guides" },
      ]}
    >
      <h1 itemProp="headline">Spanish Restaurant Words: Weekly Trivia Pack</h1>
      <Lead>
        A tiny weekly pack for one real moment: sitting down, ordering, and
        paying at a restaurant in Spanish. Download the one-page PDF, then play
        the words as a short Letters round.
      </Lead>

      <CardDemo
        embedded
        clueLocale="en"
        initialClue="Restaurant word"
        words={["cuenta", "menu", "reserva", "propina", "mesa", "agua"]}
        preferredWord="cuenta"
      />

      <h2>This week&apos;s words</h2>
      <VocabList
        items={[
          { term: "la cuenta", gloss: "the bill or check", termLang: "es" },
          { term: "el menú", gloss: "the menu", termLang: "es" },
          { term: "la reserva", gloss: "the reservation", termLang: "es" },
          { term: "la propina", gloss: "the tip", termLang: "es" },
          { term: "la mesa", gloss: "the table", termLang: "es" },
          { term: "el agua", gloss: "the water", termLang: "es" },
          { term: "el camarero", gloss: "the waiter", termLang: "es" },
          { term: "sin gluten", gloss: "gluten-free", termLang: "es" },
          { term: "quiero", gloss: "I want", termLang: "es" },
          { term: "por favor", gloss: "please", termLang: "es" },
        ]}
      />

      <h2>Download the tiny pack</h2>
      <p>
        The PDF is intentionally small: ten words, ten clues, three useful
        phrases, and a mini cover-the-answers challenge.
      </p>
      <PrintableDownload href={pdfPath}>Download the weekly PDF</PrintableDownload>

      <RelatedLinks
        ariaLabel="Related Spanish practice"
        heading="Related Spanish practice"
        items={[
          {
            href: "/learn/spanish/travel/restaurants/",
            label: <>Spanish for travel: restaurants</>,
          },
          {
            href: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
            label: <>Best way to learn Spanish vocabulary for travel</>,
          },
          {
            href: "/guides/learn-spanish-vocabulary/",
            label: <>Learn Spanish vocabulary</>,
          },
          {
            href: "/learn/spanish/",
            label: <>Learn Spanish overview</>,
          },
        ]}
      />

      <ArticleCta label="Download Letters">
        <p>
          <strong>Want the full game loop?</strong> Letters turns small word
          packs into quick tile rounds, so weekly practice feels finishable.
        </p>
      </ArticleCta>
    </ArticlePage>
  );
}
