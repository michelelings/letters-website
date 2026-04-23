/**
 * HTTP smoke check against a running instance. Start the app first, e.g.
 *   npm run build && npm run start
 * then:
 *   BASE_URL=http://127.0.0.1:3000 node scripts/smoke.mjs
 */
const base = (process.env.BASE_URL ?? "http://127.0.0.1:3000").replace(
  /\/$/,
  "",
);

const paths = [
  "/",
  "/es/",
  "/guides/",
  "/es/guides/",
  "/guides/best-way-to-learn-vocabulary/",
  "/learn/spanish/phrase/buenos-dias/",
  "/how-to-say/sister-in-spanish/",
];

async function main() {
  let failed = false;
  for (const p of paths) {
    const url = `${base}${p}`;
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) {
      console.error("FAIL", res.status, url);
      failed = true;
    }
  }
  if (failed) process.exit(1);
  console.log("smoke ok:", paths.length, "routes at", base);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
