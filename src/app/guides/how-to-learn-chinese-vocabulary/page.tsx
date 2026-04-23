import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
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
    <ArticlePage
      schemaArticle

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
    >
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
      
      <RelatedLinks
      ariaLabel="Related guides"
      heading="Related guides"
      items={[
      {
      href: "/guides/learn-chinese-vocabulary/",
      label: <>Learn Chinese vocabulary (hub)</>,
      },
      {
      href: "/guides/learn-japanese-vocabulary/",
      label: <>Learn Japanese vocabulary</>,
      },
      {
      href: "/guides/best-ways-to-learn-vocabulary/",
      label: <>Best ways to learn vocabulary</>,
      },
      {
      href: "/guides/games-to-learn-vocabulary/",
      label: <>Games to learn vocabulary</>,
      },
      {
      href: "/guides/",
      label: <>All guides</>,
      }
      ]}
      />
      
      <ArticleCta label="Download Letters">
      <p><strong>Try Letters</strong>: a word puzzle game from Ocho. Short sessions, tactile tiles, built for learners who want play before pressure.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
