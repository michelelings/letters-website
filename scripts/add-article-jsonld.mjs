/**
 * For each page with schemaArticle, insert articleJsonLd if missing, using
 * title, description, and path from the pageMetadata(...) call.
 * Run: node scripts/add-article-jsonld.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { execSync } from "child_process";

const quoted = (s) => String.raw`"((?:\\.|[^"\\])*)"`;

function extractField(content, field) {
  const re = new RegExp(`${field}:\\s*${quoted()}`, "m");
  const m = re.exec(content);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n") : null;
}

function processFile(path) {
  let content = readFileSync(path, "utf8");
  if (!content.includes("schemaArticle") || content.includes("articleJsonLd")) {
    return { path, changed: false, reason: "skip" };
  }
  const title = extractField(content, "title");
  const p = extractField(content, "path");
  const desc = extractField(content, "description");
  if (!title || !p) {
    return { path, changed: false, reason: "parse fail" };
  }
  const descLine =
    desc != null
      ? `        description: ${JSON.stringify(desc)},\n`
      : "";
  const block = `      articleJsonLd={{
        path: ${JSON.stringify(p)},
        headline: ${JSON.stringify(title)},
${descLine}      }}`;
  const blockLines = block.split("\n");

  const lines = content.split("\n");
  const idx = lines.findIndex((l) => /^\s*schemaArticle\s*$/.test(l));
  if (idx === -1) {
    return { path, changed: false, reason: "no schema line" };
  }
  if (lines[idx + 1]?.trim().startsWith("articleJsonLd")) {
    return { path, changed: false, reason: "skip" };
  }
  lines.splice(idx + 1, 0, ...blockLines);
  writeFileSync(path, lines.join("\n"), "utf8");
  return { path, changed: true };
}

let files;
try {
  const out = execSync('rg -l "schemaArticle" -g "page.tsx" src/app', {
    encoding: "utf8",
  });
  files = out.split("\n").filter(Boolean);
} catch {
  // rg missing: fall back
  const out = execSync("find src/app -name page.tsx -print", {
    encoding: "utf8",
  });
  files = out
    .split("\n")
    .filter(Boolean)
    .filter((f) => {
      if (!existsSync(f)) return false;
      return readFileSync(f, "utf8").includes("schemaArticle");
    });
}

const results = files.map((f) => processFile(f));
const changed = results.filter((r) => r.changed);
const failed = results.filter(
  (r) => r.reason === "parse fail" && !r.changed,
);
console.log("Updated", changed.length, "of", files.length, "candidates");
for (const r of failed) console.log("parse fail:", r.path);
