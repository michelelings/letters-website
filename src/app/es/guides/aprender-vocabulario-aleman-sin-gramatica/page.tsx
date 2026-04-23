import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario alemán sin ejercicios de gramática",
  description: "Aprende vocabulario alemán sin fregar con la gramática al principio: frases hechas, compuestos, temas y juego, Letters.",
  path: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
  locale: "es",
  alternates: {
    en: "/guides/learn-german-vocabulary-without-grammar-drills/",
    es: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
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
        path: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
        headline: "Aprender vocabulario alemán sin ejercicios de gramática",
        description: "Aprende vocabulario alemán sin fregar con la gramática al principio: frases hechas, compuestos, temas y juego, Letters.",
      }}
      i18nAlternates={{
        en: "/guides/learn-german-vocabulary-without-grammar-drills/",
        es: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "es", path: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/", label: "Aprender vocabulario alemán sin ejercicios de gramática" })}

        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario alemán sin ejercicios de gramática</h1>
      <p className="article-lead" itemProp="description">Puedes <strong>aprender vocabulario alemán</strong> sin vivir dentro de tablas de declinación el primer mes. Empieza con <strong>frases útiles</strong>, usa la lógica de los <strong>compuestos</strong>, agrupa por <strong>viaje y vida diaria</strong> y añade gramática cuando te pida el cuerpo, no la culpa.</p>
      
      <h2>Las frases vencen a los lemas sueltos</h2>
      <p>Aprende <em>ich hätte gern…</em>, <em>wo ist…?</em>, <em>ein Ticket nach…</em> como bloques. Género y caso entran mejor cuando las palabras ya vienen vestidas para trabajar.</p>
      
      <h2>Usa los compuestos como truco mnemónico</h2>
      <p>Sustantivos largos se parten en piezas que quizá ya conoces. Entrenar la mirada convierte trabalenguas en puzles en lugar de amenazas.</p>
      
      <h2>No congeles la frase por der/die/das</h2>
      <p>Aprende artículos en las palabras de más boca; no bloquees cada frase hasta el caso perfecto. Comprende primero; pule con exposición y ejercicios puntuales después.</p>
      
      <h2>Profundidad temática antes que amplitud aleatoria</h2>
      <p>Comida, transporte, charla breve, cierra un cajón antes del siguiente. El alemán premia los patrones cuando el contexto vuelve.</p>
      
      <h2>Haz la recuperación táctil</h2>
      <p>Deletrear con letras disponibles imita armar compuestos en la cabeza. <strong>Letters</strong> encaja con quien quiere juego con fichas junto al amor alemán por las palabras largas.</p>
      
      <h2>Resumen</h2>
      <p>Alemán «palabras primero» es legítimo: chunks, compuestos, temas y gramática paciente. Puedes disfrutar el idioma antes de dominar cada declinación.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-aleman/",
      label: <>Aprender vocabulario alemán (guía central)</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
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
      <p><strong>Prueba Letters</strong>: un juego de palabras de Ocho. Sesiones cortas y fichas táctiles, pensado para quien quiere jugar antes que agobiarse.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
