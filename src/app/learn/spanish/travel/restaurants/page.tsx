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
  title: "Spanish for travel: restaurants",
  description: "Spanish for eating out while traveling: ordering, the bill, dietary needs, and useful restaurant phrases.",
  path: "/learn/spanish/travel/restaurants/",
  locale: "en",
  alternates: {
    en: "/learn/spanish/travel/restaurants/",
  },
  ogType: "article",
  ogImage: "/og/generated/learn-spanish-travel-restaurants.png",
  ogImageAlt: "la cuenta | Letters",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
      <h1>Spanish for travel: restaurants</h1>
      <p className="article-lead">High-utility words and phrases for sitting down, ordering politely, and closing the check.</p>

      <LettersWordInline words={["la cuenta","menú","restaurante","agua con gas","por favor"]} intervalMs={3000} ariaLive="polite" />

      <h2>Vocabulary</h2>
      <ul>
        <li><span lang="es">la cuenta</span> → the bill</li>
        <li><span lang="es">sin gluten</span> → gluten-free</li>
        <li><span lang="es">agua con gas</span> → sparkling water</li>
        <li><span lang="es">restaurante</span> → restaurant</li>
      </ul>
      <h2>Useful phrases</h2>
      <p lang="es">¿Me trae el menú, por favor?</p>
      <p>Could you bring the menu, please?</p>
      <h2>Audio and practice</h2>
      <p>Listen to how questions rise in intonation, then repeat the phrase until it feels automatic. Short daily practice in <strong>Letters</strong> helps you retain the spelling and rhythm.</p>
      <nav className="article-related" aria-label="Related">
        <h2>Related</h2>
        <ul>
          <li><Link href="/guides/best-way-to-learn-spanish-vocabulary-travel/">Best way to learn Spanish vocabulary for travel</Link></li>
          <li><Link href="/learn/spanish/">Learn Spanish overview</Link></li>
          <li><Link href="/spanish/">Spanish hub</Link></li>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
        </ul>
      </nav>
      <DownloadCta label="Download Letters" />
      <p className="article-supplement-pdf">
        <Link href="/downloads/learn/spanish/travel/restaurants/cheat-sheet.pdf" className="article-supplement-pdf__btn" download>Printable PDF</Link>
      </p>
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
