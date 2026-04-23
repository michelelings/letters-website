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
      locale="en"
      pageType="article"
      extras={[{ href: "/", label: "Home" }]}
      langs={[
        { href: "/guides/", hreflang: "en", label: "English", current: true },
        { href: "/es/guides/", hreflang: "es", label: "Español" },
      ]}
    >
      <GuidesIndexBody data={guidesIndexEn} />
    </ArticlePage>
  );
}
