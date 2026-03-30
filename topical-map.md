# Topical Map for Language Learning Puzzle Games

*Generated March 30, 2026*

for letters.game

**[translation.md](translation.md)** is the reference for locale *policy* (path prefixes, hreflang rules, slug rules, UI vs SEO). **This file is the only place that records what is actually live** on letters.game—update **Implementation status** on every ship (date, URLs, tables, Phase 1–4 checklist, internal links). Do not maintain a parallel “shipped” list elsewhere.

## Strategy Overview

- **Pillars**: 10
- **Total Articles**: 72
- **Total Search Volume**: 28,240
- **Quick Wins**: 38

This topical map targets casual language-curious adults who prefer game-first experiences over classroom-style learning. The strategy balances playable puzzle pages (transactional) with vocabulary-learning how-tos (informational) to capture both "play now" and "learn better" search intent, then converts users into app installs through low-friction demos and daily puzzle hooks.

## Implementation status (letters.game)

**Maintainers:** Treat this section as the running changelog for the marketing repo. When you add a locale, URL, or article: (1) set **Last updated** below, (2) edit the bullets/tables here, (3) mark **Shipped** on the matching **Content calendar** lines and pillar tables if applicable, (4) update `sitemap.xml` in git. One source of truth—no duplicate shipped lists in other docs.

*Last updated: March 30, 2026.*

### Locales and homepage

- **English** is the default: `https://www.letters.game/` (no prefix), `html lang="en"`, canonical and `x-default` for the homepage pair.
- **Spanish** mirrors the homepage: `https://www.letters.game/es/` with full UI parity (copy, CTA, footer), **`hreflang`** reciprocity with English, **`og:locale`** / alternate, and footer language switcher.
- Shared assets: `/styles.css`, `/words.js`, `/favicon.svg`. The tile demo uses **locale-specific word lists** driven by `document.documentElement.lang` (English vs Spanish), not the old global multilingual welcome list.
- **Analytics:** `dataLayer` pushes `letters_locale: 'en' | 'es'` before `gtag('config', …)`; key clicks can include `locale` (and on article pages, `page_type: 'article'`).

### Discovery files

- **`sitemap.xml`** — homepage EN/ES plus all shipped article URLs (resubmit in Search Console when URLs change).
- **`robots.txt`** — references the sitemap.

### Blog index (all guides)

| Locale | URL |
| --- | --- |
| English | `https://www.letters.game/blog/` |
| Spanish | `https://www.letters.game/es/blog/` |

### Shipped pillar hub articles (blog, EN + ES)

Each row is the primary **pillar page** from the map, shipped as informational long-form (metadata + body + related links + CTA). **`hreflang` / `canonical` / JSON-LD** match the first pillar article pattern. **Playable demo on-page** is still a follow-up for all of these.

| Pillar | Topic | English URL | Spanish URL |
| --- | --- | --- | --- |
| 1 | Vocabulary learning methods | `/blog/best-ways-to-learn-vocabulary/` | `/es/blog/mejores-formas-aprender-vocabulario/` |
| 2 | Spanish vocabulary games | `/blog/learn-spanish-vocabulary/` | `/es/blog/aprender-vocabulario-espanol/` |
| 3 | English vocabulary building | `/blog/learn-english-vocabulary/` | `/es/blog/aprender-vocabulario-ingles/` |
| 4 | Japanese vocabulary practice | `/blog/learn-japanese-vocabulary/` | `/es/blog/aprender-vocabulario-japones/` |
| 5 | German vocabulary learning | `/blog/learn-german-vocabulary/` | `/es/blog/aprender-vocabulario-aleman/` |
| 6 | Vocabulary learning games | `/blog/games-to-learn-vocabulary/` | `/es/blog/juegos-aprender-vocabulario/` |
| 7 | Vocabulary learning apps | `/blog/best-apps-to-learn-vocabulary/` | `/es/blog/mejores-apps-aprender-vocabulario/` |
| 8 | Chinese vocabulary methods | `/blog/learn-chinese-vocabulary/` | `/es/blog/aprender-vocabulario-chino/` |
| 9 | Korean vocabulary practice | `/blog/learn-korean-vocabulary/` | `/es/blog/aprender-vocabulario-coreano/` |
| 10 | Daily vocabulary habits | `/blog/learn-vocabulary-daily/` | `/es/blog/aprender-vocabulario-diario/` |

**Regenerator:** Eight pillar hubs (Pillars 3–7, 8–10 in the table above, excluding Pillar 1 and the Spanish Pillar 2 page) are generated from `scripts/gen_pillar_articles.py`. **Hand-edited in HTML:** Pillar 1 (*best ways*) and Pillar 2 Spanish hub (*learn Spanish*). After changing copy/templates for the generated set, edit the script and run `python3 scripts/gen_pillar_articles.py` (overwrites those eight pairs only).

Internal discovery: **Home** footers include “**All guides**” / “**Todas las guías**” → blog index; each article links related hubs and the index.

### Not yet in scope

