import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks, Term } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "hermana in English (sister)",
  description: "Spanish hermana in English is sister, meaning and links to learn more.",
  path: "/translate/spanish-to-english/hermana/",
  locale: "en",
  alternates: {
    en: "/translate/spanish-to-english/hermana/",
  },
  ogType: "article",
  ogImage: "/og/generated/translate-spanish-to-english-hermana.png",
  ogImageAlt: "hermana | Letters",
});

export default function Page() {
  return (
    <ArticlePage
      articleJsonLd={{
        path: "/translate/spanish-to-english/hermana/",
        headline: "hermana in English (sister)",
        description: "Spanish hermana in English is sister, meaning and links to learn more.",
      }}
      i18nAlternates={{
        en: "/translate/spanish-to-english/hermana/",
      }}

        locale="en"
        pageType="article"
        extras={[
          { href: "/spanish/", label: "Spanish hub" },
        ]}
    >
      <h1><Term lang="es">hermana</Term> in English</h1>
      <Lead><strong><Term lang="es">hermana</Term></strong> means <strong>sister</strong>, a female sibling.</Lead>
      
      <LettersWordInline words={["hermana","sister","hermano","brother"]} intervalMs={3000} ariaLive="polite" />
      
      <RelatedLinks
      ariaLabel="Related"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/word/hermana/",
      label: <><Term lang="es">hermana</Term>, full word entry</>,
      },
      {
      href: "/learn/spanish/family-vocabulary/",
      label: <>Family vocabulary</>,
      }
      ]}
      />
      <ArticleCta label="Download Letters"  />
      
    </ArticlePage>
  );
}
