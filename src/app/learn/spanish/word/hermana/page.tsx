import type { Metadata } from "next";
import {
  ArticlePage,
  ArticleCta,
  ExampleSentence,
  Lead,
  RelatedLinks,
  Term,
} from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "hermana (sister) in Spanish",
  description: "hermana means sister in Spanish, pronunciation, translation, example sentences, and related words.",
  path: "/learn/spanish/word/hermana/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/word/hermana/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-word-hermana.png",
  ogImageAlt: "hermana | Letters",
});

export default function Page() {
  return (
    <ArticlePage
      articleJsonLd={{
        path: "/learn/spanish/word/hermana/",
        headline: "hermana (sister) in Spanish",
        description: "hermana means sister in Spanish, pronunciation, translation, example sentences, and related words.",
      }}
      i18nAlternates={{
        en: "/learn/spanish/word/hermana/",
      }}

        locale="en"
        pageType="article"
        extras={[
          { href: "/learn/spanish/", label: "Learn Spanish" },
          { href: "/guides/", label: "Guides" },
        ]}
    >
      <h1><Term lang="es">hermana</Term></h1>
      <Lead>Common noun for a female sibling, essential in family conversations and beginner Spanish.</Lead>
      
      <LettersWordInline words={["hermana","hermano","hermanastra","cuñada"]} intervalMs={3200} ariaLive="polite" />
      
      <p><strong>English:</strong> sister (female sibling)</p>
      <p><strong>Pronunciation:</strong> err-MAH-nah (stress on the second syllable)</p>
      
      <h2>Example sentence</h2>
      <ExampleSentence
        source={<>Tengo una hermana menor.</>}
        translation={<>I have a younger sister.</>}
      />
      
      <h2>Related words</h2>
      <ul>
      <li><Term lang="es">hermano</Term> → brother</li>
      <li><Term lang="es">hermanastra</Term> → stepsister</li>
      <li><Term lang="es">cuñada</Term> → sister-in-law</li>
      </ul>
      
      <RelatedLinks
      ariaLabel="Related"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/family-vocabulary/",
      label: <>Family vocabulary</>,
      },
      {
      href: "/guides/learn-spanish-vocabulary/",
      label: <>Learn Spanish vocabulary (guide)</>,
      },
      {
      href: "/translate/spanish-to-dutch/hermana/",
      label: <><Term lang="es">hermana</Term> in Dutch</>,
      },
      {
      href: "/translate/spanish-to-english/hermana/",
      label: <><Term lang="es">hermana</Term> in English</>,
      },
      {
      href: "/spanish/",
      label: <>Spanish hub</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p>Drill spelling and recall with <strong>Letters</strong>.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
