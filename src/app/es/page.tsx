import type { Metadata } from "next";
import { LettersWord } from "@/components/LettersWord";
import { DownloadCta } from "@/components/DownloadCta";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Descarga Letters en el App Store",
  description: "Juega a Letters: el juego de palabras de Ocho. Disponible en el App Store.",
  path: "/es/",
  locale: "es",
  alternates: { en: "/", es: "/es/" },
  ogImageAlt: "Descarga Letters en el App Store",
});

export default function SpanishHomePage() {
  return (
    <>
      <LocaleEffect locale="es" />
      <main className="main">
        <div className="main__stage">
          <LettersWord id="word" ariaLive="polite" />
        </div>
        <DownloadCta label="Descargar Letters" />
      </main>
      <SiteFooter
        locale="es"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        langAriaLabel="Elegir idioma"
        extras={[
          { href: "/es/guides/mejores-formas-aprender-vocabulario/", label: "Aprender vocabulario" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
        langs={[
          { href: "/", hreflang: "en", label: "English" },
          { href: "/es/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
