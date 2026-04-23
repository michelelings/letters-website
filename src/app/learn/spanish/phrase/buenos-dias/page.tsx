import type { Metadata } from "next";
import {
  ArticlePage,
  ArticleCta,
  Lead,
  PrintableDownload,
  RelatedLinks,
  Term,
} from "@/components/article";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "buenos días (good morning)",
  description: "buenos días means good morning in Spanish, when to use it and what to say later in the day.",
  path: "/learn/spanish/phrase/buenos-dias/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/phrase/buenos-dias/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-phrase-buenos-dias.png",
  ogImageAlt: "buenos días | Letters",
});

export default function Page() {
  return (
    <ArticlePage

        locale="en"
        pageType="article"
    >
      <h1 lang="es">buenos días</h1>
      <Lead><strong>English:</strong> good morning, the standard greeting from morning through much of the day in many Spanish-speaking regions.</Lead>
      
      <LettersWordInline words={["buenos días","buenas tardes","buenas noches","hola"]} intervalMs={3200} ariaLive="polite" />
      
      <p>Later, switch to <Term lang="es">buenas tardes</Term> (afternoon) and <Term lang="es">buenas noches</Term> (evening or night). Exact timing varies by country and habit.</p>
      <RelatedLinks
      ariaLabel="Related"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/family-vocabulary/",
      label: <>Family vocabulary</>,
      },
      {
      href: "/learn/spanish/",
      label: <>Learn Spanish</>,
      }
      ]}
      />
      <ArticleCta label="Download Letters"  />
      <PrintableDownload href="/downloads/learn/spanish/phrase/buenos-dias/cheat-sheet.pdf" />
      
    </ArticlePage>
  );
}
