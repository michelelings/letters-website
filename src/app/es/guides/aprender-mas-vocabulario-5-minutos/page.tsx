import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cómo aprender más vocabulario en 5 minutos al día",
  description: "Cómo aprender más vocabulario en 5 minutos al día: micro-sesiones, una meta clara, recuperación primero y hábito anclado, Letters.",
  path: "/es/guides/aprender-mas-vocabulario-5-minutos/",
  locale: "es",
  alternates: {
    en: "/guides/learn-more-vocabulary-in-5-minutes-a-day/",
    es: "/es/guides/aprender-mas-vocabulario-5-minutos/",
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
        path: "/es/guides/aprender-mas-vocabulario-5-minutos/",
        headline: "Cómo aprender más vocabulario en 5 minutos al día",
        description: "Cómo aprender más vocabulario en 5 minutos al día: micro-sesiones, una meta clara, recuperación primero y hábito anclado, Letters.",
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
          { href: "/guides/learn-more-vocabulary-in-5-minutes-a-day/", hreflang: "en", label: "English" },
          { href: "/es/guides/aprender-mas-vocabulario-5-minutos/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Cómo aprender más vocabulario en 5 minutos al día</h1>
      <p className="article-lead" itemProp="description"><strong>Cómo aprender más vocabulario</strong> con la vida ajetreada no va de motivación, va de <strong>diseño</strong>. Cinco minutos funcionan si cada sesión tiene <strong>una sola misión</strong>, <strong>recuperas antes de mirar la solución</strong> y el hábito está <strong>anclado</strong> a algo que ya haces.</p>
      
      <h2>Elige un micro-resultado por sesión</h2>
      <p>Ejemplos: «cinco palabras que digo sin mirar», «repasar un tema», «diez rondas con fichas». Si todo es opcional, cuesta avanzar. Una meta estrecha hace que cinco minutos se sientan completos.</p>
      
      <h2>Empieza por recuperar, termina con input</h2>
      <p>Abre con esfuerzo mientras el foco está fresco, di la palabra, escríbela o juega un puzle breve. Luego un poco de lectura o audio para contexto. El orden importa: <strong>esfuerzo primero, confort después</strong>.</p>
      
      <h2>Mantén la cola pequeña</h2>
      <p>Tres a siete palabras activas vencen a un backlog de sesenta. Pasa a «sé» sin miedo; siempre puedes reintroducir rebeldes un día «de limpieza».</p>
      
      <h2>Misma hora, mismo café</h2>
      <p>Los hábitos se pegan a señales. Empareja la práctica con un ancla diaria y no gastarás fuerza de voluntad decidiendo «cuándo».</p>
      
      <h2>Rachas útiles, no sagradas</h2>
      <p>Dos días sin estudiar no borran el progreso. La meta es que la <strong>siguiente sesión sea obvia</strong>, no que seas perfecto. Las rachas ayudan cuando reducen culpa, no cuando la añaden.</p>
      
      <h2>Letters y bucles de cinco minutos</h2>
      <p>Si deletrear con fichas encaja mejor que las tarjetas, <strong>Letters</strong> está hecho para rondas rápidas entre una cosa y otra del día.</p>
      
      <h2>Resumen</h2>
      <p>Cinco minutos se acumulan: una tarea, recuperar primero, cola pequeña, señal fiable. Así quien «no es de idiomas» pasa a ser alguien que simplemente no salta el miércoles.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-diario/",
      label: <>Aprender vocabulario a diario (guía central)</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
      label: <>Aprender vocabulario nuevo cada día</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-rapido/",
      label: <>Cómo aprender vocabulario rápido</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
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
