import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { GuidesFocusBar } from "@/components/GuidesFocusBar";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Vocabulary guides",
  description:
    "Guides to learn vocabulary with games, daily habits, and language-specific tips, from Letters.",
  path: "/guides/",
  locale: "en",
  alternates: { en: "/guides/", es: "/es/guides/" },
});

interface GuideItem {
  href: string;
  title: string | React.ReactNode;
  blurb: string;
}

const GENERAL: GuideItem[] = [
  { href: "/guides/best-ways-to-learn-vocabulary/", title: "Best ways to learn vocabulary (without flashcards)", blurb: "Methods, spacing, context, and play, your hub for “how do I actually remember words?”" },
  { href: "/guides/games-to-learn-vocabulary/", title: "Games to learn vocabulary (that actually work)", blurb: "What makes word games useful for retention, and what to avoid." },
  { href: "/guides/best-apps-to-learn-vocabulary/", title: "Best apps to learn vocabulary (ranked)", blurb: "How to pick an app when you want games, not grammar homework." },
  { href: "/guides/learn-vocabulary-daily/", title: "Learn vocabulary daily: a simple system", blurb: "Streaks, tiny goals, and showing up without burnout." },
  { href: "/guides/how-to-learn-vocabulary-fast/", title: "How to learn vocabulary fast: 7 proven techniques", blurb: "Short sessions, spacing, and recall habits that actually scale." },
  { href: "/guides/best-way-to-learn-vocabulary/", title: "Best way to learn vocabulary (for casual learners)", blurb: "Low-pressure practice when you are not cramming for an exam." },
  { href: "/guides/strategies-difficult-vocabulary-words/", title: "Strategies for learning difficult vocabulary words", blurb: "When words blur together or refuse to stick, fix the failure mode." },
  { href: "/guides/learn-more-vocabulary-in-5-minutes-a-day/", title: "How to learn more vocabulary in 5 minutes a day", blurb: "Micro-sessions, one job per sit-down, anchors that stick." },
  { href: "/guides/learn-new-vocabulary-every-day/", title: "Learn new vocabulary every day", blurb: "Few new words, lots of review, capture, and mixed modes." },
  { href: "/guides/word-games-vs-flashcards-vocabulary/", title: "Word games vs flashcards for vocabulary", blurb: "When each tool wins, motivation, recall depth, and blend." },
  { href: "/guides/why-learn-vocabulary-through-games/", title: "Why learn vocabulary through games works", blurb: "Retrieval, motivation, and spacing, a science-friendly angle." },
  { href: "/guides/best-vocabulary-games-for-adults/", title: "Best vocabulary games for adults", blurb: "What to prioritize when you want real recall." },
];

function GuideList({ items }: { items: GuideItem[] }) {
  return (
    <ul className="guides-index__list">
      {items.map((g) => (
        <li key={g.href}>
          <Link href={g.href}>{g.title}</Link>
          <p>{g.blurb}</p>
        </li>
      ))}
    </ul>
  );
}

