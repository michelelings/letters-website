import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario alemán con práctica diaria tipo puzle",
  description: "Aprende vocabulario alemán: palabras compuestas, viaje y práctica en microdosis tipo puzle, Letters.",
  path: "/es/guides/aprender-vocabulario-aleman/",
  locale: "es",
  alternates: {
    en: "/guides/learn-german-vocabulary/",
    es: "/es/guides/aprender-vocabulario-aleman/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Letters: juego de palabras de Ocho",
});

export default function Page() {
  return (
    <ArticlePage
      topbar={{ ctaLabel: "Descargar" }}
      schemaArticle
      articleJsonLd={{
        path: "/es/guides/aprender-vocabulario-aleman/",
        headline: "Aprender vocabulario alemán con práctica diaria tipo puzle",
        description: "Aprende vocabulario alemán: palabras compuestas, viaje y práctica en microdosis tipo puzle, Letters.",
      }}
      i18nAlternates={{
        en: "https://www.letters.game/guides/learn-german-vocabulary/",
        es: "https://www.letters.game/es/guides/aprender-vocabulario-aleman/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "es", path: "/es/guides/aprender-vocabulario-aleman/", label: "Aprender vocabulario alemán con práctica diaria tipo puzle" })}

        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario alemán con práctica diaria tipo puzle</h1>
      <p className="article-lead" itemProp="description">Para <strong>aprender vocabulario alemán</strong>, trata los <strong>compuestos</strong> como puzles, aprende <strong>frases de viaje</strong> y repite en <strong>rondas diarias cortas</strong> para que género y casos pesen menos.</p>
      
      <h2>Los compuestos son oportunidad</h2>
      <p>Desglosar partes (Brot, Butter…) enseña patrones.</p>
      <h2>Frases para viaje y día a día</h2>
      <p>Entrena lo que realmente dirías en voz alta.</p>
      <h2>Anclajes de género</h2>
      <p>Une artículos a imágenes vivas antes de tablas infinitas.</p>
      <h2>Diario vence al heroico</h2>
      <p>Micropráctica estable gana a maratones raros.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> sirve para bucles deletreo/recuerdo sin derrochar atención.</p>
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
      label: <>Alemán sin gramática a la fuerza</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-espanol/",
      label: <>Aprender vocabulario en español</>,
      },
      {
      href: "/es/guides/",
      label: <>Todas las guías</>,
      }
      ]}
      />
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho; juega primero.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
