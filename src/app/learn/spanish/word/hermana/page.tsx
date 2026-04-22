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
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1><span lang="es">hermana</span></h1>
      <p className="article-lead">Common noun for a female sibling, essential in family conversations and beginner Spanish.</p>

      <LettersWordInline words={["hermana","hermano","hermanastra","cuñada"]} intervalMs={3200} ariaLive="polite" />

      <p><strong>English:</strong> sister (female sibling)</p>
      <p><strong>Pronunciation:</strong> err-MAH-nah (stress on the second syllable)</p>

      <h2>Example sentence</h2>
      <p lang="es">Tengo una hermana menor.</p>
      <p>I have a younger sister.</p>

      <h2>Related words</h2>
      <ul>
        <li><span lang="es">hermano</span> → brother</li>
        <li><span lang="es">hermanastra</span> → stepsister</li>
        <li><span lang="es">cuñada</span> → sister-in-law</li>
      </ul>

      <nav className="article-related" aria-label="Related">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
          <li><Link href="/guides/learn-spanish-vocabulary/">Learn Spanish vocabulary (guide)</Link></li>
          <li><Link href="/translate/spanish-to-dutch/hermana/"><span lang="es">hermana</span> in Dutch</Link></li>
          <li><Link href="/translate/spanish-to-english/hermana/"><span lang="es">hermana</span> in English</Link></li>
          <li><Link href="/spanish/">Spanish hub</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p>Drill spelling and recall with <strong>Letters</strong>.</p>
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