export default function GuidesIndexPage() {
  return (
    <>
      <LocaleEffect locale="en" />
      <ArticleBodyClass />
      <ArticleTopbar />
      <main id="main" className="article-wrap">
        <article className="article-post">
          <h1>Vocabulary guides</h1>
          <p className="article-lead">
            Practical, game-friendly articles on learning and remembering words, aligned with how Letters is built.
          </p>
          <p className="guides-focus-hint">
            These guides mix <strong>general</strong> vocabulary tips with <strong>language-specific</strong> hubs. If you are mainly studying one language, choose it below to move that block to the top (saved on this device only, not the same as the site language in the footer).
          </p>
          <GuidesFocusBar
            label="I’m learning"
            defaultOptionLabel="General first (default order)"
            languageOptions={[
              { value: "spanish", label: "Spanish" },
              { value: "english", label: "English" },
              { value: "japanese", label: "Japanese" },
              { value: "german", label: "German" },
              { value: "chinese", label: "Chinese" },
              { value: "korean", label: "Korean" },
            ]}
          />

          <section className="guides-index__section" aria-labelledby="guides-h-general">
            <h2 className="guides-index__heading" id="guides-h-general">
              Cross-cutting guides
            </h2>
            <p className="guides-index__section-intro">
              Methods, games, apps, and habits, useful no matter which language you study.
            </p>
            <GuideList items={GENERAL} />
          </section>

          <div className="guides-index__lang-wrap" id="guides-lang-sections">
            <section
              className="guides-index__section"
              data-guide-lang="spanish"
              data-order="0"
              aria-labelledby="guides-h-es"
            >
              <h2 className="guides-index__heading" id="guides-h-es">Learning Spanish</h2>
              <GuideList
                items={[
                  { href: "/guides/learn-spanish-vocabulary/", title: "Learn Spanish vocabulary the fun way", blurb: "Categories, travel basics, and puzzle-style practice for casual learners." },
                  { href: "/guides/best-way-to-learn-spanish-vocabulary-travel/", title: "Best way to learn Spanish vocabulary for travel", blurb: "Situational phrases, politeness, and themed practice for trips." },
                  { href: "/guides/how-to-learn-spanish-without-classes/", title: "How to learn Spanish vocabulary without classes", blurb: "Themes, input, early speaking, and playful recall, self-study." },
                ]}
              />
              <p className="guides-index__section-intro">
                Study pages on Letters: hubs, topic lists, travel sets, and word entries.
              </p>
              <GuideList
                items={[
                  { href: "/spanish/", title: "Spanish hub", blurb: "Vocabulary, phrases, travel, translations, and country notes in one place." },
                  { href: "/learn/spanish/", title: "Learn Spanish overview", blurb: "Words, topics, phrases, travel, and regional pages." },
                  { href: "/learn/spanish/family-vocabulary/", title: "Family vocabulary", blurb: "Themed list for household and relatives." },
                  { href: "/learn/spanish/travel/restaurants/", title: "Spanish for travel: restaurants", blurb: "Ordering, the bill, and dining phrases." },
                  { href: "/learn/spanish/word/hermana/", title: (<><span lang="es">hermana</span> (sister)</>), blurb: "Example word page with pronunciation and related terms." },
                ]}
              />
            </section>

            <section className="guides-index__section" data-guide-lang="english" data-order="1" aria-labelledby="guides-h-en">
              <h2 className="guides-index__heading" id="guides-h-en">Learning English</h2>
              <GuideList items={[
                { href: "/guides/learn-english-vocabulary/", title: "Learn English vocabulary: games vs flashcards", blurb: "For non-native speakers who want low-pressure, game-first English practice." },
                { href: "/guides/english-vocabulary-games-for-adults/", title: "English vocabulary games for adults", blurb: "Puzzle-style practice without the kiddie app vibe." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="japanese" data-order="2" aria-labelledby="guides-h-ja">
              <h2 className="guides-index__heading" id="guides-h-ja">Learning Japanese</h2>
              <GuideList items={[
                { href: "/guides/learn-japanese-vocabulary/", title: "Learn Japanese vocabulary through puzzle games", blurb: "Hiragana-friendly recall, short sessions, and gamified repetition." },
                { href: "/guides/how-to-learn-japanese-vocabulary/", title: "How to learn Japanese vocabulary (the fun way)", blurb: "Hiragana, themed sets, and playful recall beyond rote drills." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="german" data-order="3" aria-labelledby="guides-h-de">
              <h2 className="guides-index__heading" id="guides-h-de">Learning German</h2>
              <GuideList items={[
                { href: "/guides/learn-german-vocabulary/", title: "Learn German vocabulary with daily puzzle-style practice", blurb: "Compounds, travel motivation, and bite-sized word building." },
                { href: "/guides/learn-german-vocabulary-without-grammar-drills/", title: "Learn German vocabulary without grammar drills", blurb: "Chunks, compounds, and themes before heavy declensions." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="chinese" data-order="4" aria-labelledby="guides-h-zh">
              <h2 className="guides-index__heading" id="guides-h-zh">Learning Chinese</h2>
              <GuideList items={[
                { href: "/guides/learn-chinese-vocabulary/", title: "Learn Chinese vocabulary through puzzle games", blurb: "Pinyin, characters, and category-based practice without drowning in drills." },
                { href: "/guides/how-to-learn-chinese-vocabulary/", title: "How to learn Chinese vocabulary (the fun way)", blurb: "Pinyin, themes, characters on your schedule." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="korean" data-order="5" aria-labelledby="guides-h-ko">
              <h2 className="guides-index__heading" id="guides-h-ko">Learning Korean</h2>
              <GuideList items={[
                { href: "/guides/learn-korean-vocabulary/", title: "Learn Korean vocabulary: daily puzzle game", blurb: "Hangul, cultural pull, and habit-friendly word play." },
                { href: "/guides/how-to-learn-korean-vocabulary/", title: "How to learn Korean vocabulary (the fun way)", blurb: "Hangul, themes, and low-shame practice." },
              ]} />
            </section>
          </div>
        </article>
      </main>
      <SiteFooter
        locale="en"
        pageType="article"
        extras={[{ href: "/", label: "Home" }]}
        langs={[
          { href: "/guides/", hreflang: "en", label: "English", current: true },
          { href: "/es/guides/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
