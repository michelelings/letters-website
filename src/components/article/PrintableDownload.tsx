import type { ReactNode } from "react";
import Link from "next/link";

export function PrintableDownload({
  href,
  children = "Printable PDF",
  className = "article-supplement-pdf__btn",
}: {
  href: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <p className="article-supplement-pdf">
      <Link href={href} className={className} download>
        {children}
      </Link>
    </p>
  );
}
