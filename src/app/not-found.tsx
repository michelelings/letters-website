import type { Metadata } from "next";
import Link from "next/link";
import { LettersWord } from "@/components/LettersWord";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Page not found",
  description: "We could not find that page on Letters. Head back home and try again.",
  path: "/404",
  locale: "en",
  ogImage: "/og/generated/404.png",
  ogImageAlt: "Oops | Letters",
  noindex: true,
});

export default function NotFound() {
  return (
    <>
      <LocaleEffect locale="en" />
      <main className="main">
        <div className="main__stage">
          <LettersWord id="word" staticWord="Oops" ariaLive="polite" />
        </div>
        <p className="beta-cta">
          <Link className="beta-cta__btn" href="/">
            Back home
          </Link>
        </p>
      </main>
      <SiteFooter
        locale="en"
        extras={[
          { href: "/guides/best-ways-to-learn-vocabulary/", label: "Learn vocabulary" },
          { href: "/guides/", label: "All guides" },
        ]}
        langs={[
          { href: "/", hreflang: "en", label: "English", current: true },
          { href: "/es/", hreflang: "es", label: "Español" },
        ]}
      />
    </>
  );
}
