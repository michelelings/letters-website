import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks, Term } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wie sagt man Schwester auf Spanisch?",
  description: "Wie sagt man Schwester auf Spanisch? Das spanische Wort ist hermana, Bedeutung und Beispiele.",
  path: "/wie-sagt-man/schwester-auf-spanisch/",
  locale: "de",
  alternates: {
    en: "/how-to-say/sister-in-spanish/",
    de: "/wie-sagt-man/schwester-auf-spanisch/",
  },
  ogType: "article",
  ogImage: "/og/generated/wie-sagt-man-schwester-auf-spanisch.png",
  ogImageAlt: "Schwester | Letters",
});

export default function Page() {
  return (
    <ArticlePage

        locale="de"
        pageType="article"
    >
      <h1>Wie sagt man <Term lang="de">Schwester</Term> auf Spanisch?</h1>
      <Lead><strong>Antwort:</strong> <Term lang="es">hermana</Term>. Für „Bruder“ heißt es <Term lang="es">hermano</Term>.</Lead>
      
      <LettersWordInline words={["Schwester","hermana","Bruder","hermano"]} intervalMs={3000} ariaLive="polite" />
      
      <RelatedLinks
      ariaLabel="Verwandt"
      heading="Verwandt"
      items={[
      {
      href: "/how-to-say/sister-in-spanish/",
      label: <>How to say sister in Spanish (English)</>,
      linkProps: { hrefLang: "en" },
      },
      {
      href: "/learn/spanish/word/hermana/",
      label: <>Wort: <Term lang="es">hermana</Term></>,
      }
      ]}
      />
      <ArticleCta label="Download Letters"  />
      
    </ArticlePage>
  );
}
