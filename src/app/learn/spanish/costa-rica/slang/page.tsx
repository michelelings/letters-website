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
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1>Costa Rican Spanish slang</h1>
      <p className="article-lead">Costa Ricans often call themselves <span lang="es">ticos</span> and <span lang="es">ticas</span>. Everyday speech is warm and informal with friends. Save the boldest slang for people you know; neutral Spanish still works everywhere.</p>

      <LettersWordInline words={["pura vida","mae","tuanis","diay","tico","qué chiva"]} intervalMs={3000} ariaLive="polite" />

      <h2>Words and short phrases</h2>
      <ul>
        <li><span lang="es">pura vida</span> → all good, hi, thanks, take care (multipurpose; tone matters more than a literal translation)</li>
        <li><span lang="es">mae</span> → dude, mate, buddy (very common among peers; short for <span lang="es">maje</span>)</li>
        <li><span lang="es">tico</span> / <span lang="es">tica</span> → Costa Rican man / woman (nickname from loving diminutives like <span lang="es">momentico</span>)</li>
        <li><span lang="es">tuanis</span> → cool, great, nice</li>
        <li><span lang="es">diay</span> → well, so, hey (filler when you think or change topic; spelling varies)</li>
        <li><span lang="es">qué chiva</span> → how cool, that's awesome</li>
      </ul>

      <h2>Example lines</h2>
      <p lang="es">Mae, eso estuvo tuanis. ¡Pura vida!</p>
      <p>Dude, that was great. Nice one / all good!</p>
      <p lang="es">Diay, qué chiva que vinieron.</p>
      <p>Well, it's so cool you came.</p>

      <h2>Audio and practice</h2>
      <p>Tico Spanish is melodic and relaxed. Listen for how <span lang="es">mae</span> and <span lang="es">pura vida</span> show up in real chats, then imitate the pace, not just the words. <strong>Letters</strong> is a good place to lock in spelling once your ear knows the sound.</p>

      <nav className="article-related" aria-label="Related pages">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/mexico/slang/">Mexican Spanish slang</Link></li>
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
