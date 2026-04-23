import type { Metadata } from "next";
import { CardDemo } from "@/components/CardDemo";
import { DownloadCta } from "@/components/DownloadCta";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { footerLanguageLinks } from "@/lib/languages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Download Letters on the App Store",
  description: "Play Letters, the word game from Ocho. Available on the App Store.",
  path: "/",
  locale: "en",
  alternates: { en: "/", es: "/es/" },
  ogImageAlt: "Download Letters on the App Store",
});

export default function HomePage() {
  return (
    <>
      <LocaleEffect locale="en" />
      <main className="main main--interactive">
        <div className="main__stage">
          <CardDemo clueLocale="en" initialClue="Learn" />
        </div>
        <DownloadCta label="Download Letters" />
      </main>
      <SiteFooter
        locale="en"
        extras={[
          { href: "/guides/best-ways-to-learn-vocabulary/", label: "Learn vocabulary" },
          { href: "/guides/", label: "All guides" },
        ]}
        langs={footerLanguageLinks("en", { en: "/", es: "/es/" })}
      />
    </>
  );
}
