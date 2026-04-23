import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Juegos para aprender vocabulario (que sí funcionan)",
  description: "Qué hace efectivos los juegos de vocabulario: recuperación, espaciado y reto con sentido, y qué evitar.",
  path: "/es/guides/juegos-aprender-vocabulario/",
  locale: "es",
  alternates: {
    en: "/guides/games-to-learn-vocabulary/",
    es: "/es/guides/juegos-aprender-vocabulario/",
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
        path: "/es/guides/juegos-aprender-vocabulario/",
        headline: "Juegos para aprender vocabulario (que sí funcionan)",
        description: "Qué hace efectivos los juegos de vocabulario: recuperación, espaciado y reto con sentido, y qué evitar.",
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
          { href: "https://www.letters.game/guides/games-to-learn-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/juegos-aprender-vocabulario/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Juegos para aprender vocabulario (que sí funcionan)</h1>
      <p className="article-lead" itemProp="description">Los mejores <strong>juegos para aprender vocabulario</strong> exigen <strong>recuperación</strong>, respetan el <strong>espaciado</strong> y atan las palabras al <strong>significado</strong>. Bonito por sí solo no fija memoria.</p>
      
      <h2>Recuperación, no solo emparejar</h2>
      <p>Emparejar pasivo es fácil; producir la palabra es lo que fija.</p>
      <h2>Reto, no caos</h2>
      <p>La dificultad óptima te mantiene ~70–85% de aciertos, estírate sin hundirte.</p>
      <h2>Espaciado y reapariciones</h2>
      <p>Un buen juego trae palabras de vuelta antes de olvidar, no solo una vez.</p>
      <h2>Sentido y narrativa</h2>
      <p>Temas o niveles vencen listas frías ordenadas alfabéticamente.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> apuesta por deletrear táctil y sesiones cortas, fáciles de espaciar.</p>
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/juegos-palabras-vs-fichas-vocabulario/",
      label: <>Juegos de palabras vs fichas</>,
      },
      {
      href: "/es/guides/mejores-apps-aprender-vocabulario/",
      label: <>Mejores apps para aprender vocabulario</>,
      },
      {
      href: "/es/guides/mejores-juegos-vocabulario-adultos/",
      label: <>Mejores juegos de vocabulario para adultos</>,
      },
      {
      href: "/es/guides/juegos-vocabulario-ingles-adultos/",
      label: <>Juegos de vocabulario en inglés para adultos</>,
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
      <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho; juega primero.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
