import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks, Term } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hoe zeg je zus in het Spaans?",
  description: "Hoe zeg je zus in het Spaans? Het Spaanse woord is hermana, uitleg en voorbeelden.",
  path: "/hoe-zeg-je/zus-in-het-spaans/",
  locale: "nl",
  alternates: {
    en: "/how-to-say/sister-in-spanish/",
    nl: "/hoe-zeg-je/zus-in-het-spaans/",
  },
  ogType: "article",
  ogImage: "/og/generated/hoe-zeg-je-zus-in-het-spaans.png",
  ogImageAlt: "zus | Letters",
});

export default function Page() {
  return (
    <ArticlePage
      articleJsonLd={{
        path: "/hoe-zeg-je/zus-in-het-spaans/",
        headline: "Hoe zeg je zus in het Spaans?",
        description: "Hoe zeg je zus in het Spaans? Het Spaanse woord is hermana, uitleg en voorbeelden.",
      }}
      i18nAlternates={{
        en: "/how-to-say/sister-in-spanish/",
        nl: "/hoe-zeg-je/zus-in-het-spaans/",
      }}

        locale="nl"
        pageType="article"
    >
      <h1>Hoe zeg je <Term lang="nl">zus</Term> in het Spaans?</h1>
      <Lead><strong>Antwoord:</strong> <Term lang="es">hermana</Term>. Voor “broer” gebruik je <Term lang="es">hermano</Term>.</Lead>
      
      <LettersWordInline words={["zus","hermana","broer","hermano"]} intervalMs={3000} ariaLive="polite" />
      
      <RelatedLinks
      ariaLabel="Gerelateerd"
      heading="Gerelateerd"
      items={[
      {
      href: "/translate/spanish-to-dutch/hermana/",
      label: <><Term lang="es">hermana</Term> in het Nederlands</>,
      },
      {
      href: "/how-to-say/sister-in-spanish/",
      label: <>How to say sister in Spanish (English)</>,
      linkProps: { hrefLang: "en" },
      },
      {
      href: "/learn/spanish/word/hermana/",
      label: <>Woord: <Term lang="es">hermana</Term></>,
      }
      ]}
      />
      <ArticleCta label="Download Letters"  />
      
    </ArticlePage>
  );
}
