import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mejores juegos de vocabulario para adultos (qué elegir)",
  description: "Mejores juegos de vocabulario para adultos: qué priorizar, sesión corta, profundidad de recuperación, tono, idiomas y encaje de Letters.",
  path: "/es/guides/mejores-juegos-vocabulario-adultos/",
  locale: "es",
  alternates: {
    en: "/guides/best-vocabulary-games-for-adults/",
    es: "/es/guides/mejores-juegos-vocabulario-adultos/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
  ogImageAlt: "Letters: juego de palabras de Ocho",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="es" />
      <ArticleBodyClass />
      <ArticleTopbar ctaLabel="Descargar" />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
      <h1 itemProp="headline">Mejores juegos de vocabulario para adultos (qué elegir)</h1>
      <p className="article-lead" itemProp="description">Los <strong>mejores juegos de vocabulario para adultos</strong> comparten columna vertebral: <strong>sesiones breves</strong>, <strong>dificultad honesta</strong> y mecánicas que obligan a <strong>producir</strong> palabras. Lo demás es envoltorio, puede divertir, pero la memoria pide más.</p>

      <h2>Juzga por recuperación, no por pintura</h2>
      <p>Arte y sonido ayudan solo si el bucle exige recordar. Pregunta: «¿Tengo que generar la palabra o solo confirmar que la he visto?»</p>

      <h2>Calendario adulto</h2>
      <p>Diseño «cierro en cinco minutos» vence al «una cadena más» interminable. Busca títulos que celebren repeticiones pequeñas en lugar de castigar los descansos.</p>

      <h2>Varios idiomas si los necesitas</h2>
      <p>Muchos adultos estudian idioma X viviendo en Y. Un juego con <strong>varios idiomas de estudio</strong> mantiene un solo hábito y menos iconos en el móvil.</p>

      <h2>Progresión que se nota</h2>
      <p>Mapas, colecciones, rachas, visten bien cuando reflejan amplitud real (temas dominados, niveles pasados), no trofeos vacíos.</p>

      <h2>Huye de rankings que solo venden potenciadores</h2>
      <p>Lo útil es compararte con el <em>tú</em> de ayer, no con ballenas anónimas.</p>

      <h2>Dónde encaja Letters</h2>
      <p><strong>Letters</strong>, de Ocho, apunta a quien quiere rondas deletreadas táctiles y juego multilingüe sin infantilizar, buen candidato si «mejor» incluye <em>poca fricción</em> y <em>producción</em>.</p>

      <h2>Resumen</h2>
      <p>Elige juegos adultos que privilegien recuperación, calendarios reales y amplitud léxica. El brillo es opcional; la mecánica de memoria, no.</p>

      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Guías relacionadas</h2>
        <ul>
          <li><Link href="/es/guides/juegos-aprender-vocabulario/">Juegos para aprender vocabulario (guía central)</Link></li>
          <li><Link href="/es/guides/juegos-vocabulario-ingles-adultos/">Juegos de vocabulario en inglés para adultos</Link></li>
          <li><Link href="/es/guides/mejores-apps-aprender-vocabulario/">Mejores apps para aprender vocabulario</Link></li>
          <li><Link href="/es/guides/por-que-aprender-vocabulario-con-juegos/">Por qué aprender vocabulario con juegos</Link></li>
          <li><Link href="/es/guides/">Todas las guías</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Prueba Letters</strong>: un juego de palabras de Ocho. Sesiones cortas y fichas táctiles, pensado para quien quiere jugar antes que agobiarse.</p>
      </div>
      <DownloadCta label="Descargar Letters" />
    </article>
      </main>
      <SiteFooter
        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
        langs={[
          { href: "/guides/best-vocabulary-games-for-adults/", hreflang: "en", label: "English" },
          { href: "/es/guides/mejores-juegos-vocabulario-adultos/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
