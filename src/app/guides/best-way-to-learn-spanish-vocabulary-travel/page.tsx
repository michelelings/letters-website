import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Best Way to Learn Spanish Vocabulary for Travel",
  description: "Best way to learn Spanish vocabulary for travel: situational phrases, restaurant and transport clusters, polite routines, and recall habits, from Letters.",
  path: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
  locale: "en",
  alternates: {
    en: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
    es: "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
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
      <h1 itemProp="headline">Best Way to Learn Spanish Vocabulary for Travel</h1>
      <p className="article-lead" itemProp="description">The <strong>best way to learn Spanish vocabulary for travel</strong> is <strong>situation-first</strong>, not textbook-first: rehearse the moments you will actually stand in, counters, metros, cafés, hotels, and bundle <strong>polite glue</strong> (<em>por favor</em>, <em>disculpe</em>, <em>¿podría…?</em>) with the nouns and verbs you need there.</p>

      <h2>Learn micro-scripts, not isolated words</h2>
      <p>Travel fluency is often ten-second exchanges. Drill lines like ordering, asking price, directions, bathroom, allergy, whole utterances stick faster than vocabulary floating without a stage.</p>

      <h2>Prioritize comprehension kindness</h2>
      <p>Locals meet tourists with patience when you signal effort. A handful of softeners and clarification phrases (<em>más despacio, por favor</em>) buys goodwill while you catch up.</p>

      <h2>Theme your study around the trip</h2>
      <p>Food, transit, lodging, emergencies, one theme per few days of practice. Finish a cluster before adding glamour vocab you might never deploy.</p>

      <h2>Practice aloud with bad accents on purpose</h2>
      <p>Mumbling silently trains recognition only. Saying Spanish out loud, even imperfectly, builds the motor patterns that help you summon words under mild stress.</p>

      <h2>Carry a tiny offline list</h2>
      <p>Screenshot or note your scripts on-device. Review in line, not only at home. Travel vocabulary dies in drawers.</p>

      <h2>Pair with playful recall at home</h2>
      <p>Before you fly, mix in recall games so words are not just passive on flashcards. <strong>Letters</strong> suits learners who want tactile spelling practice without a classroom setup.</p>

      <h2>Summary</h2>
      <p>Scripts, politeness, themed sets, spoken rehearsal, and mobile review beat broad deck cramming. Build vocabulary for the trip you are actually taking, then enjoy using it.</p>

      <nav className="article-related" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul>
          <li><Link href="/guides/learn-spanish-vocabulary/">Learn Spanish vocabulary (hub)</Link></li>
          <li><Link href="/guides/best-ways-to-learn-vocabulary/">Best ways to learn vocabulary</Link></li>
          <li><Link href="/guides/learn-vocabulary-daily/">Learn vocabulary daily</Link></li>
          <li><Link href="/guides/">All guides</Link></li>
        </ul>
      </nav>

      <nav className="article-related" aria-label="Practice pages">
        <h2>Practice pages</h2>
        <ul>
          <li><Link href="/learn/spanish/travel/restaurants/">Spanish for travel: restaurants</Link></li>
          <li><Link href="/learn/spanish/">Learn Spanish overview</Link></li>
          <li><Link href="/spanish/">Spanish hub</Link></li>
          <li><Link href="/learn/spanish/family-vocabulary/">Family vocabulary</Link></li>
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
          { href: "/guides/best-way-to-learn-spanish-vocabulary-travel/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/mejor-forma-vocabulario-espanol-viaje/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