- Cluster articles, daily puzzle URLs, food/travel play pages, and **playable embeds** on these hub pages (per calendar below).
- Locales beyond `en` + `es` on the marketing site (target locale *codes*: [translation.md](translation.md)).

## Pillar Overview

### Pillar 1 — Vocabulary Learning Methods (7,500 · KD 3)
Target keyword: "best ways to learn vocabulary" · Articles: 9 — Core strategies and methods for learning vocabulary through games, apps, and daily habits.

### Pillar 2 — Spanish Vocabulary Games (150 · KD 10)
Target keyword: "learn spanish vocabulary" · Articles: 7 — Spanish-specific vocabulary learning through puzzles, daily practice, and word categories.

### Pillar 3 — English Vocabulary Building (150 · KD 28)
Target keyword: "learn english vocabulary" · Articles: 6 — English vocabulary expansion tools, apps, and game-based approaches for non-native speakers.

### Pillar 4 — Japanese Vocabulary Practice (70 · KD 8)
Target keyword: "learn japanese vocabulary" · Articles: 6 — Japanese vocabulary acquisition through gamified practice and character recognition.

### Pillar 5 — German Vocabulary Learning (60 · KD 7)
Target keyword: "learn german vocabulary" · Articles: 6 — German word-building strategies, compound words, and category-based learning.

### Pillar 6 — Vocabulary Learning Games (80 · KD 28)
Target keyword: "games to learn vocabulary" · Articles: 8 — Game mechanics, puzzle types, and daily challenges that build vocabulary retention.

### Pillar 7 — Vocabulary Learning Apps (80 · —)
Target keyword: "apps to learn english vocabulary" · Articles: 7 — App features, comparisons, and tools for mobile vocabulary learning.

### Pillar 8 — Chinese Vocabulary Methods (100 · KD 4)
Target keyword: "learn chinese vocabulary" · Articles: 6 — Character-based vocabulary learning with tonal practice and category grouping. **Locale:** `zh-Hans` in [translation.md](translation.md) when localizing this pillar.

### Pillar 9 — Korean Vocabulary Practice (50 · KD 3)
Target keyword: "learn korean vocabulary" · Articles: 6 — Hangul-based vocabulary building through daily games and contextual learning. **Locale:** `ko` in [translation.md](translation.md) when localizing this pillar.

### Pillar 10 — Daily Vocabulary Habits (200 · KD 66)
Target keyword: "learn vocabulary" · Articles: 11 — Building consistent vocabulary practice through daily puzzles, streaks, and habit stacking.

## Pillar 1: Vocabulary Learning Methods

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P1 | Best Ways to Learn Vocabulary (Without Flashcards) Target: "best ways to learn vocabulary" | 7,500 | 3 | Informational | Pillar page. **Blog shipped** (EN+ES, Mar 2026) — see **Implementation status**. Covers spaced repetition, context learning, game-based practice. Links to all cluster articles. |
| P1 | How to Learn Vocabulary Fast: 7 Proven TechniquesTarget: "how to learn vocabulary" | 150 | 6 | Informational | Quick-win guide. Emphasizes short sessions and active recall. Links up to Pillar 1. |
| P1 | Best Way to Learn Vocabulary for Casual LearnersTarget: "best way to learn vocabulary" | 100 | 1 | Informational | ICP-focused. Positions puzzle games as ideal for non-committal learners. Links to Pillar 1 and 6. |
| P2 | How to Learn More Vocabulary in 5 Minutes a DayTarget: "how to learn more vocabulary" | 60 | 18 | Informational | Micro-habit guide. Supports daily puzzle hook. Links to Pillar 1 and 10. |
| P2 | Why Learn Vocabulary Through Games WorksTarget: "why learn vocabulary" | 60 | — | Informational | Authority-building explainer. Cites cognitive science. Links to Pillar 1 and 6. |
| P2 | Learn New Vocabulary Every Day: A Simple SystemTarget: "learn new vocabulary" | 70 | 38 | Transactional | CTA to daily puzzle. Includes printable tracker. Links to Pillar 10. |
| P1 | Strategies for Learning Difficult Vocabulary WordsTarget: "an appropriate strategy to learn difficult vocabulary words is the" | 80 | 0 | Informational | SEO snippet target. Short, tactical. Links to Pillar 1. |
| P3 | Vocabulary Learn: Complete Beginner's GuideTarget: "vocabulary learn" | 90 | 61 | Informational | Long-form resource. Covers beginner mistakes. Links to Pillar 1. |
| P2 | Best Websites to Learn English Vocabulary (Free)Target: "best websites to learn english vocabulary" | 80 | — | Commercial | Comparison piece. Positions your app as #1 for game-first learners. Links to Pillar 7. |

This pillar serves as the strategic hub for vocabulary acquisition methods, addressing the core question your ICP asks: "How do I actually remember words without flashcards?" It validates game-based learning as legitimate and positions your puzzle mechanic as a research-backed solution.

