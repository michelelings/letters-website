import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production (GitHub project site): /letters-website/
// Local dev: /. Override build: VITE_BASE=/ npm run build
export default defineConfig(({ command }) => ({
  base:
    command === "build"
      ? (process.env.VITE_BASE ?? "/letters-website/")
      : "/",
  plugins: [react()],
}));
