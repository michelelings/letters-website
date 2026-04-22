import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
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
    <>
      <LocaleEffect locale="es" />
      <ArticleBodyClass />
      <ArticleTopbar ctaLabel="Descargar" />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
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
      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/juegos-aprender-vocabulario/">Juegos para aprender vocabulario</Link></li>
          <li><Link href="/es/guides/juegos-vocabulario-ingles-adultos/">Juegos de vocabulario en inglés para adultos</Link></li>
          <li><Link href="/es/guides/mejores-juegos-vocabulario-adultos/">Mejores juegos de vocabulario para adultos</Link></li>
          <li><Link href="/es/guides/mejores-apps-aprender-vocabulario/">Mejores apps para aprender vocabulario</Link></li>
          <li><Link href="/es/guides/">Todas las guías</Link></li>
        </ul>
      </nav>
      <div className="article-cta-box">
        <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho; juega primero.</p>
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
          { href: "https://www.letters.game/guides/learn-english-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-ingles/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