## Pillar 2: Spanish Vocabulary Games

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P1 | Learn Spanish Vocabulary: The Fun Way Target: "learn spanish vocabulary" | 150 | 10 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; playable demo on-page TBD. Hub for all Spanish content. |
| P1 | How to Learn Spanish Vocabulary (Without Classes)Target: "how to learn spanish vocabulary" | 60 | 14 | Informational | Self-study guide. Positions games as alternative to courses. Links to Pillar 2. |
| P1 | Best Way to Learn Spanish Vocabulary for TravelTarget: "best way to learn spanish vocabulary" | 60 | 0 | Informational | Travel-focused. Highlights passport/map mechanic. Links to Pillar 2. |
| P2 | Spanish Food Vocabulary Puzzle (Play Now)Target: "spanish food vocabulary game" | 0 | — | Transactional | Playable category page. Users spell food words from letter bucket. Links to Pillar 2. |
| P2 | Spanish Travel Vocabulary: 50 Essential WordsTarget: "spanish travel vocabulary" | 150 | 0 | Lead Magnet | Downloadable word list + playable quiz. Captures email. Links to Pillar 2. |
| P2 | Daily Spanish Vocabulary PuzzleTarget: "daily spanish vocabulary" | 20 | 12 | Transactional | Daily challenge URL with unique content. Fresh every 24h. Links to Pillar 2 and 10. |
| P2 | Spanish Vocabulary Builder: Category-Based PracticeTarget: "spanish vocabulary builder" | 40 | 1 | Informational | Explains category method. Links to food, travel, greetings puzzles. Links to Pillar 2. |

Spanish is the most-searched language for vocabulary learning. This pillar targets casual learners who want travel basics or conversation starters, not exam prep. Emphasizes category-based learning (food, travel, greetings) aligned with your game's hub structure.

## Pillar 3: English Vocabulary Building

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P2 | Learn English Vocabulary: Games vs Flashcards Target: "learn english vocabulary" | 150 | 28 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; playable demo TBD. |
| P2 | Apps to Learn English Vocabulary (Ranked)Target: "apps to learn english vocabulary" | 80 | — | Commercial | Comparison list. Your app #1 for puzzle lovers. Links to Pillar 3 and 7. |
| P2 | Best Apps to Learn English Vocabulary 2025Target: "best apps to learn english vocabulary" | 70 | — | Commercial | Annual update piece. Fresh each year. Links to Pillar 3 and 7. |
| P2 | Free Apps to Learn English Vocabulary (No Ads)Target: "free apps to learn english vocabulary" | 40 | — | Commercial | Freemium angle. Addresses "is it really free?" objection. Links to Pillar 3. |
| P2 | English Vocabulary Daily PuzzleTarget: "english vocabulary daily" | 0 | — | Transactional | Daily challenge. Fresh content for return visits. Links to Pillar 3 and 10. |
| P2 | English Vocabulary Games for AdultsTarget: "english vocabulary games adults" | est. | — | Informational | ICP-focused. Why adults prefer puzzles over kid apps. Links to Pillar 3 and 6. |

Targets non-native English speakers looking for casual, game-based practice. The app/tool comparison angle is strong here—many users search for "best apps to learn English vocabulary" and are decision-ready.

## Pillar 4: Japanese Vocabulary Practice

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P1 | Learn Japanese Vocabulary Through Puzzle Games Target: "learn japanese vocabulary" | 70 | 8 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; playable demo TBD. |
| P1 | How to Learn Japanese Vocabulary (The Fun Way)Target: "how to learn japanese vocabulary" | 60 | 1 | Informational | Gamification guide. Emphasizes character recognition. Links to Pillar 4. |
| P2 | Japanese Food Vocabulary Puzzle (Play Now)Target: "japanese food vocabulary game" | est. | — | Transactional | Playable category page. Sushi, ramen, etc. Links to Pillar 4. |
| P2 | Japanese Travel Vocabulary: Essential PhrasesTarget: "japanese travel vocabulary" | 20 | 1 | Lead Magnet | Downloadable PDF + playable quiz. Links to Pillar 4. |
| P2 | Daily Japanese Vocabulary ChallengeTarget: "daily japanese vocabulary" | 10 | — | Transactional | Daily puzzle with rotating categories. Links to Pillar 4 and 10. |
| P2 | Hiragana Recognition Through Letter GamesTarget: "hiragana vocabulary game" | est. | — | Informational | Explains how bucket spelling teaches character recognition. Links to Pillar 4. |

Japanese attracts completionist learners—your passport stamp + character collection mechanics fit well. Emphasize hiragana/katakana recognition through letter-bucket spelling, which feels more game-like than rote memorization.

