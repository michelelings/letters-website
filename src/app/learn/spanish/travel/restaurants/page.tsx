import type { Metadata } from "next";
import {
  ArticlePage,
  ArticleCta,
  Lead,
  PrintableDownload,
  RelatedLinks,
  VocabList,
} from "@/components/article";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Spanish for travel: restaurants",
  description: "Spanish for eating out while traveling: ordering, the bill, dietary needs, and useful restaurant phrases.",
  path: "/learn/spanish/travel/restaurants/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/travel/restaurants/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-travel-restaurants.png",
  ogImageAlt: "la cuenta | Letters",
});

export default function Page() {
  return (
    <ArticlePage
      articleJsonLd={{
        path: "/learn/spanish/travel/restaurants/",
        headline: "Spanish for travel: restaurants",
        description: "Spanish for eating out while traveling: ordering, the bill, dietary needs, and useful restaurant phrases.",
      }}
      i18nAlternates={{
        en: "/learn/spanish/travel/restaurants/",
      }}
        locale="en"
        pageType="article"
        extras={[
          { href: "/learn/spanish/", label: "Learn Spanish" },
          { href: "/guides/", label: "Guides" },
        ]}
    >
      <h1>Spanish for travel: restaurants</h1>
      <Lead>High-utility words and phrases for sitting down, ordering politely, and closing the check.</Lead>
      
      <LettersWordInline words={["la cuenta","menú","restaurante","agua con gas","por favor"]} intervalMs={3000} ariaLive="polite" />
      
      <h2>Vocabulary</h2>
      <VocabList
        items={[
          { term: "la cuenta", gloss: "the bill", termLang: "es" },
          { term: "sin gluten", gloss: "gluten-free", termLang: "es" },
          { term: "agua con gas", gloss: "sparkling water", termLang: "es" },
          { term: "restaurante", gloss: "restaurant", termLang: "es" },
        ]}
      />
      <h2>Useful phrases</h2>
      <p lang="es">¿Me trae el menú, por favor?</p>
      <p>Could you bring the menu, please?</p>
      <h2>Audio and practice</h2>
      <p>Listen to how questions rise in intonation, then repeat the phrase until it feels automatic. Short daily practice in <strong>Letters</strong> helps you retain the spelling and rhythm.</p>
      <RelatedLinks
      ariaLabel="Related"
      heading="Related"
      items={[
      {
      href: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
      label: <>Best way to learn Spanish vocabulary for travel</>,
      },
      {
      href: "/learn/spanish/",
      label: <>Learn Spanish overview</>,
      },
      {
      href: "/spanish/",
      label: <>Spanish hub</>,
      },
      {
      href: "/learn/spanish/family-vocabulary/",
      label: <>Family vocabulary</>,
      }
      ]}
      />
      <ArticleCta label="Download Letters" />
      <PrintableDownload href="/downloads/learn/spanish/travel/restaurants/cheat-sheet.pdf" />
      
    </ArticlePage>
  );
}
