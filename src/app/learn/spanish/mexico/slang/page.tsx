import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks, Term } from "@/components/article";
import Link from "next/link";
import { LettersWordInline } from "@/components/LettersWord";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mexican Spanish slang",
  description: "Common Mexican Spanish slang: chido, güey, qué onda, neta, and more, with meanings, register, and example lines.",
  path: "/learn/spanish/mexico/slang/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/mexico/slang/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-mexico-slang.png",
  ogImageAlt: "chido | Letters",
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
      <h1>Mexican Spanish slang</h1>
      <Lead>Mexico has its own rhythm of informal Spanish. These items are common with friends and peers, not in a job interview. Pair them with neutral Spanish you already know so you pick the right register.</Lead>
      
      <LettersWordInline words={["chido","güey","neta","qué onda","mande","ahorita"]} intervalMs={3000} ariaLive="polite" />
      
      <h2>Words and short phrases</h2>
      <ul>
      <li><Term lang="es">chido</Term> → cool, great</li>
      <li><Term lang="es">güey</Term> (also <Term lang="es">wey</Term>) → dude, mate (very informal; can sound rude if you overuse it with strangers)</li>
      <li><Term lang="es">neta</Term> → really?, for real (as question or emphasis)</li>
      <li><Term lang="es">qué onda</Term> → what’s up, how’s it going</li>
      <li><Term lang="es">mande</Term> → sorry?, come again? (polite when you did not catch what someone said)</li>
      <li><Term lang="es">ahorita</Term> → in a little while, soon (often softer than “right now”; locals may use it loosely)</li>
      </ul>
      
      <h2>Example lines</h2>
      <p lang="es">¿Qué onda, güey? Todo chido.</p>
      <p>What’s up? All good.</p>
      <p lang="es">¿Neta que ya llegaron?</p>
      <p>Did they really get here already?</p>
      
      <h2>Audio and practice</h2>
      <p>Slang lands better when you hear the intonation. Listen to short clips or friends from Mexico, then repeat at a natural speed. In <strong>Letters</strong>, short spelling rounds help you fix the letters for words you already say out loud.</p>
      
      <RelatedLinks
      ariaLabel="Related pages"
      heading="Related"
      items={[
      {
      href: "/learn/spanish/costa-rica/slang/",
      label: <>Costa Rican Spanish slang</>,
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