## Pillar 5: German Vocabulary Learning

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P1 | Learn German Vocabulary: Daily Puzzle Game Target: "learn german vocabulary" | 60 | 7 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; playable demo TBD. |
| P2 | German Food Vocabulary GameTarget: "german food vocabulary game" | est. | — | Transactional | Playable category. Bier, Brot, Wurst. Links to Pillar 5. |
| P2 | German Travel Vocabulary: 50 Essential WordsTarget: "german travel vocabulary" | 20 | — | Lead Magnet | Downloadable list + playable quiz. Links to Pillar 5. |
| P2 | Daily German Vocabulary PuzzleTarget: "daily german vocabulary" | 20 | — | Transactional | Daily challenge. Fresh every 24h. Links to Pillar 5 and 10. |
| P2 | German Compound Words: A Puzzle GuideTarget: "german compound words game" | est. | — | Informational | Explains how bucket spelling teaches word-building. Links to Pillar 5. |
| P2 | Learn German Vocabulary Without Grammar DrillsTarget: "learn german vocabulary no grammar" | est. | — | Informational | ICP-focused. Games first, grammar optional. Links to Pillar 5. |

German learners are often motivated by travel or heritage. Compound words and noun genders add challenge—perfect for puzzle mechanics. Emphasize category learning and the "unlock Germany on your map" fantasy.

## Pillar 6: Vocabulary Learning Games

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P2 | Games to Learn Vocabulary (That Actually Work) Target: "games to learn vocabulary" | 80 | 28 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; playable demo TBD. |
| P2 | Word Games vs Flashcards for VocabularyTarget: "word games vocabulary learning" | est. | — | Commercial | Comparison piece. Cites retention studies. Links to Pillar 6. |
| P2 | Daily Vocabulary Puzzle Game (Free to Play)Target: "daily vocabulary puzzle" | est. | — | Transactional | Daily hub. Rotating languages. Links to Pillar 6 and 10. |
| P2 | Best Vocabulary Games for AdultsTarget: "vocabulary games for adults" | 350 | 39 | Commercial | Ranked list. Your app #1 for collection/progression. Links to Pillar 6 and 7. |
| P2 | Anagram Games for Language LearningTarget: "anagram games vocabulary" | est. | — | Informational | Explains bucket mechanic as anagram variant. Links to Pillar 6. |
| P2 | Spelling Games That Teach Real WordsTarget: "spelling games vocabulary" | est. | — | Informational | Why spelling from a bucket = better retention. Links to Pillar 6. |
| P2 | Letter Bucket Games: How They WorkTarget: "letter bucket game" | est. | — | Informational | Explains your core mechanic. Links to Pillar 6. |
| P2 | Collection-Based Language Games (Map, Stamps, Postcards)Target: "collection language games" | est. | — | Informational | Why completionists love your mechanic. Links to Pillar 6. |

This pillar bridges gaming and learning. It targets casual players who search for "word games" or "vocabulary games" and don't yet know your brand. Strong cross-linking to language-specific pillars and comparison content.

## Pillar 7: Vocabulary Learning Apps

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P2 | Best Apps to Learn Vocabulary (Ranked 2026) Target: "apps to learn english vocabulary" | 80 | — | Commercial | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; comparison depth TBD. |
| P2 | Letters.game vs Duolingo: Which Is Better for Casual Learners?Target: "letters game vs duolingo" | est. | — | Commercial | Head-to-head comparison. Honest about strengths/weaknesses. Links to Pillar 7. |
| P2 | Best Vocabulary Apps That Feel Like GamesTarget: "vocabulary apps that feel like games" | est. | — | Commercial | ICP-focused. Targets "homework fatigue." Links to Pillar 7. |
| P2 | Free Vocabulary Apps With No Ads (2026)Target: "free vocabulary apps no ads" | est. | — | Commercial | Freemium angle. Explains IAP model. Links to Pillar 7. |
| P2 | Vocabulary Apps With Daily ChallengesTarget: "vocabulary apps daily challenge" | est. | — | Commercial | Habit-building angle. Compares daily puzzle formats. Links to Pillar 7 and 10. |
| P2 | Language Learning Apps With Social FeaturesTarget: "language apps with friends" | est. | — | Commercial | Highlights friend comparison, leaderboards. Links to Pillar 7. |
| P2 | Best Mobile Vocabulary Games (iOS & Android)Target: "mobile vocabulary games" | est. | — | Commercial | Platform-specific. Links to store pages. Links to Pillar 7. |

Commercial intent pillar targeting decision-ready users. This is where you position against Duolingo, Memrise, and word-game competitors. Emphasizes unique features: map progression, no grammar drills, social comparison.

## Pillar 8: Chinese Vocabulary Methods

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P1 | Learn Chinese Vocabulary Through Puzzle Games Target: "learn chinese vocabulary" | 100 | 4 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; playable demo TBD. |
| P2 | Chinese Food Vocabulary Puzzle (Play Now)Target: "chinese food vocabulary game" | est. | — | Transactional | Playable category page. Dumplings, noodles, tea. Links to Pillar 8. |
| P2 | Chinese Travel Vocabulary: 50 Essential PhrasesTarget: "chinese travel vocabulary" | 10 | — | Lead Magnet | Downloadable PDF + playable quiz. Links to Pillar 8. |
| P2 | Daily Chinese Vocabulary ChallengeTarget: "daily chinese vocabulary" | 0 | — | Transactional | Daily puzzle with rotating categories. Links to Pillar 8 and 10. |
| P2 | Learn Pinyin Through Letter GamesTarget: "pinyin vocabulary game" | est. | — | Informational | Explains how bucket spelling teaches pinyin. Links to Pillar 8. |
| P2 | Chinese Character Recognition GamesTarget: "chinese character games" | 0 | — | Informational | Visual learning angle. Links to Pillar 8. |

