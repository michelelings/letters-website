#!/usr/bin/env node
/**
 * Thin wrapper for the letters-website monorepo: runs the generator inside backoffice/
 * with this repository root as the marketing site tree.
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const script = join(repoRoot, "backoffice", "scripts", "generate-pages-manifest.mjs");

const r = spawnSync(process.execPath, [script, repoRoot], { stdio: "inherit" });
process.exit(r.status ?? 1);
