import { Term } from "@/components/article";
import type { GuidesIndexData } from "@/components/guides/types";

export const guidesIndexEn: GuidesIndexData = {
  h1: "Vocabulary guides",
  lead:
    "Practical, game-friendly articles on learning and remembering words, aligned with how Letters is built.",
  focusHint: (
    <>
      These guides mix <strong>general</strong> vocabulary tips with <strong>language-specific</strong> hubs. If you
      are mainly studying one language, choose it below to move that block to the top (saved on this device
      only, not the same as the site language in the footer).
    </>
  ),
  focusBar: {
    label: "I’m learning",
    defaultOptionLabel: "General first (default order)",
    options: [
      { value: "spanish", label: "Spanish" },
      { value: "english", label: "English" },
      { value: "japanese", label: "Japanese" },
      { value: "german", label: "German" },
      { value: "chinese", label: "Chinese" },
      { value: "korean", label: "Korean" },
    ],
  },
  general: {
    headingId: "guides-h-general",
    title: "Cross-cutting guides",
    intro: "Methods, games, apps, and habits, useful no matter which language you study.",
    items: [
      {
        href: "/guides/best-ways-to-learn-vocabulary/",
        title: "Best ways to learn vocabulary (without flashcards)",
        blurb: "Methods, spacing, context, and play, your hub for “how do I actually remember words?”",
      },
      {
        href: "/guides/games-to-learn-vocabulary/",
        title: "Games to learn vocabulary (that actually work)",
        blurb: "What makes word games useful for retention, and what to avoid.",
      },
      {
        href: "/guides/best-apps-to-learn-vocabulary/",
        title: "Best apps to learn vocabulary (ranked)",
        blurb: "How to pick an app when you want games, not grammar homework.",
      },
      {
        href: "/guides/learn-vocabulary-daily/",
        title: "Learn vocabulary daily: a simple system",
        blurb: "Streaks, tiny goals, and showing up without burnout.",
      },
      {
        href: "/guides/how-to-learn-vocabulary-fast/",
        title: "How to learn vocabulary fast: 7 proven techniques",
        blurb: "Short sessions, spacing, and recall habits that actually scale.",
      },
      {
        href: "/guides/best-way-to-learn-vocabulary/",
        title: "Best way to learn vocabulary (for casual learners)",
        blurb: "Low-pressure practice when you are not cramming for an exam.",
      },
      {
        href: "/guides/strategies-difficult-vocabulary-words/",
        title: "Strategies for learning difficult vocabulary words",
        blurb: "When words blur together or refuse to stick, fix the failure mode.",
      },
      {
        href: "/guides/learn-more-vocabulary-in-5-minutes-a-day/",
        title: "How to learn more vocabulary in 5 minutes a day",
        blurb: "Micro-sessions, one job per sit-down, anchors that stick.",
      },
      {
        href: "/guides/learn-new-vocabulary-every-day/",
        title: "Learn new vocabulary every day",
        blurb: "Few new words, lots of review, capture, and mixed modes.",
      },
      {
        href: "/guides/word-games-vs-flashcards-vocabulary/",
        title: "Word games vs flashcards for vocabulary",
        blurb: "When each tool wins, motivation, recall depth, and blend.",
      },
      {
        href: "/guides/why-learn-vocabulary-through-games/",
        title: "Why learn vocabulary through games works",
        blurb: "Retrieval, motivation, and spacing, a science-friendly angle.",
      },
      {
        href: "/guides/best-vocabulary-games-for-adults/",
        title: "Best vocabulary games for adults",
        blurb: "What to prioritize when you want real recall.",
      },
    ],
  },
  langColumns: [
    {
      dataGuideLang: "spanish",
      dataOrder: "0",
      headingId: "guides-h-es",
      title: "Learning Spanish",
      blocks: [
        {
          items: [
            {
              href: "/guides/learn-spanish-vocabulary/",
              title: "Learn Spanish vocabulary the fun way",
              blurb: "Categories, travel basics, and puzzle-style practice for casual learners.",
            },
            {
              href: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
              title: "Best way to learn Spanish vocabulary for travel",
              blurb: "Situational phrases, politeness, and themed practice for trips.",
            },
            {
              href: "/guides/how-to-learn-spanish-without-classes/",
              title: "How to learn Spanish vocabulary without classes",
              blurb: "Themes, input, early speaking, and playful recall, self-study.",
            },
          ],
        },
        {
          sectionIntro: "Study pages on Letters: hubs, topic lists, travel sets, and word entries.",
          items: [
            {
              href: "/spanish/",
              title: "Spanish hub",
              blurb: "Vocabulary, phrases, travel, translations, and country notes in one place.",
            },
            {
              href: "/learn/spanish/",
              title: "Learn Spanish overview",
              blurb: "Words, topics, phrases, travel, and regional pages.",
            },
            {
              href: "/learn/spanish/family-vocabulary/",
              title: "Family vocabulary",
              blurb: "Themed list for household and relatives.",
            },
            {
              href: "/learn/spanish/travel/restaurants/",
              title: "Spanish for travel: restaurants",
              blurb: "Ordering, the bill, and dining phrases.",
            },
            {
              href: "/learn/spanish/word/hermana/",
              title: (
                <>
                  <Term lang="es">hermana</Term> (sister)
                </>
              ),
              blurb: "Example word page with pronunciation and related terms.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "english",
      dataOrder: "1",
      headingId: "guides-h-en",
      title: "Learning English",
      blocks: [
        {
          items: [
            {
              href: "/guides/learn-english-vocabulary/",
              title: "Learn English vocabulary: games vs flashcards",
              blurb: "For non-native speakers who want low-pressure, game-first English practice.",
            },
            {
              href: "/guides/english-vocabulary-games-for-adults/",
              title: "English vocabulary games for adults",
              blurb: "Puzzle-style practice without the kiddie app vibe.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "japanese",
      dataOrder: "2",
      headingId: "guides-h-ja",
      title: "Learning Japanese",
      blocks: [
        {
          items: [
            {
              href: "/guides/learn-japanese-vocabulary/",
              title: "Learn Japanese vocabulary through puzzle games",
              blurb: "Hiragana-friendly recall, short sessions, and gamified repetition.",
            },
            {
              href: "/guides/how-to-learn-japanese-vocabulary/",
              title: "How to learn Japanese vocabulary (the fun way)",
              blurb: "Hiragana, themed sets, and playful recall beyond rote drills.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "german",
      dataOrder: "3",
      headingId: "guides-h-de",
      title: "Learning German",
      blocks: [
        {
          items: [
            {
              href: "/guides/learn-german-vocabulary/",
              title: "Learn German vocabulary with daily puzzle-style practice",
              blurb: "Compounds, travel motivation, and bite-sized word building.",
            },
            {
              href: "/guides/learn-german-vocabulary-without-grammar-drills/",
              title: "Learn German vocabulary without grammar drills",
              blurb: "Chunks, compounds, and themes before heavy declensions.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "chinese",
      dataOrder: "4",
      headingId: "guides-h-zh",
      title: "Learning Chinese",
      blocks: [
        {
          items: [
            {
              href: "/guides/learn-chinese-vocabulary/",
              title: "Learn Chinese vocabulary through puzzle games",
              blurb: "Pinyin, characters, and category-based practice without drowning in drills.",
            },
            {
              href: "/guides/how-to-learn-chinese-vocabulary/",
              title: "How to learn Chinese vocabulary (the fun way)",
              blurb: "Pinyin, themes, characters on your schedule.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "korean",
      dataOrder: "5",
      headingId: "guides-h-ko",
      title: "Learning Korean",
      blocks: [
        {
          items: [
            {
              href: "/guides/learn-korean-vocabulary/",
              title: "Learn Korean vocabulary: daily puzzle game",
              blurb: "Hangul, cultural pull, and habit-friendly word play.",
            },
            {
              href: "/guides/how-to-learn-korean-vocabulary/",
              title: "How to learn Korean vocabulary (the fun way)",
              blurb: "Hangul, themes, and low-shame practice.",
            },
          ],
        },
      ],
    },
  ],
};