Chinese learners value character recognition and tonal practice. Your letter-bucket mechanic works well for pinyin spelling. Emphasize category-based learning and the visual collection of passport stamps as motivation.

## Pillar 9: Korean Vocabulary Practice

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P1 | Learn Korean Vocabulary: Daily Puzzle Game Target: "learn korean vocabulary" | 50 | 3 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; playable demo TBD. |
| P2 | Korean Food Vocabulary GameTarget: "korean food vocabulary game" | est. | — | Transactional | Playable category. Kimchi, bibimbap, bulgogi. Links to Pillar 9. |
| P2 | Korean Travel Vocabulary: 50 Essential WordsTarget: "korean travel vocabulary" | 10 | — | Lead Magnet | Downloadable list + playable quiz. Links to Pillar 9. |
| P2 | Daily Korean Vocabulary PuzzleTarget: "daily korean vocabulary" | 10 | — | Transactional | Daily challenge. Fresh every 24h. Links to Pillar 9 and 10. |
| P2 | Learn Hangul Through Letter GamesTarget: "hangul vocabulary game" | est. | — | Informational | Explains how bucket spelling teaches Hangul. Links to Pillar 9. |
| P2 | Korean Vocabulary for K-Drama FansTarget: "korean vocabulary kdrama" | est. | — | Informational | Cultural angle. Targets pop-culture learners. Links to Pillar 9. |

Korean is growing fast among younger learners (K-pop, K-drama). Hangul is phonetic and puzzle-friendly. Emphasize fast wins and the "unlock Korea on your map" fantasy. Strong cross-link to daily puzzle habit content.

## Pillar 10: Daily Vocabulary Habits

| Priority | Article | Volume | KD | Type | Notes |
| --- | --- | --- | --- | --- | --- |
| P3 | Learn Vocabulary Daily: A Simple System Target: "learn vocabulary" | 200 | 66 | Transactional | **Blog hub shipped** (EN+ES, Mar 2026) — **Implementation status**; daily challenge URLs TBD. |
| P2 | Vocabulary Daily: Learn Words in 5 MinutesTarget: "vocabulary - learn words daily" | 50 | — | Transactional | Landing page for daily habit. CTA to daily puzzle. Links to Pillar 10. |
| P2 | Daily Vocabulary Puzzle: All LanguagesTarget: "daily vocabulary puzzle" | est. | — | Transactional | Master daily hub. Rotates languages. Links to Pillar 10. |
| P2 | How to Build a Daily Vocabulary HabitTarget: "daily vocabulary habit" | est. | — | Informational | Habit-stacking guide. Positions daily puzzle as anchor. Links to Pillar 10. |
| P2 | Vocabulary Streaks: Why They WorkTarget: "vocabulary streak" | est. | — | Informational | Psychology of streaks. Links to Pillar 10. |
| P2 | Printable Vocabulary Tracker (Free PDF)Target: "printable vocabulary tracker" | est. | — | Lead Magnet | Calendar PDF. Captures email. Links to Pillar 10. |
| P2 | 300 Words This Year: A Daily Vocabulary GoalTarget: "vocabulary goal tracker" | est. | — | Lead Magnet | Year-long tracker. Progress visualization. Links to Pillar 10. |
| P2 | Best Time to Practice Vocabulary DailyTarget: "best time to practice vocabulary" | est. | — | Informational | Habit trigger guide. Morning, lunch, evening. Links to Pillar 10. |
| P2 | One-Minute Vocabulary Warm-Up (Daily Routine)Target: "one minute vocabulary practice" | est. | — | Transactional | Quick daily challenge. Links to Pillar 10. |
| P2 | Vocabulary Passport: Track Your ProgressTarget: "vocabulary passport tracker" | est. | — | Lead Magnet | Digital or printable passport. Links to Pillar 10. |
| P2 | Daily Vocabulary Challenge: Compete With FriendsTarget: "daily vocabulary challenge friends" | est. | — | Transactional | Social feature page. Leaderboards. Links to Pillar 10. |

This pillar targets habit formation—the "I want to do this daily" mindset. It connects to every language pillar's daily puzzle and reinforces your streak/passport progression mechanics. Strong conversion potential because it's about commitment, not just curiosity.

## Internal Linking Plan

