import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cómo aprender vocabulario coreano (de forma divertida)",
  description: "Cómo aprender vocabulario coreano de forma divertida: Hangul rápido, temas de interés, cortesía sin miedo y hábitos sostenibles, Letters.",
  path: "/es/guides/como-aprender-vocabulario-coreano/",
  locale: "es",
  alternates: {
    en: "/guides/how-to-learn-korean-vocabulary/",
    es: "/es/guides/como-aprender-vocabulario-coreano/",
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
        path: "/es/guides/como-aprender-vocabulario-coreano/",
        headline: "Cómo aprender vocabulario coreano (de forma divertida)",
        description: "Cómo aprender vocabulario coreano de forma divertida: Hangul rápido, temas de interés, cortesía sin miedo y hábitos sostenibles, Letters.",
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
          { href: "/guides/how-to-learn-korean-vocabulary/", hreflang: "en", label: "English" },
          { href: "/es/guides/como-aprender-vocabulario-coreano/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Cómo aprender vocabulario coreano (de forma divertida)</h1>
      <p className="article-lead" itemProp="description">¿<strong>Cómo aprender vocabulario coreano</strong> cuando el maratón de drama choca con la disciplina? Trata el <strong>Hangul fluido</strong> como tarea de pocos días, arma <strong>sets temáticos</strong> alrededor de lo que ves, aprende <strong>formas corteses en bloque</strong> antes de perderse en la gramática y mantén sesiones cortas para la vida real.</p>
      
      <h2>Haz el Hangul automático, no «impresionante»</h2>
      <p>Los subtítulos romanizados engañan: van más rápido y frenan la lectura. Aguanta la incomodidad inicial del alfabeto, en semanas deja de ser la lección y pasa a ser la puerta.</p>
      
      <h2>Temas ligados a tus gustos</h2>
      <p>Fandom, comida, viaje, universidad, explota lo que ya te mueve para que la recuperación tenga emoción. Las listas de frecuencia pura compiten mal con las frases que quieres gritar a la pantalla.</p>
      
      <h2>Un registro para anclar</h2>
      <p>Las capas de honoríficos importan, pero la parálisis importa más. Empieza por una forma oral consistente para ti; refina niveles de cortesía cuando los patrones se repitan.</p>
      
      <h2>Producir sonido, no solo mirar</h2>
      <p>La pronunciación coreana es exigente pero aprendible. Copia líneas cortas, exagera boca y compara con nativos: oírte reduce la trampa del «lo sé en la cabeza».</p>
      
      <h2>Hanja más adelante</h2>
      <p>Para muchos es opcional al inicio; no dejes que bloquee las primeras victorias.</p>
      
      <h2>Letters y el coreano</h2>
      <p><strong>Letters</strong> encaja con práctica deletreada cuando prefieres juego con fichas antes que cuaderno de deberes.</p>
      
      <h2>Resumen</h2>
      <p>Hangul veloz, pasión temática, un registro estable, práctica en voz alta. El coreano crece cuando dejas de negociar con el perfeccionismo, sobre todo si un juego te hace abrir la app a diario.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-coreano/",
      label: <>Aprender vocabulario coreano (guía central)</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-chino/",
      label: <>Aprender vocabulario chino</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
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
      
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: un juego de palabras de Ocho. Sesiones cortas y fichas táctiles, pensado para quien quiere jugar antes que agobiarse.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
