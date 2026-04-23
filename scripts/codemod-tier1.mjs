/**
 * Applies Tier 1 article components: Term, Lead, ArticleCta, RelatedLinks, ArticlePage.
 * Run from repo root: node scripts/codemod-tier1.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const SKIP = new Set([
  "src/app/page.tsx",
  "src/app/es/page.tsx",
  "src/app/not-found.tsx",
]);

function replaceSimpleSpanLang(content) {
  let out = content;
  let prev;
  do {
    prev = out;
    out = out.replace(
      /<span lang="([^"]+)">([^<]*)<\/span>/,
      '<Term lang="$1">$2</Term>',
    );
  } while (out !== prev);
  return out;
}

function replaceLead(content) {
  return content.replace(
    /<p className="article-lead">([\s\S]*?)<\/p>/g,
    (_m, inner) => `<Lead>${inner.trim()}</Lead>`,
  );
}

function replaceArticleCtaBlocks(content) {
  let out = content.replace(
    /<div className="article-cta-box">\s*([\s\S]*?)\s*<\/div>\s*<DownloadCta\s+([\s\S]*?)\/>/g,
    (_m, boxInner, downloadProps) =>
      `<ArticleCta ${downloadProps.trim()}>\n        ${boxInner.trim()}\n      </ArticleCta>`,
  );
  out = out.replace(/<DownloadCta\s+([\s\S]*?)\/>/g, "<ArticleCta $1 />");
  return out;
}

function parseRelatedNavs(content) {
  const navRe =
    /<nav className="article-related" aria-label="([^"]+)">\s*<h2>([\s\S]*?)<\/h2>\s*<ul>\s*([\s\S]*?)<\/ul>\s*<\/nav>/g;
  let out = content;
  let m;
  while ((m = navRe.exec(content)) !== null) {
    const full = m[0];
    const aria = m[1];
    const heading = m[2].trim();
    const ulInner = m[3];
    const items = [];
    const liRe =
      /<li><Link href="([^"]+)"([^>]*)>([\s\S]*?)<\/Link><\/li>/g;
    let li;
    while ((li = liRe.exec(ulInner)) !== null) {
      const [, href, linkRest, labelRaw] = li;
      const hrefLangM = /hrefLang="([^"]+)"/.exec(linkRest);
      const hreflangM = /hreflang="([^"]+)"/.exec(linkRest);
      const hl = hrefLangM?.[1] ?? hreflangM?.[1];
      const labelTrim = labelRaw.trim();
      let itemStr = `{\n          href: "${href}",\n          label: <>${labelTrim}</>,\n        }`;
      if (hl) {
        itemStr = `{\n          href: "${href}",\n          label: <>${labelTrim}</>,\n          linkProps: { hrefLang: "${hl}" },\n        }`;
      }
      items.push(itemStr);
    }
    if (items.length === 0) continue;
    const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const block = `<RelatedLinks
        ariaLabel="${esc(aria)}"
        heading="${esc(heading)}"
        items={[
${items.join(",\n")}
        ]}
      />`;
    out = out.replace(full, block);
  }
  return out;
}

function topbarLineFromPropsString(raw) {
  const t = raw.trim();
  if (!t) return "";
  const brandM = /brand="([^"]+)"/.exec(t);
  const ctaM = /ctaLabel="([^"]+)"/.exec(t);
  const parts = [];
  if (brandM) parts.push(`brand: "${brandM[1]}"`);
  if (ctaM) parts.push(`ctaLabel: "${ctaM[1]}"`);
  if (parts.length === 0) return "";
  return `      topbar={{ ${parts.join(", ")} }}\n`;
}

function applyArticlePage(content) {
  const re =
    /return \(\s*<>\s*<LocaleEffect locale="([^"]+)"\s*\/>\s*<ArticleBodyClass\s*\/>\s*<ArticleTopbar\s*([\s\S]*?)\s*\/>\s*<main id="main" className="article-wrap">\s*<article className="article-post"([^>]*)\s*>([\s\S]*?)<\/article>\s*<\/main>\s*<SiteFooter(\s*[\s\S]*?)\s*\/>\s*<\/>\s*\);/;
  const m = re.exec(content);
  if (!m) {
    return { content, ok: false };
  }
  // 1=LocaleEffect locale, 2=ArticleTopbar props, 3=article attributes, 4=child markup, 5=SiteFooter props
  const topbarLine = topbarLineFromPropsString(m[2] ?? "");
  const hasSchema = /itemScope/.test(m[3] ?? "");
  const schemaLine = hasSchema ? "      schemaArticle\n" : "";
  const body = (m[4] ?? "")
    .replace(/^\s*\n/, "")
    .split("\n")
    .map((line) => `      ${line.replace(/^\s*/, "")}`)
    .join("\n");
  const foot = m[5] ?? "";
  const replacement = `return (
    <ArticlePage
${topbarLine}${schemaLine}${foot}
    >
${body}
    </ArticlePage>
  );`;
  return { content: content.replace(re, replacement), ok: true };
}

function fixImports(content) {
  let out = content;
  const uses = {
    ArticlePage: /<ArticlePage[\s/>]/,
    ArticleCta: /<ArticleCta[\s/>]/,
    Lead: /<Lead[\s/>]/,
    RelatedLinks: /<RelatedLinks[\s/>]/,
    Term: /<Term[\s/>]/,
    VocabList: /<VocabList[\s/>]/,
  };
  const needed = Object.entries(uses)
    .filter(([, r]) => r.test(out))
    .map(([name]) => name);

  out = out.replace(
    /^import \{[^}]*\} from "@\/components\/ArticleTopbar";\n/gm,
    "",
  );
  out = out.replace(
    /^import \{[^}]*\} from "@\/components\/ArticleBodyClass";\n/gm,
    "",
  );
  out = out.replace(
    /^import \{[^}]*\} from "@\/components\/LocaleEffect";\n/gm,
    "",
  );
  out = out.replace(
    /^import \{[^}]*\} from "@\/components\/SiteFooter";\n/gm,
    "",
  );
  out = out.replace(
    /^import \{ DownloadCta \} from "@\/components\/DownloadCta";\n/gm,
    "",
  );

  const articleImportRe = /import \{[^}]+\} from "@\/components\/article";\n/;
  if (needed.length > 0) {
    const importLine = `import { ${needed.join(", ")} } from "@/components/article";\n`;
    if (articleImportRe.test(out)) {
      out = out.replace(articleImportRe, importLine);
    } else {
      const metaMatch = out.match(/^import type \{ Metadata \} from "next";\n/m);
      if (metaMatch) {
        const idx = metaMatch.index + metaMatch[0].length;
        out = out.slice(0, idx) + importLine + out.slice(idx);
      } else {
        out = importLine + out;
      }
    }
  }

  return out;
}

function processFile(path) {
  let content = readFileSync(path, "utf8");
  if (!content.includes("ArticleTopbar")) {
    return { path, changed: false, reason: "no ArticleTopbar" };
  }

  content = replaceSimpleSpanLang(content);
  content = replaceLead(content);
  content = replaceArticleCtaBlocks(content);
  content = parseRelatedNavs(content);

  const ap = applyArticlePage(content);
  if (!ap.ok) {
    return { path, changed: false, reason: "ArticlePage regex failed" };
  }
  content = ap.content;
  content = fixImports(content);

  writeFileSync(path, content, "utf8");
  return { path, changed: true };
}

const files = execSync("find src/app -name page.tsx -print", { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter(Boolean)
  .filter((f) => !SKIP.has(f));

const results = [];
for (const f of files) {
  try {
    results.push(processFile(f));
  } catch (e) {
    results.push({ path: f, error: String(e) });
  }
}

const failed = results.filter((r) => r.reason === "ArticlePage regex failed");
const ok = results.filter((r) => r.changed);
const skipped = results.filter((r) => r.reason === "no ArticleTopbar");
console.log("Updated:", ok.length, "Skipped:", skipped.length, "Failed ArticlePage:", failed.length);
for (const r of failed) console.log("  ", r.path);
for (const r of results.filter((x) => x.error)) console.log("Error", r.path, r.error);