### Pillar 1: Vocabulary Learning Methods
- Pillar page ← all cluster articles link up to pillar
- How to Learn Vocabulary Fast → cross-links to Games to Learn Vocabulary (Pillar 6) — shared game-based approach
- Best Way to Learn Vocabulary → cross-links to Daily Vocabulary Puzzle (Pillar 10) — habit formation
- Learn New Vocabulary → cross-links to Vocabulary Daily (Pillar 10) — daily practice
- Best Websites to Learn English Vocabulary → cross-links to Best Apps to Learn Vocabulary (Pillar 7) — tool comparison

### Pillar 2: Spanish Vocabulary Games
- Pillar page ← all cluster articles link up to pillar
- Learn Spanish Vocabulary → cross-links to Best Ways to Learn Vocabulary (Pillar 1) — core method
- Daily Spanish Vocabulary Puzzle → cross-links to Daily Vocabulary Puzzle (Pillar 10) — all languages hub
- Spanish Food Vocabulary Puzzle → cross-links to Japanese Food Vocabulary (Pillar 4) — category learning pattern

### Pillar 3: English Vocabulary Building
- Pillar page ← all cluster articles link up to pillar
- Apps to Learn English Vocabulary → cross-links to Best Apps to Learn Vocabulary (Pillar 7) — master app list
- English Vocabulary Daily Puzzle → cross-links to Daily Vocabulary Puzzle (Pillar 10) — daily hub
- English Vocabulary Games for Adults → cross-links to Games to Learn Vocabulary (Pillar 6) — ICP overlap

### Pillar 4: Japanese Vocabulary Practice
- Pillar page ← all cluster articles link up to pillar
- Learn Japanese Vocabulary → cross-links to Learn Chinese Vocabulary (Pillar 8) — character-based languages
- Daily Japanese Vocabulary Challenge → cross-links to Daily Vocabulary Puzzle (Pillar 10) — daily hub
- Japanese Food Vocabulary Puzzle → cross-links to Chinese Food Vocabulary (Pillar 8) — category pattern

### Pillar 5: German Vocabulary Learning
- Pillar page ← all cluster articles link up to pillar
- Learn German Vocabulary → cross-links to Learn Spanish Vocabulary (Pillar 2) — European language pair
- Daily German Vocabulary Puzzle → cross-links to Daily Vocabulary Puzzle (Pillar 10) — daily hub
- German Compound Words Guide → cross-links to Letter Bucket Games (Pillar 6) — mechanic explanation

### Pillar 6: Vocabulary Learning Games
- Pillar page ← all cluster articles link up to pillar
- Games to Learn Vocabulary → cross-links to Best Ways to Learn Vocabulary (Pillar 1) — validates game approach
- Word Games vs Flashcards → cross-links to Letters.game vs Duolingo (Pillar 7) — tool comparison
- Daily Vocabulary Puzzle Game → cross-links to Daily Vocabulary Puzzle (Pillar 10) — daily hub
- Best Vocabulary Games for Adults → cross-links to Best Apps to Learn Vocabulary (Pillar 7) — commercial intent

### Pillar 7: Vocabulary Learning Apps
- Pillar page ← all cluster articles link up to pillar
- Best Apps to Learn Vocabulary → cross-links to Apps to Learn English Vocabulary (Pillar 3) — language-specific
- Letters.game vs Duolingo → cross-links to Word Games vs Flashcards (Pillar 6) — approach comparison
- Vocabulary Apps With Daily Challenges → cross-links to Daily Vocabulary Puzzle (Pillar 10) — habit focus

### Pillar 8: Chinese Vocabulary Methods
- Pillar page ← all cluster articles link up to pillar
- Learn Chinese Vocabulary → cross-links to Learn Japanese Vocabulary (Pillar 4) — character-based languages
- Daily Chinese Vocabulary Challenge → cross-links to Daily Vocabulary Puzzle (Pillar 10) — daily hub
- Chinese Food Vocabulary Puzzle → cross-links to Korean Food Vocabulary (Pillar 9) — category pattern

### Pillar 9: Korean Vocabulary Practice
- Pillar page ← all cluster articles link up to pillar
- Learn Korean Vocabulary → cross-links to Learn Chinese Vocabulary (Pillar 8) — Asian language pair
- Daily Korean Vocabulary Puzzle → cross-links to Daily Vocabulary Puzzle (Pillar 10) — daily hub
- Korean Vocabulary for K-Drama Fans → cross-links to Learn Korean Vocabulary (Pillar 9) — cultural angle

### Pillar 10: Daily Vocabulary Habits
- Pillar page ← all cluster articles link up to pillar
- Learn Vocabulary Daily → cross-links to all language-specific daily puzzles (Pillars 2–9)
- Daily Vocabulary Puzzle: All Languages → cross-links to each language pillar's daily challenge
- Vocabulary Streaks: Why They Work → cross-links to How to Build a Daily Vocabulary Habit (Pillar 10) — habit formation
- Printable Vocabulary Tracker → cross-links to 300 Words This Year (Pillar 10) — goal setting

## Content Calendar

