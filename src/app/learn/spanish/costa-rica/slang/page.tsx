import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks, Term } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Costa Rican Spanish slang",
  description: "Common Costa Rican Spanish slang: pura vida, mae, tuanis, tico, and more, with meanings, register, and example lines.",
  path: "/learn/spanish/costa-rica/slang/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/costa-rica/slang/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-costa-rica-slang.png",
  ogImageAlt: "pura vida | Letters",
});

export default function Page() {
  return (
    <ArticlePage

        locale="en"
        pageType="article"
        extras={[
          { href: "/learn/spanish/", label: "Learn Spanish" },
          { href: "/guides/", label: "Guides" },
        ]}
    >
      <h1>Costa Rican Spanish slang</h1>
      <Lead>Costa Ricans often call themselves <Term lang="es">ticos</Term> and <Term lang="es">ticas</Term>. Everyday speech is warm and informal with friends. Save the boldest slang for people you know; neutral Spanish still works everywhere.</Lead>
      
      <LettersWordInline words={["pura vida","mae","tuanis","diay","tico","qué chiva"]} intervalMs={3000} ariaLive="polite" />
      
      <h2>Words and short phrases</h2>
      <ul>
      <li><Term lang="es">pura vida</Term> → all good, hi, thanks, take care (multipurpose; tone matters more than a literal translation)</li>
      <li><Term lang="es">mae</Term> → dude, mate, buddy (very common among peers; short for <Term lang="es">maje</Term>)</li>
      <li><Term lang="es">tico</Term> / <Term lang="es">tica</Term> → Costa Rican man / woman (nickname from loving diminutives like <Term lang="es">momentico</Term>)</li>
      <li><Term lang="es">tuanis</Term> → cool, great, nice</li>
      <li><Term lang="es">diay</Term> → well, so, hey (filler when you think or change topic; spelling varies)</li>
      <li><Term lang="es">qué chiva</Term> → how cool, that's awesome</li>
      </ul>
      
      <h2>Example lines</h2>
      <p lang="es">Mae, eso estuvo tuanis. ¡Pura vida!</p>
      <p>Dude, that was great. Nice one / all good!</p>
      <p lang="es">Diay, qué chiva que vinieron.</p>
      <p>Well, it's so cool you came.</p>
      
      <h2>Audio and practice</h2>
      <p>Tico Spanish is melodic and relaxed. Listen for how <Term lang="es">mae</Term> and <Term lang="es">pura vida</Term> show up in real chats, then imitate the pace, not just the words. <strong>Letters</strong> is a good place to lock in spelling once your ear knows the sound.</p>
      
      <RelatedLinks
      ariaLabel="Related pages"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/mexico/slang/",
      label: <>Mexican Spanish slang</>,
      },
      {
      href: "/learn/spanish/travel/restaurants/",
      label: <>Spanish for restaurants (travel)</>,
      },
      {
      href: "/learn/spanish/phrase/buenos-dias/",
      label: <><em>buenos días</em></>,
      },
      {
      href: "/learn/spanish/",
      label: <>Learn Spanish</>,
      },
      {
      href: "/spanish/",
      label: <>Spanish hub</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Letters</strong> helps you rehearse spelling and recall in short sessions.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
