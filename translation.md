# Translation & locale strategy (letters.game)

This document defines how we ship and maintain **UI copy** and **SEO/content** across languages. English (`en`) is the **default locale** and **source language** for product and editorial governance.

Editorial SEO priorities (pillars, articles, internal linking) and **what is live on the marketing site** live in **[topical-map.md](topical-map.md)** (see **Implementation status** there only). Use *this* file for locale rules, hreflang policy, and string workflow.

---

## Supported locales (v1)

Paths use **no prefix** for English. All other locales use a **URL prefix** matching the locale code (see Path prefixes).

| Code | Path prefix | Language (UI label) |
| --- | --- | --- |
| `en` | *(none)* | English |
| `nl` | `/nl` | Nederlands |
| `de` | `/de` | Deutsch |
| `es` | `/es` | Español |
| `fr` | `/fr` | Français |
| `it` | `/it` | Italiano |
| `pt` | `/pt` | Português |
| `pt-BR` | `/pt-BR` | Português (Brasil) |
| `cs` | `/cs` | Čeština |
| `da` | `/da` | Dansk |
| `pl` | `/pl` | Polski |
| `sv` | `/sv` | Svenska |
| `ja` | `/ja` | 日本語 |
| `ko` | `/ko` | 한국어 |
| `zh-Hans` | `/zh-Hans` | 简体中文 |
| `hi` | `/hi` | हिन्दी |
| `ru` | `/ru` | Русский |
| `vi` | `/vi` | Tiếng Việt |
| `id` | `/id` | Bahasa Indonesia |

**Implementation note:** Keep a single config (e.g. `pathPrefixByLocale`) that maps each locale code to `""` for `en` and `"/{code}"` for the rest, so links and sitemap generation stay consistent.

**Marketing site:** Follow the locale and URL *rules* in this document. **What is deployed** (exact URLs, shipped articles, sitemap contents, homepage behavior) is tracked only in **[topical-map.md](topical-map.md)** under **Implementation status**—update that section when the site changes; do not duplicate deploy state here.

### Alignment with the topical map (language-specific pillars)

Marquee SEO articles in [topical-map.md](topical-map.md) target learners of specific languages. When you localize those pillars, use these locale codes and path prefixes (same as the table above):

| Topical map pillar (topic) | Locale code | Path prefix |
| --- | --- | --- |
| Spanish vocabulary games | `es` | `/es` |
| English vocabulary building | `en` | *(none — canonical root)* |
| Japanese vocabulary practice | `ja` | `/ja` |
| German vocabulary learning | `de` | `/de` |
| Chinese vocabulary methods | `zh-Hans` | `/zh-Hans` |
| Korean vocabulary practice | `ko` | `/ko` |

Pillars that are **not** tied to one target language (methods, games, apps, daily habits) stay on `en` first; localized versions use the same locale set when you transcreate them (e.g. `/de/blog/...` for a German-audience pillar), with keywords validated per market — not literal translation only.

---

## URL & routing rules

1. **Canonical English URLs** live at the site root: `https://www.letters.game/...`
2. **Localized URLs** mirror the same path structure under the prefix: e.g. `/de/blog/learn-german-vocabulary` parallels `/blog/learn-german-vocabulary` only when that article exists in German—not every English slug needs a translation day one.
3. **Slug policy**
   - **English:** Use ASCII slugs derived from the primary keyword/title (as in the topical map).
   - **Localized:** Prefer **native-language slugs** where search and UX benefit (e.g. German article → German slug). When a locale ships later, add redirects from any interim English slug if you used placeholders.
4. **`pt` vs `pt-BR`:** Treat as separate hreflang entries and separate trees. Do not assume copy is interchangeable; default Portuguese for Portugal vs Brazil where it diverges.

---

## hreflang & SEO metadata

For every **indexable** page that exists in more than one language:

