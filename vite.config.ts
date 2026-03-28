import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production default: / (Vercel, netlify, custom domain).
// GitHub Pages project site: set VITE_BASE=/letters-website/ in CI (see .github/workflows/pages.yml).
// Local dev: always /
export default defineConfig(({ command }) => ({
  base: command === "build" ? (process.env.VITE_BASE ?? "/") : "/",
  plugins: [react()],
}));
