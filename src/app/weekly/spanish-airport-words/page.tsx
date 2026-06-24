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

const path = "/weekly/spanish-airport-words/";
const pdfPath = "/downloads/weekly/spanish-airport-words.pdf";

export const metadata: Metadata = pageMetadata({
  title: "Spanish Airport Words: Weekly Trivia Pack",
  description:
    "Download a tiny Spanish airport vocabulary pack and play a short word trivia round with Letters.",
  path,
  locale: "en",
  alternates: {
    en: path,
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Spanish airport words weekly trivia pack from Letters",
});

export default function Page() {
  return (
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path,
        headline: "Spanish Airport Words: Weekly Trivia Pack",
        description:
          "Download a tiny Spanish airport vocabulary pack and play a short word trivia round with Letters.",
      }}
      i18nAlternates={{
        en: path,
      }}
      locale="en"
      pageType="article"
      extras={[
        { href: "/weekly/", label: "Weekly packs" },
        { href: "/guides/", label: "All guides" },
      ]}
    >
      <h1 itemProp="headline">Spanish Airport Words: Weekly Trivia Pack</h1>
      <Lead>
        A tiny weekly pack for the airport: tickets, gates, luggage, delays,
        and the words you want ready before the boarding screen changes.
      </Lead>

      <CardDemo
        embedded
        clueLocale="en"
        initialClue="Airport word"
        words={["vuelo", "puerta", "boleto", "maleta", "salida", "taxi"]}
        preferredWord="vuelo"
      />

      <h2>This week&apos;s words</h2>
      <VocabList
        items={[
          { term: "el vuelo", gloss: "the flight", termLang: "es" },
          { term: "la puerta", gloss: "the gate", termLang: "es" },
          { term: "el boleto", gloss: "the ticket", termLang: "es" },
          { term: "la maleta", gloss: "the suitcase", termLang: "es" },
          { term: "la salida", gloss: "the departure or exit", termLang: "es" },
          { term: "el taxi", gloss: "the taxi", termLang: "es" },
          { term: "el equipaje", gloss: "the luggage", termLang: "es" },
          { term: "el retraso", gloss: "the delay", termLang: "es" },
          { term: "el asiento", gloss: "the seat", termLang: "es" },
          { term: "embarcar", gloss: "to board", termLang: "es" },
        ]}
      />

      <h2>Download the tiny pack</h2>
      <p>
        One page, ten words, three airport phrases, and a mini recall challenge
        for your next travel day.
      </p>
      <PrintableDownload href={pdfPath}>Download the weekly PDF</PrintableDownload>

      <RelatedLinks
        ariaLabel="Spanish Travel Season 1"
        heading="Spanish Travel Season 1"
        items={[
          {
            href: "/weekly/spanish-restaurant-words/",
            label: <>Spanish restaurant words</>,
          },
          {
            href: "/weekly/spanish-hotel-words/",
            label: <>Spanish hotel words</>,
          },
          {
            href: "/weekly/spanish-directions-words/",
            label: <>Spanish directions words</>,
          },
          {
            href: "/weekly/",
            label: <>All weekly packs</>,
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
