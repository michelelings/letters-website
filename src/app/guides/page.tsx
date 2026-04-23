import { guidesIndexBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage } from "@/components/article";
import { GuidesIndexBody } from "@/components/guides/GuidesIndexBody";
import { guidesIndexEn } from "@/content/guides-index/en.data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Vocabulary guides",
  description:
    "Guides to learn vocabulary with games, daily habits, and language-specific tips, from Letters.",
  path: "/guides/",
  locale: "en",
  alternates: { en: "/guides/", es: "/es/guides/" },
});

export default function GuidesIndexPage() {
  return (
    <ArticlePage
      i18nAlternates={{
        en: "/guides/",
        es: "/es/guides/",
      }}
      breadcrumb={guidesIndexBreadcrumb("en", "/guides/", "Vocabulary guides")}
      locale="en"
      pageType="article"
      extras={[{ href: "/", label: "Home" }]}
    >
      <GuidesIndexBody data={guidesIndexEn} />
    </ArticlePage>
  );
}
