import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario chino con juegos de palabras",
  description: "Aprende vocabulario chino con pinyin, caracteres y temas, enfoque tipo puzle.",
  path: "/es/guides/aprender-vocabulario-chino/",
  locale: "es",
  alternates: {
    en: "/guides/learn-chinese-vocabulary/",
    es: "/es/guides/aprender-vocabulario-chino/",
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
          { href: "https://www.letters.game/guides/learn-chinese-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-chino/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario chino con juegos de palabras</h1>
      <p className="article-lead" itemProp="description">Para <strong>aprender vocabulario chino</strong> de forma sostenible, une <strong>pinyin</strong> con <strong>temas</strong>, <strong>reconoce caracteres</strong> en dosis y practica <strong>recuperación</strong> en bucles rápidos tipo juego.</p>
      
      <h2>Pinyin como andamio</h2>
      <p>Ancla sonidos con pinyin mientras creces en caracteres, no como muleta eterna.</p>
      <h2>Vocabulario por temas</h2>
      <p>Comida, transporte, familia, conjuntos finitos reducen saturación.</p>
      <h2>Caracteres por lotes</h2>
      <p>Prioriza caracteres de alto impacto que desbloquean muchas palabras.</p>
      <h2>Tonos</h2>
      <p>Practica oír y decir tonos pronto; usa pares mínimos con cuidado.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> refuerza deletreo/recuerdo cuando dominas las letras de tu mazo en pinyin.</p>
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/como-aprender-vocabulario-chino/",
      label: <>Cómo aprender vocabulario chino (divertido)</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-japones/",
      label: <>Aprender vocabulario japonés</>,
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
