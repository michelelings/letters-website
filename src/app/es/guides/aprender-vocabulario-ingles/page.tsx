import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario en inglés: juegos vs fichas",
  description: "Aprende vocabulario en inglés con juegos en lugar de maratones de fichas, práctica sin presión para no nativos.",
  path: "/es/guides/aprender-vocabulario-ingles/",
  locale: "es",
  alternates: {
    en: "/guides/learn-english-vocabulary/",
    es: "/es/guides/aprender-vocabulario-ingles/",
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
        path: "/es/guides/aprender-vocabulario-ingles/",
        headline: "Aprender vocabulario en inglés: juegos vs fichas",
        description: "Aprende vocabulario en inglés con juegos en lugar de maratones de fichas, práctica sin presión para no nativos.",
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
          { href: "https://www.letters.game/guides/learn-english-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-ingles/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario en inglés: juegos vs fichas</h1>
      <p className="article-lead" itemProp="description">Para <strong>aprender vocabulario en inglés</strong> como no nativo, equilibra <strong>unidades</strong> (frases, no solo palabras sueltas), <strong>recuperación activa</strong> y formatos que se sientan a <strong>juego</strong>, sobre todo si las fichas tradicionales ya te cansaron.</p>
      
      <h2>Las frases ganan a la palabra suelta</h2>
      <p>Aprende colocaciones y frases cortas para que ritmo y gramática vayan con el significado.</p>
      <h2>Reconocer no basta</h2>
      <p>Entrena la producción: dilo, deletrea o reconstruye la palabra antes de mirar la solución.</p>
      <h2>Juegos que exigen recuperación</h2>
      <p>Los mejores juegos obligan a sacar la palabra tú, parecido a hablar con un poco de tiempo real.</p>
      <h2>Dificultad para adultos</h2>
      <p>Evita temas infantiles si te matan las ganas; elige contenido alineado con tus gustos y metas.</p>
      <h2>Letters para quien estudia inglés</h2>
      <p><strong>Letters</strong> ofrece rondas táctiles y breves para repetir a diario sin sentir un curso pesado encima.</p>
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
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
      href: "/es/guides/juegos-vocabulario-ingles-adultos/",
      label: <>Juegos de vocabulario en inglés para adultos</>,
      },
      {
      href: "/es/guides/mejores-juegos-vocabulario-adultos/",
      label: <>Mejores juegos de vocabulario para adultos</>,
      },
      {
      href: "/es/guides/mejores-apps-aprender-vocabulario/",
      label: <>Mejores apps para aprender vocabulario</>,
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
