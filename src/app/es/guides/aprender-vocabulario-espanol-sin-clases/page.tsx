import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cómo aprender vocabulario en español sin clases",
  description: "Cómo aprender vocabulario en español sin clases: temas prácticos, input que te guste, hablar pronto y recuperación tipo juego, Letters.",
  path: "/es/guides/aprender-vocabulario-espanol-sin-clases/",
  locale: "es",
  alternates: {
    en: "/guides/how-to-learn-spanish-without-classes/",
    es: "/es/guides/aprender-vocabulario-espanol-sin-clases/",
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
          { href: "/guides/how-to-learn-spanish-without-classes/", hreflang: "en", label: "English" },
          { href: "/es/guides/aprender-vocabulario-espanol-sin-clases/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Cómo aprender vocabulario en español sin clases</h1>
      <p className="article-lead" itemProp="description">Puedes <strong>aprender vocabulario en español</strong> sin aula si sustituyes el ritmo del profesor por <strong>práctica frecuente</strong>: bloques temáticos, input que disfrutes, habla temprana en contextos seguros y <strong>recuperación</strong> que se siente más a juego que a parcial.</p>
      
      <h2>Organiza por situaciones, no por listas infinitas</h2>
      <p>Elige paquetes que vas a repetir: comida, direcciones, planes, alojamiento. Cierra un escenario antes del siguiente. Los cursos ordenan la gramática; el autoaprendizaje gana cuando el <strong>léxico va unido al uso</strong>.</p>
      
      <h2>Alimenta oídos y ojos a diario</h2>
      <p>Input comprensible (lecturas graduadas, podcasts lentos, series con subtítulos) da a cada palabra <em>vecinos vivos</em> en memoria. Solo pasivo es lento, combínalo con producción breve.</p>
      
      <h2>Habla pronto, imperfecto y en serio</h2>
      <p>Intercambios cortos vencen al perfeccionismo silencioso. Grábate, habla con apps o salas de chat sin presión. El vocabulario queda cuando sale de la boca, no solo cuando entra por los ojos.</p>
      
      <h2>Mantén la gramática ligera al inicio</h2>
      <p>Aprende frases hechas (<em>quiero…</em>, <em>me gustaría…</em>, <em>¿dónde está…?</em>) como unidades. Puedes afinar tiempos y concordancia después; al principio gana <strong>comunicar</strong>.</p>
      
      <h2>Gamifica la recuperación en el móvil</h2>
      <p>Puzles cortos o deletrear desde fichas imitan la recuperación con presión suave, más cercana a conversar que a un test infinito. <strong>Letters</strong> apunta a ese bucle táctil y de baja fricción.</p>
      
      <h2>Resumen</h2>
      <p>La clase es opcional; la <strong>estructura</strong>, no. Tematiza, sumérgete un poco, habla antes de que dé vergüenza y practica la recuperación en un formato que mañana también quieras abrir.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-espanol/",
      label: <>Aprender vocabulario en español (guía central)</>,
      },
      {
      href: "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
      label: <>Vocabulario en español para viajar</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
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
