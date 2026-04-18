# Backoffice plan (Vercel, React, shared styling)

This document describes how to add an internal **backoffice** for [letters.game](https://www.letters.game) without changing how the public marketing site is built or deployed today.

---

## 1. Goals

1. **Inventory:** Show all site pages **grouped by language / locale**, with clear mapping between English (canonical) URLs and localized equivalents where they exist.
2. **Future metrics:** Surface **Google Analytics** traffic and funnels, **Google Search Console** performance (clicks, impressions, positions), and later **Semrush / Ahrefs** style scores where we have API or export access.
3. **Editorial north star:** Treat **English as the source of truth** and use **agents** (automated or semi-automated) to keep other locales in **parity** with English: same URL structure under each locale prefix, tracked gaps, and a workflow that produces reviewable changes (for example pull requests).

---

## 2. Non-goals and constraints

- **Do not** turn the existing static HTML site into a React app for visitors.
- **Do not** require the marketing deploy pipeline to build or bundle the backoffice.
- **Do not** add backoffice-only scripts or trackers to public `index.html` or other consumer pages.
- The backoffice is **staff-only** and must be **authenticated** and **not indexed** (robots, no sitemap entry).

---

## 3. High-level architecture

### 3.1 Separate Vercel project (recommended)

Create a **second Vercel project** that deploys only the React application, for example:

- **Production URL:** `backoffice.letters.game` (or `letters-backoffice.vercel.app` until DNS is ready).
- **Repo:** Same Git repository as the website, with the app living in a dedicated directory (see section 7).

The public site keeps its current deployment (static files only). The backoffice project uses a **different root directory** and **different build command**. No shared runtime with the static site.

**Critical:** Do **not** add a `vercel.json` at the **repository root**. If the marketing site’s Vercel project uses the repo root as its project root, that file applies to **production** and can replace the entire static site with the backoffice app. Scope Vercel config to [`backoffice/vercel.json`](backoffice/vercel.json) and set **Root Directory** to `backoffice` only on the backoffice Vercel project.

### 3.2 React stack on Vercel

- **Vite + React + TypeScript** is a good default: fast local dev, static output suitable for SPA hosting on Vercel, optional **Vercel Serverless Functions** or **Edge Config** later for secrets and API proxies.
- Alternatively **Next.js (App Router)** if you want first-class API routes and middleware for auth in one framework. Either is fine; pick one and keep the backoffice codebase consistent.

### 3.3 Same look and feel as the marketing site

The marketing site loads design tokens and layout from [`/styles.css`](styles.css) (CSS variables such as `--lg-bg-page`, `--lg-fg-primary`, typography, light/dark `prefers-color-scheme`).

**Approach:**

1. **Import the existing file** in the React app entry (for example `import "../styles.css"` or copy `styles.css` into `backoffice/public/styles.css` and link it once). Prefer **single source of truth**: either import from the repo root path in the monorepo or a small build step that copies `styles.css` into the app so Vercel always sees one file.
2. Add **thin backoffice-specific CSS** (layout for tables, filters, status badges) in a separate file that only extends variables from `:root`, without editing `styles.css` unless you intentionally want shared token updates to affect both surfaces.

This keeps visual parity and avoids forking the design system.

---

## 4. Phase 1: Page inventory per language

### 4.1 Source of truth for locales

Use [`translation.md`](translation.md) as the canonical list of locale codes and path prefixes (`en` at root, others under `/{code}/`). Encode the same mapping in TypeScript config in the backoffice (`pathPrefixByLocale`) so the UI and any future automation stay aligned.

### 4.2 Discovering pages

Today the site is **static HTML** in folders (`guides/`, `es/`, `translate/`, etc.). Options (can combine):

| Method | Pros | Cons |
| --- | --- | --- |
| **Crawl `sitemap.xml`** | Matches what search engines see | Only listed URLs; may lag new files |
| **Repository scan** (CI or local script) | Complete list of `.html` files | Needs rules to assign locale from path |
| **Generated manifest** | Fast UI, explicit metadata | Requires a job to regenerate when site changes |

**Recommendation:** Add a **small Node script** (run in CI or on demand) that walks the repo, classifies each HTML file by locale from path prefix, computes a **stable page key** (path without locale prefix for comparison to English), and writes `backoffice/data/pages-manifest.json` (gitignored or committed, team choice). The React app reads this manifest in dev from the file system or in production from a **build-time embed** or **static JSON** deployed with the app.

### 4.3 UI (MVP)

- **Locale switcher** or side-by-side columns: English vs selected locale.
- **Table:** page key, English URL, localized URL (or “missing”), last modified if available from git or file mtime in the manifest.
- **Filters:** missing translations, guides only, etc.
- **Deep links** to production URLs for manual QA.

No write actions in phase 1 unless you add them later behind auth.

---

## 5. Phase 2: Google Analytics

- **Read-only** access via **Google Analytics Data API** (GA4).
- Store **service account** or **OAuth** credentials in Vercel environment variables; **never** expose keys to the browser. Use a serverless function or Next.js route handler as a **BFF** (backend for frontend).
- Map GA **page path** or **page location** to rows in the inventory (normalize trailing slashes and locale prefix the same way as the manifest).
- Show **sessions, users, key events** per page and per locale, with date range controls.

**Prerequisite:** Property ID, API enabled in Google Cloud, GA4 user or service account granted access.

---

## 6. Phase 3: Google Search Console

- Use the **Search Console API** (search analytics query) for **clicks, impressions, CTR, position** by page and query.
- Same pattern as GA: **server-side only**, secrets on Vercel.
- Align URLs with the manifest (canonical domain, `www` vs apex, trailing slash policy). Document one canonical base URL and normalize in code.

**Prerequisite:** Verified site property, OAuth or service account with access.

---

## 7. Phase 4: Semrush / Ahrefs (or similar)

These vendors differ by **API availability, cost, and rate limits**.

- **Start** with **CSV export uploads** in the backoffice (manual refresh) if API access is expensive or delayed.
- **Later:** Integrate official APIs where contracted, again **only on the server**, caching responses to avoid rate issues.
- Display **domain-level** and **URL-level** metrics next to inventory rows; treat third-party scores as **directional**, not ground truth.

---

## 8. English-first parity and agent workflow

**Principles:**

1. **English URLs and copy** are the **authority**. Other locales are **derived** through transcreation or translation with QA.
2. **Parity** means: for each English page key, either a localized page exists at the expected prefixed path or the gap is **visible** in the backoffice (and optionally tracked as an issue).
3. **Agents** (Cursor, CI jobs, or custom scripts) should output **diffs**: new HTML files or content blocks, hreflang checks, and internal link updates. Humans merge after review.

**Backoffice support:**

- **Gap list:** English pages with no localized counterpart for locale X.
- **Drift warnings (future):** optional last-modified or checksum comparison when manifests store hashes.
- **Job log:** link to PRs or runs that updated translations.

This does not require changing the public site architecture; it is process plus tooling around the same static tree.

---

## 9. Security and access control

- **Vercel Deployment Protection** (password or SSO) as a first layer.
- **Application auth** (for example **Clerk**, **Auth0**, or **NextAuth** with Google workspace) so only `@yourcompany.com` accounts can sign in.
- **Environment variables** for all API keys; rotate on departure.
- **`robots.txt`** for the backoffice hostname: `Disallow: /`.
- **No** embedding of private keys in the React bundle.

---

## 10. Suggested repository layout (no impact on current deploy)

Keep the existing static site at the repository root as it is today. Add a subdirectory, for example:

```text
letters-website/               # existing static site (unchanged deploy)
  index.html
  styles.css
  guides/
  es/
  ...
backoffice/                  # new Vercel project root
  package.json
  vite.config.ts
  src/
  public/                    # optional: copied styles.css
```

**Vercel (public site):** root directory `.`, output static, no change.

**Vercel (backoffice):** root directory `backoffice`, build `npm run build`, output `dist` (or Next.js defaults).

If you prefer two repositories later, move `backoffice/` out; the plan stays valid.

---

## 11. Testing and rollout

1. **Local:** Run the React app locally; confirm `styles.css` loads and dark mode matches the marketing site.
2. **Staging:** Deploy backoffice to a Vercel preview URL; verify auth and that no marketing domain serves backoffice routes.
3. **Production:** Point `backoffice.letters.game` to the new project after DNS and certs are ready.

---

## 12. Open decisions

- **Monorepo script location:** `scripts/generate-pages-manifest.mjs` at repo root vs inside `backoffice/tools/`.
- **Commit manifest vs generate on build:** committing gives reproducible deploys; generating on build always matches HEAD but needs repo access in CI (Vercel can clone full repo).
- **Framework:** Vite SPA vs Next.js (if you want API routes in the same repo folder without a separate functions layout).

---

## 13. Summary

| Item | Choice |
| --- | --- |
| Hosting | Separate Vercel project, subdomain |
| UI | React + TypeScript |
| Styling | Reuse root [`styles.css`](styles.css); backoffice-specific CSS additive only |
| Public site | No changes to build, deploy, or HTML for visitors |
| Phase 1 | Locale-aware page inventory from manifest |
| Later | GA4, GSC, then Semrush/Ahrefs or exports |
| Long term | English as source; agents + PRs for parity; gaps visible in UI |

This plan can be implemented incrementally; each phase adds value without blocking the next.

---

## 14. Implementation (shipped in repo)

- **App:** `backoffice/` (Vite, React, TypeScript). Imports root [`styles.css`](styles.css) and adds [`backoffice/src/backoffice.css`](backoffice/src/backoffice.css).
- **Manifest:** [`scripts/generate-pages-manifest.mjs`](scripts/generate-pages-manifest.mjs) writes `backoffice/public/pages-manifest.json` (gitignored; regenerated on `npm run dev` / `npm run build`).
- **Metrics (GA4, GSC, Ahrefs, Semrush):** Vercel serverless routes under [`backoffice/api/`](backoffice/api/) (`/api/health`, `/api/ga-summary`, `/api/gsc-summary`, `/api/seo-summary`). Secrets only in Vercel env (or `.env.local` for `vercel dev`). See [`backoffice/.env.example`](backoffice/.env.example).
- **Vercel:** Create a project with **Root Directory** `backoffice`, **Framework Preset** Vite (or Other with `npm run build` and output `dist`). Use Deployment Protection for staff-only access.
- **Local UI only:** `cd backoffice && npm install && npm run dev` (manifest + Vite; `/api/*` is not served).
- **Local UI + APIs:** `cd backoffice && npm install && npx vercel dev` (or `npm run dev:vercel` after linking the project), with env vars loaded from Vercel or `.env.local`.
