import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { LettersWordInline } from "@/components/LettersWord";
import { DownloadCta } from "@/components/DownloadCta";
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
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1>Mexican Spanish slang</h1>
      <p className="article-lead">Mexico has its own rhythm of informal Spanish. These items are common with friends and peers, not in a job interview. Pair them with neutral Spanish you already know so you pick the right register.</p>

      <LettersWordInline words={["chido","güey","neta","qué onda","mande","ahorita"]} intervalMs={3000} ariaLive="polite" />

      <h2>Words and short phrases</h2>
      <ul>
        <li><span lang="es">chido</span> → cool, great</li>
        <li><span lang="es">güey</span> (also <span lang="es">wey</span>) → dude, mate (very informal; can sound rude if you overuse it with strangers)</li>
        <li><span lang="es">neta</span> → really?, for real (as question or emphasis)</li>
        <li><span lang="es">qué onda</span> → what’s up, how’s it going</li>
        <li><span lang="es">mande</span> → sorry?, come again? (polite when you did not catch what someone said)</li>
        <li><span lang="es">ahorita</span> → in a little while, soon (often softer than “right now”; locals may use it loosely)</li>
      </ul>

      <h2>Example lines</h2>
      <p lang="es">¿Qué onda, güey? Todo chido.</p>
      <p>What’s up? All good.</p>
      <p lang="es">¿Neta que ya llegaron?</p>
      <p>Did they really get here already?</p>

      <h2>Audio and practice</h2>
      <p>Slang lands better when you hear the intonation. Listen to short clips or friends from Mexico, then repeat at a natural speed. In <strong>Letters</strong>, short spelling rounds help you fix the letters for words you already say out loud.</p>

      <nav className="article-related" aria-label="Related pages">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/costa-rica/slang/">Costa Rican Spanish slang</Link></li>
          <li><Link href="/learn/spanish/travel/restaurants/">Spanish for restaurants (travel)</Link></li>
          <li><Link href="/learn/spanish/phrase/buenos-dias/"><em>buenos días</em></Link></li>
          <li><Link href="/learn/spanish/">Learn Spanish</Link></li>
          <li><Link href="/spanish/">Spanish hub</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Letters</strong> helps you rehearse spelling and recall in short sessions.</p>
      </div>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[
          { href: "/learn/spanish/", label: "Learn Spanish" },
          { href: "/guides/", label: "Guides" },
        ]}
      />
    </>
  );
}
