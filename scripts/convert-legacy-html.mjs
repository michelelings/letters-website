#!/usr/bin/env node
/**
 * One-shot converter: legacy HTML articles -> Next.js App Router pages.
 *
 * For each article-style HTML file we:
 *   1. Parse <head> to build a `pageMetadata()` call.
 *   2. Convert the <article class="article-post">...</article> body to JSX.
 *      - <div class="letters-word-mount">...<div class="word">...</div></div>
 *        becomes <LettersWordInline .../>.
 *      - Nested <section class="card-demo">...</section> becomes <CardDemo .../>.
 *      - Inline links keep <Link> for internal / <a> for external.
 *   3. Convert the <footer class="site-footer"> to <SiteFooter .../> props.
 *
 * The converter is intentionally specific to the structure of letters.game:
 * it trusts the uniform article markup and is not a general HTML->JSX tool.
 */

import { readFileSync, writeFileSync, mkdirSync, statSync, readdirSync, existsSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "node-html-parser";

const __filename = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(__filename), "..");

/** Map canonical path -> file on disk. Excludes homepages, guides indexes, 404. */
const SKIP_PATHS = new Set([
  "/",
  "/es/",
  "/guides/",
  "/es/guides/",
  "/404.html",
]);

const LEGACY_DIRS = [
  "guides",
  "es/guides",
  "how-to-say",
  "hoe-zeg-je",
  "wie-sagt-man",
  "translate",
  "learn",
  "spanish",
];

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile() && entry.name === "index.html") yield full;
  }
}

function collectHtmlFiles() {
  const files = [];
  for (const d of LEGACY_DIRS) {
    const abs = join(ROOT, d);
    if (!existsSync(abs)) continue;
    files.push(...walk(abs));
  }
  return files;
}

function inferAppPath(htmlFile) {
  // guides/best-ways-to-learn-vocabulary/index.html -> /guides/best-ways-to-learn-vocabulary/
  const rel = "/" + relative(ROOT, htmlFile).replace(/index\.html$/, "");
  return rel;
}

function q(text) {
  if (text == null) return undefined;
  const s = String(text).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `"${s}"`;
}

function extractLangSwitch(root, currentPath) {
  // Find lang-switch nav if present
  const langNav = root.querySelector(".site-footer .lang-switch");
  if (!langNav) return [];
  const anchors = langNav.querySelectorAll("a[hreflang]");
  return anchors.map((a) => ({
    href: a.getAttribute("href"),
    hreflang: a.getAttribute("hreflang"),
    label: a.textContent.trim(),
    current: Boolean(a.getAttribute("aria-current")) || a.getAttribute("href") === currentPath,
  }));
}

function extractFooterExtras(root) {
  const nav = root.querySelector(".site-footer .site-footer__extras");
  if (!nav) return { extras: [], ariaLabel: undefined };
  const ariaLabel = nav.getAttribute("aria-label") || undefined;
  const anchors = nav.querySelectorAll("a");
  return {
    extras: anchors.map((a) => ({ href: a.getAttribute("href"), label: a.textContent.trim() })),
    ariaLabel,
  };
}

function extractMeta(root, canonicalPath) {
  const getMeta = (name) => root.querySelector(`meta[name="${name}"]`)?.getAttribute("content") ?? null;
  const getProp = (prop) => root.querySelector(`meta[property="${prop}"]`)?.getAttribute("content") ?? null;
  const getLink = (rel, hreflang) => {
    if (hreflang) {
      return root.querySelector(`link[rel="${rel}"][hreflang="${hreflang}"]`)?.getAttribute("href") ?? null;
    }
    return root.querySelector(`link[rel="${rel}"]`)?.getAttribute("href") ?? null;
  };

  const rawTitle = root.querySelector("title")?.textContent ?? "";
  // Strip "| Letters" suffix if present - pageMetadata applies a template.
  const title = rawTitle.replace(/\s*\|\s*Letters\s*$/i, "").trim();
  const description = getMeta("description") || getProp("og:description") || undefined;
  const ogType = getProp("og:type") || undefined;
  const ogImageRaw = getProp("og:image");
  const ogImageAlt = getProp("og:image:alt") || undefined;
  const noindex = (getMeta("robots") || "").toLowerCase().includes("noindex");

  const alternates = {};
  for (const loc of ["en", "es", "nl", "de"]) {
    const href = getLink("alternate", loc);
    if (!href) continue;
    // strip site origin -> relative path
    const url = new URL(href);
    alternates[loc] = url.pathname;
  }
  if (!Object.keys(alternates).length) {
    // default to self under current lang detected from <html lang>
    const lang = root.querySelector("html")?.getAttribute("lang") || "en";
    const locale = lang.toLowerCase().startsWith("es") ? "es" : lang.slice(0, 2);
    alternates[locale] = canonicalPath;
  }

  // Prefer <html lang>
  const htmlLang = (root.querySelector("html")?.getAttribute("lang") || "en").toLowerCase();
  const locale = htmlLang.startsWith("es")
    ? "es"
    : htmlLang.startsWith("nl")
      ? "nl"
      : htmlLang.startsWith("de")
        ? "de"
        : "en";

  // JSON-LD
  const jsonLd = root
    .querySelectorAll('script[type="application/ld+json"]')
    .map((s) => s.textContent.trim())
    .filter(Boolean);

  // og:image -> relative path if same host
  let ogImage;
  if (ogImageRaw) {
    try {
      const u = new URL(ogImageRaw);
      if (u.hostname.includes("letters.game")) ogImage = u.pathname;
      else ogImage = ogImageRaw;
    } catch {
      ogImage = ogImageRaw;
    }
  }

  return { title, description, ogType, ogImage, ogImageAlt, noindex, alternates, locale, jsonLd };
}

