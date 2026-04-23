import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks, Term } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "hermana in Dutch (zus)",
  description: "Spanish hermana in Dutch is zus, meaning, pronunciation, and example sentences.",
  path: "/translate/spanish-to-dutch/hermana/",
  locale: "en",
  alternates: {
    en: "/translate/spanish-to-dutch/hermana/",
    nl: "/hoe-zeg-je/zus-in-het-spaans/",
  },
  ogType: "article",
  ogImage: "/og/generated/translate-spanish-to-dutch-hermana.png",
  ogImageAlt: "hermana | Letters",
});

export default function Page() {
  return (
    <ArticlePage

        locale="en"
        pageType="article"
        extras={[
          { href: "/spanish/", label: "Spanish hub" },
          { href: "/guides/", label: "Guides" },
        ]}
    >
      <h1><Term lang="es">hermana</Term> in Dutch</h1>
      <Lead><strong><Term lang="es">hermana</Term></strong> is <strong><Term lang="nl">zus</Term></strong> in Dutch, the everyday word for a sister.</Lead>
      
      <LettersWordInline words={["hermana","zus","hermano","broer"]} intervalMs={3000} ariaLive="polite" />
      
      <h2>Pronunciation</h2>
      <p><Term lang="nl">Zus</Term> sounds like “zuss” (rhymes loosely with English “bus”).</p>
      
      <h2>Example sentence</h2>
      <p lang="es">Mi hermana estudia medicina.</p>
      <p lang="nl">Mijn zus studeert geneeskunde.</p>
      <p>My sister studies medicine.</p>
      
      <RelatedLinks
      ariaLabel="Related"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/word/hermana/",
      label: <><Term lang="es">hermana</Term>, learn the Spanish word</>,
      },
      {
      href: "/learn/spanish/family-vocabulary/",
      label: <>Family vocabulary</>,
      },
      {
      href: "/how-to-say/sister-in-spanish/",
      label: <>How to say “sister” in Spanish</>,
      },
      {
      href: "/hoe-zeg-je/zus-in-het-spaans/",
      label: <>Hoe zeg je zus in het Spaans?</>,
      linkProps: { hrefLang: "nl" },
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p>Build vocabulary with <strong>Letters</strong>.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
