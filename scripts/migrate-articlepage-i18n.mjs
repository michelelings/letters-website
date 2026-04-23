/**
 * Replaces manual `langs={...}` on ArticlePage with `i18nAlternates`, and adds
 * `breadcrumb` + guideArticleBreadcrumb for guide articles and guidesIndexBreadcrumb for guides index.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const ORDER = ["en", "es", "nl", "de"];

function parseLangsBlock(s) {
  const m = s.match(/\blangs=\{\[([\s\S]*?)\]\s*\}/);
  if (!m) return null;
  const block = m[1];
  const alts = {};
  const re = /href:\s*"([^"]+)"\s*,\s*hreflang:\s*"(en|es|nl|de)"/g;
  let match;
  while ((match = re.exec(block))) {
    alts[match[2]] = match[1];
  }
  return Object.keys(alts).length ? alts : null;
}

function formatI18nAlternates(alts) {
  const lines = [];
  for (const k of ORDER) {
    if (alts[k]) lines.push(`        ${k}: "${alts[k]}",`);
  }
  return `i18nAlternates={{\n${lines.join("\n")}\n      }}`;
}

function extractArticleJsonLd(s) {
  const start = s.indexOf("articleJsonLd={{");
  if (start < 0) return null;
  const sub = s.slice(start, start + 12_000);
  const mPath = /path:\s*"([^"]+)"/.exec(sub);
  const mHead = /headline:\s*"((?:[^"\\]|\\.)*)"/.exec(sub);
  if (!mPath || !mHead) return null;
  const unescape = (t) => t.replace(/\\"/g, '"').replace(/\\n/g, "\n");
  return { path: mPath[1], headline: unescape(mHead[1]) };
}

function endIndexAfterArticleJsonLd(s) {
  const start = s.indexOf("articleJsonLd={{");
  if (start < 0) return -1;
  const m = /\n\s+\}\s*\}/.exec(s.slice(start));
  if (!m) return -1;
  return start + m.index + m[0].length;
}

function extractLocaleFromArticlePage(s) {
  const m = s.match(/\blocale="(en|es)"/);
  return m ? m[1] : "en";
}

function ensureImport(s, importLine) {
  if (s.includes(importLine.trim())) return s;
  const firstImport = s.indexOf("import ");
  if (firstImport < 0) return importLine + "\n" + s;
  return s.slice(0, firstImport) + importLine + "\n" + s.slice(firstImport);
}

function migrateGuideArticle(content, rel) {
  const alts = parseLangsBlock(content);
  if (!alts) {
    console.warn("skip (no langs):", rel);
    return null;
  }
  const withoutLangs = content.replace(/\s*langs=\{\[[\s\S]*?\]\s*\}/, "");
  const jsonLd = extractArticleJsonLd(content);
  if (!jsonLd) {
    console.warn("skip (no articleJsonLd):", rel);
    return null;
  }
  const loc = extractLocaleFromArticlePage(content);
  if (loc !== "en" && loc !== "es") {
    console.warn("skip (unexpected locale):", rel);
    return null;
  }
  const esc = (t) => JSON.stringify(t);
  const breadcrumbCall = `breadcrumb={guideArticleBreadcrumb({ locale: ${esc(
    loc,
  )}, path: ${esc(jsonLd.path)}, label: ${esc(jsonLd.headline)} })}`;
  const i18n = formatI18nAlternates(alts);
  const end = endIndexAfterArticleJsonLd(withoutLangs);
  if (end < 0) {
    console.warn("skip (could not find articleJsonLd end):", rel);
    return null;
  }
  const insert = `\n      ${i18n}\n      ${breadcrumbCall}`;
  let out = withoutLangs.slice(0, end) + insert + withoutLangs.slice(end);
  out = ensureImport(
    out,
    'import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";',
  );
  return out;
}

function migrateGuidesIndex(content, filePath) {
  const alts = parseLangsBlock(content);
  if (!alts) return null;
  const isEs = filePath.includes("/es/guides/page.tsx");
  const p = isEs ? "/es/guides/" : "/guides/";
  const label = isEs ? "Guías de vocabulario" : "Vocabulary guides";
  const withoutLangs = content.replace(/\s*langs=\{\[[\s\S]*?\]\s*\}/, "");
  const i18n = formatI18nAlternates(alts);
  const loc = isEs ? "es" : "en";
  const breadcrumbCall = `breadcrumb={guidesIndexBreadcrumb(${JSON.stringify(
    loc,
  )}, ${JSON.stringify(p)}, ${JSON.stringify(label)})}`;
  const reLocale = /(\n)(\s+)(locale="(?:en|es)")/;
  if (!reLocale.test(withoutLangs)) {
    console.warn("skip guides index pattern:", filePath);
    return null;
  }
  const out = withoutLangs.replace(
    reLocale,
    `$1$2      ${i18n}\n      ${breadcrumbCall}\n$2$3`,
  );
  return ensureImport(
    out,
    'import { guidesIndexBreadcrumb } from "@/lib/guideBreadcrumb";',
  );
}

function main() {
  const guidesArticleFiles = new Set();
  for (const base of [path.join(root, "src/app/guides")]) {
    if (!fs.existsSync(base)) continue;
    for (const name of fs.readdirSync(base, { withFileTypes: true })) {
      if (name.isDirectory() && name.name !== "page.tsx") {
        const p = path.join(base, name.name, "page.tsx");
        if (fs.existsSync(p)) guidesArticleFiles.add(p);
      }
    }
  }
  for (const base of [path.join(root, "src/app/es/guides")]) {
    if (!fs.existsSync(base)) continue;
    for (const name of fs.readdirSync(base, { withFileTypes: true })) {
      if (name.isDirectory() && name.name !== "page.tsx") {
        const p = path.join(base, name.name, "page.tsx");
        if (fs.existsSync(p)) guidesArticleFiles.add(p);
      }
    }
  }

  for (const full of guidesArticleFiles) {
    const rel = path.relative(root, full);
    const content = fs.readFileSync(full, "utf-8");
    if (!content.includes("langs=")) {
      continue;
    }
    const out = migrateGuideArticle(content, rel);
    if (out) {
      fs.writeFileSync(full, out);
      console.log("updated", rel);
    }
  }

  for (const indexPath of [
    path.join(root, "src/app/guides/page.tsx"),
    path.join(root, "src/app/es/guides/page.tsx"),
  ]) {
    if (!fs.existsSync(indexPath)) continue;
    const rel = path.relative(root, indexPath);
    const content = fs.readFileSync(indexPath, "utf-8");
    if (!content.includes("langs=")) continue;
    const out = migrateGuidesIndex(content, indexPath);
    if (out) {
      fs.writeFileSync(indexPath, out);
      console.log("updated", rel);
    } else {
      console.warn("guides index not migrated", rel);
    }
  }
}

main();
