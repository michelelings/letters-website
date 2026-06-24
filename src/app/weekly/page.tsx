import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks } from "@/components/article";
import { pageMetadata } from "@/lib/seo";

const path = "/weekly/";

export const metadata: Metadata = pageMetadata({
  title: "Weekly Vocabulary Packs",
  description:
    "Tiny downloadable vocabulary packs from Letters: one travel theme, one PDF, and one playable word trivia round each week.",
  path,
  locale: "en",
  alternates: {
    en: path,
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Letters weekly vocabulary packs",
});

export default function Page() {
  return (
    <ArticlePage
      schemaArticle
      articleJsonLd={{
        path,
        headline: "Weekly Vocabulary Packs",
        description:
          "Tiny downloadable vocabulary packs from Letters: one travel theme, one PDF, and one playable word trivia round each week.",
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
      <h1 itemProp="headline">Weekly Vocabulary Packs</h1>
      <Lead>
        A tiny vocabulary pack every week: ten useful words, one printable PDF,
        and a short Letters round you can play online. Small enough to finish,
        specific enough to remember.
      </Lead>

      <h2>Spanish Travel Season 1</h2>
      <p>
        The first season is for travel Spanish: restaurants, hotels, airports,
        and directions. Each pack covers one moment you can picture yourself
        using on a trip.
      </p>

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
            href: "/weekly/spanish-directions-words/",
            label: <>Spanish directions words</>,
          },
        ]}
      />

      <RelatedLinks
        ariaLabel="Related guides"
        heading="Related guides"
        items={[
          {
            href: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
            label: <>Best way to learn Spanish vocabulary for travel</>,
          },
          {
            href: "/guides/learn-spanish-vocabulary/",
            label: <>Learn Spanish vocabulary</>,
          },
          {
            href: "/learn/spanish/travel/restaurants/",
            label: <>Spanish for travel: restaurants</>,
          },
          {
            href: "/learn/spanish/",
            label: <>Learn Spanish overview</>,
          },
        ]}
      />

      <ArticleCta label="Download Letters">
        <p>
          <strong>Want the packs as play?</strong> Letters turns small word
          lists into tactile rounds, so weekly practice does not feel like
          homework.
        </p>
      </ArticleCta>
    </ArticlePage>
  );
}