/** Escape for JSX text content (keeps entities readable, escapes braces). */
function escapeJsxText(s) {
  return s
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const HTML_ATTR_TO_JSX = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  colspan: "colSpan",
  rowspan: "rowSpan",
  maxlength: "maxLength",
  autocomplete: "autoComplete",
  autoplay: "autoPlay",
  readonly: "readOnly",
  contenteditable: "contentEditable",
  crossorigin: "crossOrigin",
  hreflang: "hrefLang",
  itemscope: "itemScope",
  itemtype: "itemType",
  itemprop: "itemProp",
  srcset: "srcSet",
};

function attrsToJsx(node, options = {}) {
  const skip = new Set(options.skip || []);
  const parts = [];
  for (const attr of Object.keys(node.attributes || {})) {
    if (skip.has(attr)) continue;
    let name = HTML_ATTR_TO_JSX[attr] || attr;
    // Leave data-* / aria-* as-is (JSX accepts them)
    const value = node.attributes[attr];
    if (name === "itemScope") {
      parts.push(`itemScope`);
      continue;
    }
    if (value === "" || value == null) {
      parts.push(name);
      continue;
    }
    const esc = value.replace(/\\/g, "\\\\").replace(/"/g, "&quot;");
    parts.push(`${name}="${esc}"`);
  }
  return parts.length ? " " + parts.join(" ") : "";
}

const VOID_TAGS = new Set(["br", "hr", "img", "input", "meta", "link", "source"]);
const FORCE_ANCHOR_HREF_EXTERNAL = /^(?:https?:)?\/\//i;

const usedComponents = new Set();

function isInternalHref(href) {
  if (!href) return false;
  if (FORCE_ANCHOR_HREF_EXTERNAL.test(href)) return false;
  if (href.startsWith("#")) return false;
  if (href.startsWith("mailto:")) return false;
  if (href.startsWith("tel:")) return false;
  return href.startsWith("/");
}

/** Recursively convert a parsed HTML node to a JSX source string. */
function nodeToJsx(node, depth = 0) {
  if (node.nodeType === 3) {
    return escapeJsxText(node.rawText || "");
  }
  if (!node.tagName) {
    return node.childNodes.map((c) => nodeToJsx(c, depth)).join("");
  }
  const tag = node.tagName.toLowerCase();

  // Special-case: card-demo inside article
  if (tag === "section" && (node.getAttribute("class") || "").includes("card-demo")) {
    const words = (node.getAttribute("data-letters-card-words") || "").split(/[,|]/).map((s) => s.trim()).filter(Boolean);
    const clueLocale = (node.getAttribute("data-letters-clue-locale") || "").toLowerCase();
    const initialClueNode = node.querySelector(".card-demo__clue");
    const initialClue = initialClueNode ? initialClueNode.textContent.trim() : undefined;
    usedComponents.add("CardDemo");
    const props = [];
    if (words.length) props.push(`words={${JSON.stringify(words)}}`);
    if (clueLocale === "es" || clueLocale === "en") props.push(`clueLocale="${clueLocale}"`);
    if (initialClue) props.push(`initialClue=${q(initialClue)}`);
    return `<CardDemo${props.length ? " " + props.join(" ") : ""} />`;
  }

  // Special-case: letters-word-mount containing a .word
  if (tag === "div" && (node.getAttribute("class") || "").includes("letters-word-mount")) {
    const wordEl = node.querySelector(".word");
    // If the inner node is a card-demo (e.g. learn/spanish/), render that as CardDemo
    const cardEl = node.querySelector(".card-demo");
    if (cardEl) {
      // Mark as embedded so the component wraps itself in .letters-word-mount
      const inner = nodeToJsx(cardEl, depth);
      return inner.replace(/^<CardDemo/, "<CardDemo embedded");
    }
    if (wordEl) {
      const staticWord = wordEl.getAttribute("data-static-word");
      const wordsAttr = wordEl.getAttribute("data-letters-words");
      const interval = wordEl.getAttribute("data-letters-interval");
      const rotate = wordEl.getAttribute("data-letters-rotate");
      const ariaLive = wordEl.getAttribute("aria-live");
      const id = wordEl.getAttribute("id");
      usedComponents.add("LettersWordInline");
      const props = [];
      if (staticWord) props.push(`staticWord=${q(staticWord)}`);
      if (wordsAttr) {
        const list = wordsAttr.split(/[,|]/).map((s) => s.trim()).filter(Boolean);
        props.push(`words={${JSON.stringify(list)}}`);
      }
      if (interval) props.push(`intervalMs={${parseInt(interval, 10)}}`);
      if (rotate === "random" || rotate === "sequential") props.push(`rotate="${rotate}"`);
      if (ariaLive) props.push(`ariaLive="${ariaLive}"`);
      if (id) props.push(`id=${q(id)}`);
      return `<LettersWordInline${props.length ? " " + props.join(" ") : ""} />`;
    }
  }

  // Special-case: .beta-cta with download button
  if (tag === "p" && (node.getAttribute("class") || "").includes("beta-cta")) {
    const a = node.querySelector("a.beta-cta__btn");
    if (a) {
      const href = a.getAttribute("href");
      const isExternal = !isInternalHref(href);
      const label = a.textContent.trim();
      const APP = "https://testflight.apple.com/join/3jNtcz3K";
      if (href === APP) {
        usedComponents.add("DownloadCta");
        return `<DownloadCta label=${q(label)} />`;
      }
      usedComponents.add("DownloadCta");
      return `<DownloadCta label=${q(label)} href=${q(href)} external={${isExternal ? "true" : "false"}} />`;
    }
  }

  // Plain tags
  const children = node.childNodes.map((c) => nodeToJsx(c, depth + 1)).join("");

  // Convert <a href="/..."> to <Link>
  if (tag === "a") {
    const href = node.getAttribute("href");
    if (isInternalHref(href)) {
      usedComponents.add("Link");
      const attrs = attrsToJsx(node, { skip: ["href"] });
      return `<Link href=${q(href)}${attrs}>${children}</Link>`;
    }
  }

  if (VOID_TAGS.has(tag)) {
    return `<${tag}${attrsToJsx(node)} />`;
  }
  return `<${tag}${attrsToJsx(node)}>${children}</${tag}>`;
}

function buildArticleJsx(root) {
  const article = root.querySelector("article.article-post");
  if (!article) return null;
  return nodeToJsx(article, 0);
}

function generatePageFile(htmlFile) {
  const html = readFileSync(htmlFile, "utf8");
  const root = parse(html, { lowerCaseTagName: true, comment: false, blockTextElements: { script: false, style: false } });
  const canonicalPath = inferAppPath(htmlFile);
  if (SKIP_PATHS.has(canonicalPath)) return null;

  const meta = extractMeta(root, canonicalPath);
  const articleJsx = buildArticleJsx(root);
  if (!articleJsx) return null;

  usedComponents.clear();
  const body = articleJsx; // nodeToJsx already collected usedComponents
  // re-run to populate usedComponents deterministically
  usedComponents.clear();
  const finalArticleJsx = nodeToJsx(root.querySelector("article.article-post"), 0);

  const extras = extractFooterExtras(root);
  const langs = extractLangSwitch(root, canonicalPath);
  const topbarBrandIsLetters = Boolean(root.querySelector(".article-topbar__brand"));
  const topbarCtaLabel =
    root.querySelector(".article-topbar__cta")?.textContent.trim() || "Download";

  const hasCardDemo = usedComponents.has("CardDemo");
  const hasWord = usedComponents.has("LettersWordInline");
  const hasLink = usedComponents.has("Link");
  const hasDownloadCta = usedComponents.has("DownloadCta");

  // A couple of pages include the footer madeBy text in non-English. Detect it.
  const madeByP = root.querySelector(".site-footer p");
  let madeByLabel;
  if (madeByP) {
    const ochoA = madeByP.querySelector("a");
    if (ochoA) {
      const txt = madeByP.textContent;
      const label = ochoA.textContent.trim();
      madeByLabel = txt.replace(label, "").trim();
    }
  }

  const imports = [
    `import type { Metadata } from "next";`,
    hasLink ? `import Link from "next/link";` : null,
    `import { ArticleTopbar } from "@/components/ArticleTopbar";`,
    `import { ArticleBodyClass } from "@/components/ArticleBodyClass";`,
    `import { SiteFooter } from "@/components/SiteFooter";`,
    `import { LocaleEffect } from "@/components/LocaleEffect";`,
    hasWord ? `import { LettersWordInline } from "@/components/LettersWord";` : null,
    hasCardDemo ? `import { CardDemo } from "@/components/CardDemo";` : null,
    hasDownloadCta ? `import { DownloadCta } from "@/components/DownloadCta";` : null,
    `import { pageMetadata } from "@/lib/seo";`,
  ].filter(Boolean).join("\n");

  const altProps = Object.entries(meta.alternates)
    .map(([k, v]) => `    ${k}: ${q(v)},`)
    .join("\n");

  const extraOgType = meta.ogType && meta.ogType !== "website" ? `\n  ogType: ${q(meta.ogType)},` : "";
  const extraOgImage = meta.ogImage ? `\n  ogImage: ${q(meta.ogImage)},` : "";
  const extraOgImageAlt = meta.ogImageAlt ? `\n  ogImageAlt: ${q(meta.ogImageAlt)},` : "";
  const extraNoindex = meta.noindex ? `\n  noindex: true,` : "";

  const metadataCode = `export const metadata: Metadata = pageMetadata({
  title: ${q(meta.title)},
  ${meta.description ? `description: ${q(meta.description)},\n  ` : ""}path: ${q(canonicalPath)},
  locale: ${q(meta.locale)},
  alternates: {
${altProps}
  },${extraOgType}${extraOgImage}${extraOgImageAlt}${extraNoindex}
});`;

  const jsonLdTags = meta.jsonLd
    .map((raw) => {
      // Minify whitespace & escape backticks for template literals
      const oneLine = raw.replace(/\s+/g, " ").trim().replace(/`/g, "\\`");
      return `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: \`${oneLine}\` }} />`;
    })
    .join("\n");

  const extrasJsx = extras.extras.length
    ? `
        extras={[
${extras.extras.map((e) => `          { href: ${q(e.href)}, label: ${q(e.label)} },`).join("\n")}
        ]}`
    : "";
  const langsJsx = langs.length
    ? `
        langs={[
${langs.map((l) => `          { href: ${q(l.href)}, hreflang: ${q(l.hreflang)}, label: ${q(l.label)}${l.current ? ", current: true" : ""} },`).join("\n")}
        ]}`
    : "";

  const pageTypeProp = `\n        pageType="article"`;
  const madeByProp = madeByLabel && madeByLabel !== "Letters is made by"
    ? `\n        madeByLabel=${q(madeByLabel)}`
    : "";
  const extrasAriaLabel = extras.ariaLabel && extras.ariaLabel !== "Site"
    ? `\n        extrasAriaLabel=${q(extras.ariaLabel)}`
    : "";
  const ctaLabelProp = topbarCtaLabel && topbarCtaLabel !== "Download" ? ` ctaLabel=${q(topbarCtaLabel)}` : "";

  // Build the page body
  const code = `${imports}

${metadataCode}

export default function Page() {
  return (
    <>
      <LocaleEffect locale=${q(meta.locale)} />
      <ArticleBodyClass />
${jsonLdTags ? jsonLdTags + "\n" : ""}      <ArticleTopbar${ctaLabelProp} />
      <main id="main" className="article-wrap">
        ${finalArticleJsx}
      </main>
      <SiteFooter
        locale=${q(meta.locale)}${pageTypeProp}${madeByProp}${extrasAriaLabel}${extrasJsx}${langsJsx}
      />
    </>
  );
}
`;

  return { canonicalPath, code };
}

function targetPagePath(canonicalPath) {
  // canonicalPath like /guides/foo/ -> src/app/guides/foo/page.tsx
  const dir = join(ROOT, "src/app", canonicalPath.replace(/^\/+/, "").replace(/\/+$/, ""));
  return { dir, file: join(dir, "page.tsx") };
}

function main() {
  const files = collectHtmlFiles();
  let written = 0;
  let skipped = 0;
  const errors = [];
  for (const f of files) {
    const rel = relative(ROOT, f);
    try {
      const canonicalPath = inferAppPath(f);
      if (SKIP_PATHS.has(canonicalPath)) {
        skipped++;
        continue;
      }
      const out = generatePageFile(f);
      if (!out) {
        skipped++;
        continue;
      }
      const { dir, file } = targetPagePath(out.canonicalPath);
      mkdirSync(dir, { recursive: true });
      writeFileSync(file, out.code, "utf8");
      written++;
    } catch (e) {
      errors.push(`${rel}: ${e.message}`);
    }
  }
  console.log(`converted ${written} pages, skipped ${skipped}`);
  if (errors.length) {
    console.error("errors:");
    for (const e of errors) console.error("  " + e);
    process.exit(1);
  }
}

main();
