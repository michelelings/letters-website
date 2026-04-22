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
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1><span lang="es">hermana</span> in English</h1>
      <p className="article-lead"><strong><span lang="es">hermana</span></strong> means <strong>sister</strong>, a female sibling.</p>

      <LettersWordInline words={["hermana","sister","hermano","brother"]} intervalMs={3000} ariaLive="polite" />

      <nav className="article-related" aria-label="Related">
        <h2>Related</h2>
        <ul>
          <li><Link href="/learn/spanish/word/hermana/"><span lang="es">hermana</span>, full word entry</Link></li>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
        </ul>
      </nav>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[
          { href: "/spanish/", label: "Spanish hub" },
        ]}
      />
    </>
  );
}
