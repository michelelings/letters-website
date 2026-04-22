import { APP_DOWNLOAD_URL } from "@/lib/site";

export function DownloadCta({
  label = "Download Letters",
  href = APP_DOWNLOAD_URL,
  external = true,
}: {
  label?: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <p className="beta-cta">
      <a
        className="beta-cta__btn"
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    </p>
  );
}
