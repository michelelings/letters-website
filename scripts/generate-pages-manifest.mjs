#!/usr/bin/env node
/**
 * Walks the marketing site repo for *.html (excluding backoffice/) and writes
 * backoffice/public/pages-manifest.json for the React backoffice.
 */
import { readdirSync, statSync, writeFileSync, mkdirSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const OUT_DIR = join(REPO_ROOT, "backoffice", "public");
const OUT_FILE = join(OUT_DIR, "pages-manifest.json");

const BASE_URL = "https://www.letters.game";

/** First path segment equals locale code (path prefix). Keep in sync with translation.md */
const PREFIX_LOCALES = new Set([
  "nl",
  "de",
  "es",
  "fr",
  "it",
  "pt",
  "pt-BR",
  "cs",
  "da",
  "pl",
  "sv",
  "ja",
  "ko",
  "zh-Hans",
  "hi",
  "ru",
  "vi",
  "id",
]);

/** Folders that are localized but do not use /{locale}/ prefix (legacy or SEO URLs). */
const LEGACY_ROOT_TO_LOCALE = {
  "hoe-zeg-je": "nl",
  "wie-sagt-man": "de",
};

const SKIP_TOP_LEVEL = new Set([
  ".git",
  "node_modules",
  ".cursor",
  "backoffice",
]);

function walkHtmlFiles(dir, root, out) {
  const names = readdirSync(dir);
  for (const name of names) {
    const full = join(dir, name);
    const relDir = relative(root, dir);
    if (dir === root && SKIP_TOP_LEVEL.has(name)) continue;

    const st = statSync(full);
    if (st.isDirectory()) {
      walkHtmlFiles(full, root, out);
    } else if (name.endsWith(".html")) {
      out.push(full);
    }
  }
}

function posix(p) {
  return p.split("/").join("/");
}

/** Web path key: no leading slash, no trailing slash; "" for homepage. */
function fileToPathKey(repoRoot, fileAbs) {
  const rel = posix(relative(repoRoot, fileAbs));
  if (rel === "index.html") return "";
  if (rel === "404.html") return "404.html";
  if (rel.endsWith("/index.html")) {
    return posix(rel.slice(0, -"/index.html".length));
  }
  return posix(rel.replace(/\.html$/i, ""));
}

function pathKeyToUrlPath(pathKey) {
  if (pathKey === "") return "/";
  if (pathKey === "404.html") return "/404.html";
  return `/${pathKey}`;
}

function classify(pathKey) {
  if (pathKey === "" || pathKey === "404.html") {
    return { locale: "en", mirrorPathKey: pathKey === "" ? "" : null };
  }
  const segments = pathKey.split("/").filter(Boolean);
  const first = segments[0];
  if (PREFIX_LOCALES.has(first)) {
    const rest = segments.slice(1).join("/");
    return { locale: first, mirrorPathKey: rest };
  }
  if (LEGACY_ROOT_TO_LOCALE[first]) {
    return { locale: LEGACY_ROOT_TO_LOCALE[first], mirrorPathKey: null };
  }
  return { locale: "en", mirrorPathKey: pathKey };
}

function main() {
  const files = [];
  walkHtmlFiles(REPO_ROOT, REPO_ROOT, files);

  const pages = files
    .map((fileAbs) => {
      const pathKey = fileToPathKey(REPO_ROOT, fileAbs);
      const { locale, mirrorPathKey } = classify(pathKey);
      const urlPath = pathKeyToUrlPath(pathKey);
      const relFile = posix(relative(REPO_ROOT, fileAbs));
      let mtimeMs = null;
      try {
        mtimeMs = statSync(fileAbs).mtimeMs;
      } catch {
        /* ignore */
      }
      return {
        locale,
        pathKey,
        mirrorPathKey,
        file: relFile,
        urlPath,
        mtimeMs,
      };
    })
    .sort((a, b) => {
      if (a.locale !== b.locale) return a.locale.localeCompare(b.locale);
      return a.pathKey.localeCompare(b.pathKey);
    });

  const manifest = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    prefixLocales: [...PREFIX_LOCALES].sort(),
    legacyRoots: { ...LEGACY_ROOT_TO_LOCALE },
    pages,
  };

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.error(`Wrote ${pages.length} pages to ${relative(REPO_ROOT, OUT_FILE)}`);
}

main();
