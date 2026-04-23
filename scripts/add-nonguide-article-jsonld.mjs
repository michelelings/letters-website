/**
 * For ArticlePage routes without articleJsonLd, insert articleJsonLd + i18nAlternates
 * from pageMetadata (title, description, path, alternates: {...}).
 * Skips guides index. Run: node scripts/add-nonguide-article-jsonld.mjs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const quoted = (s) => String.raw`"((?:\\.|[^"\\])*)"`;

function extractField(content, field) {
  const re = new RegExp(`\\b${field}:\\s*${quoted()}`, "m");
  const m = re.exec(content);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n") : null;
}

function extractAlternatesObjectLiteral(content) {
  const a = content.indexOf("alternates:");
  if (a < 0) return "";
  const b = content.indexOf("{", a);
  if (b < 0) return "";
  let d = 0;
  for (let i = b; i < content.length; i++) {
    if (content[i] === "{") d++;
    else if (content[i] === "}") {
      d--;
      if (d === 0) return content.slice(b, i + 1);
    }
  }
  return "";
}

function extractLocalePaths(content) {
  const o = {};
  const block = extractAlternatesObjectLiteral(content);
  const re = /\b(en|es|nl|de):\s*"(\/[^"]*)"/g;
  let m;
  while ((m = re.exec(block))) {
    o[m[1]] = m[2];
  }
  return o;
}

function walkPageTsx(dir, out) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walkPageTsx(p, out);
    else if (name === "page.tsx") out.push(p);
  }
}

function shouldSkipFile(rel) {
  return (
    rel === "app/guides/page.tsx" ||
    rel === "app/es/guides/page.tsx" ||
    !rel.startsWith("app/")
  );
}

function processFile(absPath) {
  const rel = absPath.split("src/").pop();
  if (shouldSkipFile(rel)) return { rel, changed: false, reason: "skip" };

  let content = readFileSync(absPath, "utf8");
  if (!content.includes("<ArticlePage") || content.includes("articleJsonLd")) {
    return { rel, changed: false, reason: "skip" };
  }

  const title = extractField(content, "title");
  const p = extractField(content, "path");
  const desc = extractField(content, "description");
  if (!title || !p) {
    return { rel, changed: false, reason: "parse fail" };
  }

  let paths = extractLocalePaths(content);
  if (Object.keys(paths).length === 0) {
    const loc = extractField(content, "locale");
    const pathVal = extractField(content, "path");
    if (loc && pathVal && /^(en|es|nl|de)$/.test(loc)) {
      paths = { [loc]: pathVal };
    } else {
      return { rel, changed: false, reason: "no alternates" };
    }
  }

  const ORDER = ["en", "es", "nl", "de"];
  const lines = [];
  for (const k of ORDER) {
    if (paths[k]) lines.push(`        ${k}: "${paths[k]}",`);
  }
  const i18n = `i18nAlternates={{\n${lines.join("\n")}\n      }}`;

  const descLine =
    desc != null
      ? `        description: ${JSON.stringify(desc)},\n`
      : "";
  const block = `      articleJsonLd={{
        path: ${JSON.stringify(p)},
        headline: ${JSON.stringify(title)},
${descLine}      }}
      ${i18n}
`;

  const m = content.match(/<ArticlePage\n/);
  if (!m) {
    return { rel, changed: false, reason: "no ArticlePage newline" };
  }
  const insertAt = m.index + m[0].length;
  const next = content.slice(0, insertAt) + block + content.slice(insertAt);
  writeFileSync(absPath, next, "utf8");
  return { rel, changed: true };
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appDir = join(root, "src/app");
if (!existsSync(appDir)) {
  console.error("No src/app");
  process.exit(1);
}

const files = [];
walkPageTsx(appDir, files);
const results = files.map((f) => processFile(f));
const changed = results.filter((r) => r.changed);
const fails = results.filter(
  (r) => r.reason && r.reason !== "skip" && !r.changed,
);
console.log("Updated", changed.length, "file(s).");
for (const r of changed) console.log(" ", r.rel);
if (fails.length) {
  for (const r of fails) console.warn("not updated:", r.rel, r.reason);
}
