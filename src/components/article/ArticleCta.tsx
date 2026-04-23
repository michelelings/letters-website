import type { ComponentProps, ReactNode } from "react";
import { DownloadCta } from "@/components/DownloadCta";

type DownloadProps = ComponentProps<typeof DownloadCta>;

export function ArticleCta({
  children,
  ...downloadProps
}: { children?: ReactNode } & DownloadProps) {
  return (
    <>
      {children != null && children !== false && (
        <div className="article-cta-box">{children}</div>
      )}
      <DownloadCta {...downloadProps} />
    </>
  );
}
