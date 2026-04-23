import type { ReactNode } from "react";

export function Term({ lang, children }: { lang: string; children: ReactNode }) {
  return <span lang={lang}>{children}</span>;
}
