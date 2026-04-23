import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Juegos de vocabulario en inglés para adultos",
  description: "Juegos de vocabulario en inglés para adultos: por qué el estilo puzle vence apps infantiles, qué buscar y cómo encajar rondas cortas, Letters.",
  path: "/es/guides/juegos-vocabulario-ingles-adultos/",
  locale: "es",
  alternates: {
    en: "/guides/english-vocabulary-games-for-adults/",
    es: "/es/guides/juegos-vocabulario-ingles-adultos/",
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
          { href: "/guides/english-vocabulary-games-for-adults/", hreflang: "en", label: "English" },
          { href: "/es/guides/juegos-vocabulario-ingles-adultos/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Juegos de vocabulario en inglés para adultos</h1>
      <p className="article-lead" itemProp="description">Los mejores <strong>juegos de vocabulario en inglés para adultos</strong> respetan tu tiempo: rondas cortas, <strong>recuperación de verdad</strong> (no solo tocar dibujitos) y léxico que suena a inglés vivo, no a manual de robots.</p>
      
      <h2>Por qué las apps «para niños» cansan al adulto</h2>
      <p>Mascotas y ritmo de guardería a veces funcionan, pero mucha gente abandona cuando el contenido se siente condescendiente o la curva nunca exige. Buscas <strong>reto sin humillación</strong>.</p>
      
      <h2>Prioriza producción, no solo emparejar</h2>
      <p>Los juegos que obligan a deletrear, montar o producir desde memoria superan los ejercicios solo de reconocimiento. Ese hueco duele cuando hablas o escribes inglés en el trabajo.</p>
      
      <h2>Temas que vas a usar</h2>
      <p>Reuniones, viajes, modalidad coloquial que oyes en series, paquetes con sentido vencen al «palabra del día» de cumplimiento.</p>
      
      <h2>Curvas de dificultad creíbles</h2>
      <p>Progresión clara, metas claras y poder cerrar en menos de cinco minutos. El adulto mete el idioma entre trabajo y familia; el micro-logro mantiene la cadena.</p>
      
      <h2>Combina juego con input real</h2>
      <p>Podcasts, lectura, conversación: el juego fija palabras que encuentras fuera. Piensa en <strong>turbo de memoria</strong>, no en único oxígeno.</p>
      
      <h2>Letters para adultos que estudian inglés</h2>
      <p><strong>Letters</strong> apuesta por rondas táctiles breves, útil si quieres inglés con sabor a puzle, no a clase disfrazada.</p>
      
      <h2>Resumen</h2>
      <p>Los juegos adultos de vocabulario mezclan mecánicas serias y respeto por tu calendario. Exige producción, elige contextos adultos y suma input para que las palabras tengan sitio real.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-ingles/",
      label: <>Aprender vocabulario en inglés (guía central)</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/mejores-juegos-vocabulario-adultos/",
      label: <>Mejores juegos de vocabulario para adultos</>,
      },
      {
      href: "/es/guides/mejores-apps-aprender-vocabulario/",
      label: <>Mejores apps vocabulario</>,
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
