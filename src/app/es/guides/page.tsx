import type { Metadata } from "next";
import { ArticlePage } from "@/components/article";
import { GuidesIndexBody } from "@/components/guides/GuidesIndexBody";
import { guidesIndexEs } from "@/content/guides-index/es.data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guías de vocabulario",
  description:
    "Guías para aprender vocabulario con juegos, hábitos diarios y consejos por idioma, Letters.",
  path: "/es/guides/",
  locale: "es",
  alternates: { en: "/guides/", es: "/es/guides/" },
});

export default function SpanishGuidesIndexPage() {
  return (
    <ArticlePage
      topbar={{ brand: "Letters", ctaLabel: "Descargar" }}
      locale="es"
      pageType="article"
      madeByLabel="Letters es de"
      extrasAriaLabel="Sitio"
      langAriaLabel="Elegir idioma"
      extras={[{ href: "/es/", label: "Inicio" }]}
      langs={[
        { href: "/guides/", hreflang: "en", label: "English" },
        { href: "/es/guides/", hreflang: "es", label: "Español", current: true },
      ]}
    >
      <GuidesIndexBody data={guidesIndexEs} />
    </ArticlePage>
  );
}
