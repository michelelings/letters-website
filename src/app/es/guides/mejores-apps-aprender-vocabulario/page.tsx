import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mejores apps para aprender vocabulario (ranking 2026)",
  description: "Cómo elegir las mejores apps de vocabulario si buscas juego, no solo tareas de gramática.",
  path: "/es/guides/mejores-apps-aprender-vocabulario/",
  locale: "es",
  alternates: {
    en: "/guides/best-apps-to-learn-vocabulary/",
    es: "/es/guides/mejores-apps-aprender-vocabulario/",
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
          { href: "https://www.letters.game/guides/best-apps-to-learn-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/mejores-apps-aprender-vocabulario/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Mejores apps para aprender vocabulario (ranking 2026)</h1>
      <p className="article-lead" itemProp="description">Las <strong>mejores apps para aprender vocabulario</strong> comparten rasgos: <strong>práctica de recuerdo</strong> real, <strong>espaciado</strong> razonable, <strong>precio</strong> claro y una experiencia que abres sin angustia. Los ranking cambian; los criterios no.</p>
      
      <h2>¿Te hace producir palabras?</h2>
      <p>Deslizar mucho puede sentirse productivo sin recuperación real.</p>
      <h2>Espaciado y calidad de repaso</h2>
      <p>Busca sistemas que reprogramen lo débil con sentido.</p>
      <h2>Transparencia de precio</h2>
      <p>El gratis debería mostrar la experiencia real, no un engaño.</p>
      <h2>Alegría y fricción</h2>
      <p>Elige la app que abrirás un martes cansado.</p>
      <h2>Dónde encaja Letters</h2>
      <p><strong>Letters</strong> apunta a quien quiere puzles táctiles antes que molienda de gramática.</p>
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-ingles/",
      label: <>Aprender vocabulario en inglés</>,
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
