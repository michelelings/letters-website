import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario japonés con juegos de palabras",
  description: "Aprende vocabulario japonés con hiragana, sesiones cortas y repetición gamificada, Letters.",
  path: "/es/guides/aprender-vocabulario-japones/",
  locale: "es",
  alternates: {
    en: "/guides/learn-japanese-vocabulary/",
    es: "/es/guides/aprender-vocabulario-japones/",
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

        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
        langs={[
          { href: "https://www.letters.game/guides/learn-japanese-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-japones/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario japonés con juegos de palabras</h1>
      <p className="article-lead" itemProp="description">Aprenderás <strong>vocabulario japonés</strong> mejor si unes <strong>hiragana</strong>, <strong>temas</strong> con sentido (comida, viaje, verbos) y <strong>recuperación</strong> en formatos de juego, no solo copiar caracteres sin fin.</p>
      
      <h2>Consolidar hiragana</h2>
      <p>Sin silabario básico automático, cada palabra cuesta doble. Mezcla reconocimiento de caracteres y significado.</p>
      <h2>Conjuntos por tema</h2>
      <p>Comida, transporte, verbos cotidianos, paquetes pequeños ganan a listas aleatorias enormes.</p>
      <h2>Recuperación, no solo ver</h2>
      <p>Produce lecturas y significados tú; quedarte solo en romanización frena si quieres leer japonés real.</p>
      <h2>Victorias diarias cortas</h2>
      <p>Cinco minutos enfocados ganan a culpa mensual.</p>
      <h2>Letters y el japonés</h2>
      <p><strong>Letters</strong> encaja si quieres deletrear con tacto mientras memorizas caracteres.</p>
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/como-aprender-vocabulario-japones/",
      label: <>Cómo aprender vocabulario japonés (divertido)</>,
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
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho; juega primero.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
