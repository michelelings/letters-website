import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Por qué aprender vocabulario con juegos funciona",
  description: "Por qué aprender vocabulario con juegos funciona: práctica de recuperación, motivación, repetición espaciada disfrazada, enfoque cercano a la ciencia, Letters.",
  path: "/es/guides/por-que-aprender-vocabulario-con-juegos/",
  locale: "es",
  alternates: {
    en: "/guides/why-learn-vocabulary-through-games/",
    es: "/es/guides/por-que-aprender-vocabulario-con-juegos/",
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
        path: "/es/guides/por-que-aprender-vocabulario-con-juegos/",
        headline: "Por qué aprender vocabulario con juegos funciona",
        description: "Por qué aprender vocabulario con juegos funciona: práctica de recuperación, motivación, repetición espaciada disfrazada, enfoque cercano a la ciencia, Letters.",
      }}

        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
        langs={[
          { href: "/guides/why-learn-vocabulary-through-games/", hreflang: "en", label: "English" },
          { href: "/es/guides/por-que-aprender-vocabulario-con-juegos/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Por qué aprender vocabulario con juegos funciona</h1>
      <p className="article-lead" itemProp="description">¿<strong>Por qué aprender vocabulario con juegos</strong>? Porque la memoria duradera pide <strong>recuperar</strong> palabras con un reto razonable, <strong>volver</strong> a ellas en un ritmo sensato y hacerlo el tiempo suficiente para crear <strong>hábito</strong>, y un buen juego apila eso sin que parezca un examen.</p>
      
      <h2>Los juegos obligan a recuperar, no solo a mirar</h2>
      <p>Leer una lista es cómodo; sacar la palabra de memoria es lo que la afianza. Deletrear, encontrar la palabra o montarla desde letras es <strong>práctica de recuperación</strong> con otro disfraz.</p>
      
      <h2>La motivación compra repeticiones que saltarías</h2>
      <p>El repaso espaciado funciona en papel, pero los humanos evitamos deberes aburridos. Rachas, niveles y victorias rápidas no son infantiles: son <strong>palancas</strong> que te mantienen en contacto con el idioma.</p>
      
      <h2>La fricción imita la presión real (un poco)</h2>
      <p>Un cronómetro suave, letras limitadas o una ronda corta crean la tensión que el cerebro recuerda. No es pánico de examen: es evitar que el reconocimiento pasivo finja ser saber.</p>
      
      <h2>La variedad reduce interferencias</h2>
      <p>Mezclar reconocimiento, producción y categorías abre más caminos de memoria que una sola orientación de ficha. Los juegos rotan formatos si el diseño entiende vocabulario, no solo reflejos.</p>
      
      <h2>Cuando el juego no basta</h2>
      <p>Sigue necesitando input: lectura, audio, conversación. El juego complementa la inmersión; raramente la sustituye. Úsalo como <strong>motor de memoria léxica</strong>, no como dieta completa.</p>
      
      <h2>Letters y esta idea</h2>
      <p><strong>Letters</strong> apuesta por rondas cortas y táctiles para quien quiere práctica con recuperación fuerte que siga sintiéndose a juego.</p>
      
      <h2>Resumen</h2>
      <p>Los juegos sirven cuando priorizan recuperación, contacto espaciado y motivación sostenible, no cuando solo premian la velocidad. Elige mecánicas que te hagan <em>producir</em> palabras y deja la inmersión en otras capas del sistema.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/juegos-palabras-vs-fichas-vocabulario/",
      label: <>Juegos de palabras vs fichas</>,
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