- Emit **`hreflang`** alternates for each locale version **plus** `x-default` pointing to the **English** URL (default locale).
- Set **`html lang`** to the active locale (e.g. `lang="de"`).
- **`rel="canonical"`** must point to the **self** URL for that locale (not always English).
- **Open Graph / Twitter:** Localize `title`, `description`, and `og:locale` / alternate locales where the stack allows.

Pages that exist only in English should still declare `x-default` and `en` so crawlers understand the default; other locales can be omitted until translated.

---

## Content types vs UI strings

| Type | Examples | Translation approach |
| --- | --- | --- |
| **UI chrome** | Nav, buttons, footer, error messages | String keys in a catalog; ship all v1 locales for launch-critical UI. |
| **Marquee SEO** | Pillar pages, articles from [topical-map.md](topical-map.md) | Professional translation or transcreation; keyword research **per market** where volume matters (not literal EN→X for headlines). |
| **Playable / transactional** | Demo puzzles, daily puzzle copy | UX + SEO: keep mechanic names consistent with the app. |
| **Legal / store** | Privacy, terms | Follow legal review; may lag feature locales. |

The topical map is **English-keyword oriented**. For non-English pages, add a **locale keyword pass** (native speaker or local SEO tooling) so H1s and titles target how people actually search in that language.

---

## Typography & scripts

- **Japanese (`ja`), Hindi (`hi`), etc.:** Use appropriate fonts (system stack or webfonts); verify line-height and weight for non-Latin scripts.
- **No RTL locales in v1 list**; if Arabic/Hebrew are added later, plan layout mirroring separately.
- **Czech (`cs`), Polish (`pl`), Vietnamese (`vi`):** Confirm diacritics render and slugs/URLs are encoded correctly (UTF-8 paths; avoid ambiguous normalizations).

---

## File / workflow conventions (recommended)

1. **Source of truth:** English strings in one place (JSON/YAML/TS or CMS), keyed by stable IDs (e.g. `cta.download_letters`).
2. **Locale files:** One file per locale (`en.json`, `de.json`, …) or namespaced modules; avoid duplicating structure across orphaned HTML files long-term.
3. **Glossaries:** Lock brand terms (*Letters*, *letter bucket*, *passport*, *stamp*, *postcard*, *hub*) with approved translations per language before scaling content.
4. **Quality:** UI: linguistic QA; SEO pages: native review for headlines and first-screen copy.
5. **CI:** Optional checks for missing keys, broken interpolations, and forbidden hardcoded user-visible English in non-`en` builds.

---

## Sitemap & discovery

- Generate **sitemap index** with per-locale sitemaps or a single sitemap including full localized URLs.
- Submit in Search Console **per property** (or single domain with locale folders) per your hosting setup.
- Ensure **internal links** use locale-prefixed paths when the user is in a non-English locale (no silent bounce to English without user intent).

---

## Analytics

- Track **`locale`** (and optional **`content_locale`** for mixed pages) on page views and conversion events so SEO and product can compare performance by language.
- Align with the existing measurement ID but segment reports by language in the analytics layer.

---

## Relationship to the editorial calendar ([topical-map.md](topical-map.md))

- **Phase 1–2** of the topical map: publish **English** first on unprefixed URLs; add **`hreflang`** stubs only where translations exist.
- When localizing a pillar or cluster page, ship **full page** (metadata + body + playable block) for that locale to avoid thin or duplicate signals.
- **Daily puzzle URLs:** If content refreshes daily per language, each locale needs its own scheduled URL set and canonical discipline (date in URL vs query param—pick one pattern globally).
- **Article titles ↔ slugs:** Primary keywords in the topical map’s tables inform English slugs; localized pages get market-specific keyword research and native slugs per the **Slug policy** bullets under **URL & routing rules**.

---

## Open decisions (to finalize in implementation)

- Static site (current) vs SSG/framework (Next, Astro, etc.) for scalable localized routes.
- Whether **marketing blog** lives on same origin as app marketing (assumed yes for topical map).
- **CMS vs git-based** translations for long-form SEO articles.
