/**
 * Minimal flat config. Next.js handles TypeScript + JSX correctness through
 * the `next build` step (TypeScript checker). Keep this lean to avoid the
 * compat issue with `@rushstack/eslint-patch` x Next 16 / ESLint 9.
 */
const config = [
  {
    ignores: [".next/**", "out/**", "node_modules/**", "scripts/**", "src/lib/*.legacy.js"],
  },
];

export default config;