### Phase 1 — Quick Wins (Month 1–2)
- **Shipped:** All **ten pillar hub** articles (blog EN+ES) — see **Implementation status**; *next:* playable demos on those URLs + cluster content below.
- Learn Chinese Vocabulary — Pillar 8 (100 vol, KD 4) — **Hub live**; add playable proof on-page
- Learn Korean Vocabulary — Pillar 9 (50 vol, KD 3) — **Hub live**; add playable proof on-page
- How to Learn Vocabulary Fast — Pillar 1 (150 vol, KD 6) — Cluster article driving to Pillar 1
- Learn German Vocabulary — Pillar 5 (60 vol, KD 7) — **Hub live**; add playable proof on-page
- Learn Japanese Vocabulary — Pillar 4 (70 vol, KD 8) — **Hub live**; add playable proof on-page
- Learn Spanish Vocabulary — Pillar 2 (150 vol, KD 10) — **Hub live**; add playable proof on-page
- Best Way to Learn Vocabulary — Pillar 1 (100 vol, KD 1) — ICP-aligned, conversion-focused
- How to Learn Japanese Vocabulary — Pillar 4 (60 vol, KD 1) — Tactical support article
- Strategies for Learning Difficult Vocabulary Words — Pillar 1 (80 vol, KD 0) — Snippet target
- Best Way to Learn Spanish Vocabulary — Pillar 2 (60 vol, KD 0) — Travel-focused angle

### Phase 2 — Core Content (Month 3–4)
- How to Learn Spanish Vocabulary — Pillar 2 (60 vol, KD 14) — Cluster support for Spanish hub
- How to Learn More Vocabulary — Pillar 1 (60 vol, KD 18) — Micro-habit guide linking to daily puzzle
- Games to Learn Vocabulary — Pillar 6 (80 vol, KD 28) — **Hub blog shipped**; next: playable + clusters
- Learn English Vocabulary — Pillar 3 (150 vol, KD 28) — **Hub blog shipped**; next: playable + clusters
- Learn New Vocabulary — Pillar 1 (70 vol, KD 38) — Daily habit CTA page
- Spanish Food Vocabulary Puzzle — Pillar 2 (est. vol) — Playable category page
- Japanese Food Vocabulary Puzzle — Pillar 4 (est. vol) — Playable category page
- Chinese Food Vocabulary Puzzle — Pillar 8 (est. vol) — Playable category page
- German Food Vocabulary Game — Pillar 5 (est. vol) — Playable category page
- Korean Food Vocabulary Game — Pillar 9 (est. vol) — Playable category page
- Daily Vocabulary Puzzle: All Languages — Pillar 10 (est. vol) — Master daily hub with rotation
- Daily Spanish Vocabulary Puzzle — Pillar 2 (est. vol) — Language-specific daily URL
- Daily Japanese Vocabulary Challenge — Pillar 4 (est. vol) — Language-specific daily URL
- Daily Chinese Vocabulary Challenge — Pillar 8 (est. vol) — Language-specific daily URL
- Daily German Vocabulary Puzzle — Pillar 5 (est. vol) — Language-specific daily URL
- Daily Korean Vocabulary Puzzle — Pillar 9 (est. vol) — Language-specific daily URL
- English Vocabulary Daily Puzzle — Pillar 3 (est. vol) — Language-specific daily URL

### Phase 3 — Expansion (Month 5–6)
- Vocabulary Learn — Pillar 1 (90 vol, KD 61) — Long-form beginner resource
- Learn Vocabulary — Pillar 10 (200 vol, KD 66) — **Hub blog shipped**; next: daily URLs + depth
- Apps to Learn English Vocabulary — Pillar 7 (80 vol, est. KD) — Commercial intent pillar
- Best Apps to Learn Vocabulary — Pillar 7 (est. vol) — **Hub blog shipped**; next: ranked list depth + comparisons
- Best Apps to Learn English Vocabulary — Pillar 3 (70 vol, est. KD) — Language-specific app list
- Free Apps to Learn English Vocabulary — Pillar 3 (40 vol, est. KD) — Freemium angle
- Letters.game vs Duolingo — Pillar 7 (est. vol) — Head-to-head comparison
- Best Vocabulary Apps That Feel Like Games — Pillar 7 (est. vol) — ICP-focused comparison
- Word Games vs Flashcards — Pillar 6 (est. vol) — Method comparison
- Best Websites to Learn English Vocabulary — Pillar 1 (80 vol, est. KD) — Comparison piece
- Spanish Travel Vocabulary: 50 Essential Words — Pillar 2 (est. vol) — Lead magnet PDF
- Japanese Travel Vocabulary: Essential Phrases — Pillar 4 (est. vol) — Lead magnet PDF
- Chinese Travel Vocabulary: 50 Essential Phrases — Pillar 8 (est. vol) — Lead magnet PDF
- German Travel Vocabulary: 50 Essential Words — Pillar 5 (est. vol) — Lead magnet PDF
- Korean Travel Vocabulary: 50 Essential Words — Pillar 9 (est. vol) — Lead magnet PDF

