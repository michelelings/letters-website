import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Learn Chinese Vocabulary (The Fun Way)",
  description: "How to learn Chinese vocabulary the fun way: pinyin and tones, themed words, characters on your schedule, and recall that feels like play, from Letters.",
  path: "/guides/how-to-learn-chinese-vocabulary/",
  locale: "en",
  alternates: {
    en: "/guides/how-to-learn-chinese-vocabulary/",
    es: "/es/guides/como-aprender-vocabulario-chino/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Letters: word game from Ocho",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
      <h1 itemProp="headline">How to Learn Chinese Vocabulary (The Fun Way)</h1>
      <p className="article-lead" itemProp="description"><strong>How to learn Chinese vocabulary</strong> without turning every session into rote repetition? Treat <strong>pinyin spelling and tone awareness</strong> as the spine, learn <strong>themed spoken chunks</strong> you will reuse, and add <strong>characters</strong> gradually, while keeping recall playful enough to return tomorrow.</p>

      <h2>Stabilize pinyin early (tones included)</h2>
      <p>Until reading pinyin with correct tone feels automatic, every new word fights you twice: sound and meaning. Short listening-and-repeat bursts beat marathon copying.</p>

      <h2>Themed vocab beats random frequency dumps</h2>
      <p>Food, transport, social phrases, finish one cluster before chasing the next. Context gives you grammar “for free” in the form of collocations you hear repeatedly.</p>

      <h2>Delay character heroics (but not forever)</h2>
      <p>It is valid to speak from pinyin first while you build motivation. Pick a schedule for characters, even two a day, so literacy climbs alongside oral vocabulary.</p>

      <h2>Production every session</h2>
      <p>Say the word, spell the syllables, shadow a short line. Recognition-heavy apps alone can leave a gap when you need to speak or type.</p>

      <h2>Link Chinese to Japanese if you study both</h2>
      <p>Shared characters (with different readings) can reinforce visual memory when you separate pronunciation carefully.</p>

      <h2>Letters and Chinese</h2>
      <p><strong>Letters</strong> suits learners who want tactile spelling practice near the pinyin layer, short rounds that still feel like a word game.</p>

      <h2>Summary</h2>
      <p>Pinyin and tones first, themed depth second, characters on a steady third track, production always. Fun is optional in theory, in practice it is how casual learners keep studying Chinese past week two.</p>

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/learn-chinese-vocabulary/">Learn Chinese vocabulary (hub)</Link></li>
          <li><Link href="/guides/learn-japanese-vocabulary/">Learn Japanese vocabulary</Link></li>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/games-to-learn-vocabulary/">Games to learn vocabulary</Link></li>
          <li><Link href="/guides/">All guides</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Try Letters</strong>: a word puzzle game from Ocho. Short sessions, tactile tiles, built for learners who want play before pressure.</p>
      </div>
      <DownloadCta label="Download Letters" />
    </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[
          { href: "/", label: "Home" },
          { href: "/guides/", label: "All guides" },
        ]}
        langs={[
          { href: "/guides/how-to-learn-chinese-vocabulary/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/como-aprender-vocabulario-chino/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
