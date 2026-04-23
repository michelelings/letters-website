import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, Lead, RelatedLinks } from "@/components/article";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario en español de forma divertida",
  description: "Aprende vocabulario en español de forma divertida: categorías, viaje y práctica tipo puzle para estudiantes casuales, Letters.",
  path: "/es/guides/aprender-vocabulario-espanol/",
  locale: "es",
  alternates: {
    en: "/guides/learn-spanish-vocabulary/",
    es: "/es/guides/aprender-vocabulario-espanol/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
});

export default function Page() {
  return (
    <ArticlePage
      topbar={{ ctaLabel: "Descargar" }}
      schemaArticle
      articleJsonLd={{
        path: "/es/guides/aprender-vocabulario-espanol/",
        headline: "Aprender vocabulario en español de forma divertida",
        description:
          "Aprende vocabulario en español de forma divertida: categorías, viaje y práctica tipo puzle para estudiantes casuales, Letters.",
      }}
      i18nAlternates={{
        en: "/guides/learn-spanish-vocabulary/",
        es: "/es/guides/aprender-vocabulario-espanol/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "es", path: "/es/guides/aprender-vocabulario-espanol/", label: "Aprender vocabulario en español de forma divertida" })}
        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario en español de forma divertida</h1>
      <Lead>Si quieres <strong>aprender vocabulario en español</strong> sin ambiente de examen, apóyate en <strong>temas</strong> (comida, viaje, saludos), <strong>sesiones cortas</strong> y <strong>recuperación activa</strong> en lugar de listas abstractas interminables.</Lead>
      
      <h2>Empieza por categorías</h2>
      <p>Elige conjuntos pequeños: pedir en un bar, aeropuerto, números, días. Las victorias pequeñas motivan; un mazo gigante aleatorio agota. Los temas imitan la vida real: las palabras vuelven juntas.</p>
      
      <h2>Viaje y social primero</h2>
      <p>Muchos aprendices casuales quieren sobrevivir un viaje y entablar conversación. Prioriza frases frecuentes y cortesía antes del jerga rara. Siempre puedes ampliar después.</p>
      
      <h2>Que el recuerdo sea jugable</h2>
      <p>Solo leer no basta. Deletrea sin mirar, di la palabra en voz alta antes de ver la solución o arma la palabra con letras en un puzle, un poco de presión ayuda a fijar sin ansiedad de test.</p>
      
      <h2>Pronunciación + ortografía</h2>
      <p>El español es bastante regular en grafía; pronuncia en voz alta mientras aprendes para unir sonido y letras. Cinco minutos en voz alta ganan a media hora de scroll silencioso.</p>
      
      <h2>Letters y el español casual</h2>
      <p><strong>Letters</strong> está pensado para rondas cortas y táctiles: el tipo de práctica que haces en una cola. No es un simulador de examen, es juego de palabras que puedes repetir a diario.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
      label: <>Mejor vocabulario en español para viajar</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-espanol-sin-clases/",
      label: <>Aprender vocabulario en español sin clases</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-diario/",
      label: <>Aprender vocabulario a diario</>,
      },
      {
      href: "/es/guides/",
      label: <>Todas las guías</>,
      }
      ]}
      />
      
      <RelatedLinks
        ariaLabel="Páginas de estudio"
        heading="Páginas de estudio"
        items={[
          {
            href: "/learn/spanish/",
            label: <>Resumen «Learn Spanish» (inglés en el sitio)</>,
          },
          {
            href: "/spanish/",
            label: <>Hub de español</>,
          },
          {
            href: "/learn/spanish/family-vocabulary/",
            label: <>Vocabulario de familia</>,
          },
          {
            href: "/learn/spanish/travel/restaurants/",
            label: <>Viaje: restaurantes (inglés en el sitio)</>,
          },
        ]}
      />
      
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho. Juega primero, estudia después.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
