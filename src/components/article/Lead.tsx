import type { ReactNode } from "react";

export function Lead({ children }: { children: ReactNode }) {
  return <p className="article-lead">{children}</p>;
}
