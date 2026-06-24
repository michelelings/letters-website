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

const path = "/weekly/spanish-directions-words/";
const pdfPath = "/downloads/weekly/spanish-directions-words.pdf";

export const metadata: Metadata = pageMetadata({
  title: "Spanish Directions Words: Weekly Trivia Pack",
  description:
    "Download a tiny Spanish directions vocabulary pack and play a short word trivia round with Letters.",
  path,
  locale: "en",
  alternates: {
    en: path,
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Spanish directions words weekly trivia pack from Letters",
});

export default function Page() {
  return (
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path,
        headline: "Spanish Directions Words: Weekly Trivia Pack",
        description:
          "Download a tiny Spanish directions vocabulary pack and play a short word trivia round with Letters.",
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
      <h1 itemProp="headline">Spanish Directions Words: Weekly Trivia Pack</h1>
      <Lead>
        A tiny weekly pack for finding your way: left, right, nearby, street,
        station, and the simple words that make directions less stressful.
      </Lead>

      <CardDemo
        embedded
        clueLocale="en"
        initialClue="Directions word"
        words={["calle", "cerca", "lejos", "izquierda", "derecha", "estacion"]}
        preferredWord="calle"
      />

      <h2>This week&apos;s words</h2>
      <VocabList
        items={[
          { term: "la calle", gloss: "the street", termLang: "es" },
          { term: "cerca", gloss: "nearby", termLang: "es" },
          { term: "lejos", gloss: "far away", termLang: "es" },
          { term: "la izquierda", gloss: "the left", termLang: "es" },
          { term: "la derecha", gloss: "the right", termLang: "es" },
          { term: "la estación", gloss: "the station", termLang: "es" },
          { term: "el mapa", gloss: "the map", termLang: "es" },
          { term: "la esquina", gloss: "the corner", termLang: "es" },
          { term: "recto", gloss: "straight ahead", termLang: "es" },
          { term: "girar", gloss: "to turn", termLang: "es" },
        ]}
      />

      <h2>Download the tiny pack</h2>
      <p>
        One page, ten words, three directions phrases, and a mini recall
        challenge for the next time you need to ask where something is.
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
            href: "/weekly/spanish-airport-words/",
            label: <>Spanish airport words</>,
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