### Phase 4 — Authority & Retention (Month 7+)
- Why Learn Vocabulary Through Games Works — Pillar 1 (60 vol, est. KD) — Authority-building explainer with research
- Vocabulary Daily: Learn Words in 5 Minutes — Pillar 10 (50 vol, est. KD) — Habit landing page
- How to Build a Daily Vocabulary Habit — Pillar 10 (est. vol) — Habit stacking guide
- Vocabulary Streaks: Why They Work — Pillar 10 (est. vol) — Psychology of streaks
- Printable Vocabulary Tracker — Pillar 10 (est. vol) — Email capture lead magnet
- 300 Words This Year: A Daily Vocabulary Goal — Pillar 10 (est. vol) — Year-long tracker
- Vocabulary Passport: Track Your Progress — Pillar 10 (est. vol) — Digital/printable passport
- Best Time to Practice Vocabulary Daily — Pillar 10 (est. vol) — Habit trigger guide
- One-Minute Vocabulary Warm-Up — Pillar 10 (est. vol) — Quick daily challenge
- Daily Vocabulary Challenge: Compete With Friends — Pillar 10 (est. vol) — Social feature page
- English Vocabulary Games for Adults — Pillar 3 (est. vol) — ICP-focused article
- Best Vocabulary Games for Adults — Pillar 6 (est. vol) — Commercial comparison
- Anagram Games for Language Learning — Pillar 6 (est. vol) — Mechanic explainer
- Spelling Games That Teach Real Words — Pillar 6 (est. vol) — Retention science
- Letter Bucket Games: How They Work — Pillar 6 (est. vol) — Core mechanic guide
- Collection-Based Language Games — Pillar 6 (est. vol) — Completionist appeal
- Free Vocabulary Apps With No Ads — Pillar 7 (est. vol) — Freemium explainer
- Vocabulary Apps With Daily Challenges — Pillar 7 (est. vol) — Habit-building tools
- Language Learning Apps With Social Features — Pillar 7 (est. vol) — Social motivation
- Best Mobile Vocabulary Games — Pillar 7 (est. vol) — Platform-specific comparison
- Spanish Vocabulary Builder: Category-Based Practice — Pillar 2 (est. vol) — Method guide
- Hiragana Recognition Through Letter Games — Pillar 4 (est. vol) — Character learning
- German Compound Words: A Puzzle Guide — Pillar 5 (est. vol) — Word-building mechanic
- Learn German Vocabulary Without Grammar Drills — Pillar 5 (est. vol) — ICP-focused
- Learn Pinyin Through Letter Games — Pillar 8 (est. vol) — Phonetic learning
- Chinese Character Recognition Games — Pillar 8 (est. vol) — Visual learning
- Learn Hangul Through Letter Games — Pillar 9 (est. vol) — Alphabet learning
- Korean Vocabulary for K-Drama Fans — Pillar 9 (est. vol) — Cultural angle

## Localization & URLs

- **Publishing order:** Ship English articles on canonical unprefixed URLs first (Phase 1–2); add localized routes under `/es`, `/de`, `/ja`, `/ko`, `/zh-Hans`, etc. only when the full page (metadata, body, playable block) is ready — see [translation.md](translation.md).
- **Slugs:** English slugs follow the primary keyword in each row; localized slugs are native where search benefits, per translation doc.
- **Internal links:** When a user is on a prefixed locale, intra-site links should stay in that locale; cross-language links are intentional exceptions (language picker, “also in English”).
- **UI vs SEO locales:** The translation doc lists more UI locales than this map has language-specific pillars. App UI can ship in `nl`, `fr`, `it`, etc., while marquee SEO pages follow this map’s priorities (ES, DE, JA, KO, ZH, EN + method/game/app pillars).

## Next Steps

This topical map is designed to position letters.game as the definitive puzzle-first language learning platform. The strategy prioritizes playable content over static tutorials—every pillar page should include a functional demo or daily puzzle, not just landing copy. This aligns with how your ICP actually searches: they want to "play now" first, then decide if they'll commit to an app install.

Start with Phase 1's quick wins (Pillars 1, 8, 9) to prove the core mechanic works for low-KD keywords. These pages establish your unique positioning: vocabulary learning through letter-bucket puzzles, not flashcards or grammar drills. Once these rank, Phase 2 builds out daily puzzle URLs for each language—these are your retention loop and SEO compound effect, since fresh daily content signals authority to Google and habit to users.

The internal linking strategy is critical: every language-specific article (Spanish, Japanese, Chinese, etc.) links up to its pillar and cross-links to the "Daily Vocabulary Puzzle" hub in Pillar 10. This creates a hub-and-spoke architecture where Pillar 10 becomes your highest-authority page over time, funneling users into daily challenges regardless of which language they searched for. By Month 6, you should have 50+ indexed pages, daily content refreshing across all languages, and clear conversion paths from "I'm curious about Spanish puzzles" to "I'm opening the app every morning." The map grows topical authority while staying true to your product's game-first, low-commitment promise.

