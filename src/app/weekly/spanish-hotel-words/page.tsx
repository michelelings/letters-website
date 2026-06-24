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

const path = "/weekly/spanish-hotel-words/";
const pdfPath = "/downloads/weekly/spanish-hotel-words.pdf";

export const metadata: Metadata = pageMetadata({
  title: "Spanish Hotel Words: Weekly Trivia Pack",
  description:
    "Download a tiny Spanish hotel vocabulary pack and play a short word trivia round with Letters.",
  path,
  locale: "en",
  alternates: {
    en: path,
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Spanish hotel words weekly trivia pack from Letters",
});

export default function Page() {
  return (
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path,
        headline: "Spanish Hotel Words: Weekly Trivia Pack",
        description:
          "Download a tiny Spanish hotel vocabulary pack and play a short word trivia round with Letters.",
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
      <h1 itemProp="headline">Spanish Hotel Words: Weekly Trivia Pack</h1>
      <Lead>
        A tiny weekly pack for checking in, asking for help, and handling the
        everyday hotel words that make a trip smoother.
      </Lead>

      <CardDemo
        embedded
        clueLocale="en"
        initialClue="Hotel word"
        words={["hotel", "llave", "cuarto", "cama", "ducha", "recepcion"]}
        preferredWord="hotel"
      />

      <h2>This week&apos;s words</h2>
      <VocabList
        items={[
          { term: "el hotel", gloss: "the hotel", termLang: "es" },
          { term: "la llave", gloss: "the key", termLang: "es" },
          { term: "el cuarto", gloss: "the room", termLang: "es" },
          { term: "la cama", gloss: "the bed", termLang: "es" },
          { term: "la ducha", gloss: "the shower", termLang: "es" },
          { term: "la recepción", gloss: "reception", termLang: "es" },
          { term: "la reserva", gloss: "the reservation", termLang: "es" },
          { term: "el ascensor", gloss: "the elevator", termLang: "es" },
          { term: "el pasaporte", gloss: "the passport", termLang: "es" },
          { term: "la salida", gloss: "checkout or exit", termLang: "es" },
        ]}
      />

      <h2>Download the tiny pack</h2>
      <p>
        One page, ten words, three hotel phrases, and a mini recall challenge
        for the next time you check in.
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
            href: "/weekly/spanish-airport-words/",
            label: <>Spanish airport words</>,
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
