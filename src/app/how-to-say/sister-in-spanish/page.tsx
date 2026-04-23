import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks, Term } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to say “sister” in Spanish",
  description: "Sister in Spanish is hermana, when to use it, pronunciation, and related words.",
  path: "/how-to-say/sister-in-spanish/",
  locale: "en",
  alternates: {
    en: "/how-to-say/sister-in-spanish/",
    nl: "/hoe-zeg-je/zus-in-het-spaans/",
    de: "/wie-sagt-man/schwester-auf-spanisch/",
  },
  ogType: "article",
  ogImage: "/og/generated/how-to-say-sister-in-spanish.png",
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
      <h1>How to say “sister” in Spanish</h1>
      <Lead>Use <strong><Term lang="es">hermana</Term></strong> for a female sibling. For a brother, say <strong><Term lang="es">hermano</Term></strong>.</Lead>
      
      <LettersWordInline words={["hermana","hermano","familia","prima"]} intervalMs={3000} ariaLive="polite" />
      
      <RelatedLinks
      ariaLabel="Related"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/word/hermana/",
      label: <><Term lang="es">hermana</Term>, word page</>,
      },
      {
      href: "/translate/spanish-to-dutch/hermana/",
      label: <><Term lang="es">hermana</Term> in Dutch</>,
      },
      {
      href: "/learn/spanish/family-vocabulary/",
      label: <>Family vocabulary</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p>Practice with <strong>Letters</strong>.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
