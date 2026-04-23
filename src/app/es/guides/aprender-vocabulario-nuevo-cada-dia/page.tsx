import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario nuevo cada día: un sistema sencillo",
  description: "Aprende vocabulario nuevo cada día: límite de altas, ritmo de repaso, captura rápida y recuperación lúdica, Letters.",
  path: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
  locale: "es",
  alternates: {
    en: "/guides/learn-new-vocabulary-every-day/",
    es: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
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
        path: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
        headline: "Aprender vocabulario nuevo cada día: un sistema sencillo",
        description: "Aprende vocabulario nuevo cada día: límite de altas, ritmo de repaso, captura rápida y recuperación lúdica, Letters.",
      }}
      i18nAlternates={{
        en: "/guides/learn-new-vocabulary-every-day/",
        es: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "es", path: "/es/guides/aprender-vocabulario-nuevo-cada-dia/", label: "Aprender vocabulario nuevo cada día: un sistema sencillo" })}

        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario nuevo cada día: un sistema sencillo</h1>
      <p className="article-lead" itemProp="description">Para <strong>aprender vocabulario nuevo cada día</strong> sin ahogarte, limita las <strong>altas</strong>, protege los <strong>repasos</strong>, <strong>captura</strong> palabras de la vida real y termina con <strong>recuperación</strong>, no con otro scroll pasivo.</p>
      
      <h2>Regla uno: pocos nuevos, muchos viejos</h2>
      <p>Suma pocas palabras frescas al día; dedica la mayor parte del tiempo a ayer y a la semana pasada. El crecimiento parece lento día a día y notable mes a mes, ese es el trueque que quieres.</p>
      
      <h2>Lleva una herramienta de captura</h2>
      <p>Cartas, frases oídas, subtítulos: anota en segundos. Las capturas sin procesar generan culpa; las procesadas son el trabajo de mañana de cinco minutos.</p>
      
      <h2>Cierra bucles cada semana</h2>
      <p>Un día a la semana, borra duplicados, fusiona sinónimos que confundes y promueve lo que ya dominas. Sin podar, las colas se pudren.</p>
      
      <h2>Alterna modos</h2>
      <p>Lee, escucha, di, escribe. Si solo reconoces, la producción va a la zaga. Si solo memorizas, falta contexto. Alterna.</p>
      
      <h2>El juego puede ser lo principal</h2>
      <p>Los juegos que obligan a deletrear y recuperar cuentan como estudio serio. <strong>Letters</strong> es para quien quiere tocarse el idioma a diario sin abrir un aula virtual.</p>
      
      <h2>Resumen</h2>
      <p>Limita altas, prioriza repasos, captura de la vida, poda semanal y modos mixtos. El sistema es simple en papel; funciona cuando no saltas la parte aburrida del medio.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-diario/",
      label: <>Aprender vocabulario a diario (guía central)</>,
      },
      {
      href: "/es/guides/aprender-mas-vocabulario-5-minutos/",
      label: <>Más vocabulario en 5 minutos al día</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/",
      label: <>Todas las guías</>,
      }
      ]}
      />
      
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: un juego de palabras de Ocho. Sesiones cortas y fichas táctiles, pensado para quien quiere jugar antes que agobiarse.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
