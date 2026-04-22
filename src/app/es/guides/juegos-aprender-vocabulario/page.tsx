import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
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
    <>
      <LocaleEffect locale="es" />
      <ArticleBodyClass />
      <ArticleTopbar ctaLabel="Descargar" />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
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
      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/juegos-palabras-vs-fichas-vocabulario/">Juegos de palabras vs fichas</Link></li>
          <li><Link href="/es/guides/mejores-apps-aprender-vocabulario/">Mejores apps para aprender vocabulario</Link></li>
          <li><Link href="/es/guides/mejores-juegos-vocabulario-adultos/">Mejores juegos de vocabulario para adultos</Link></li>
          <li><Link href="/es/guides/juegos-vocabulario-ingles-adultos/">Juegos de vocabulario en inglés para adultos</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-diario/">Aprender vocabulario a diario</Link></li>
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
          { href: "https://www.letters.game/guides/games-to-learn-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/juegos-aprender-vocabulario/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
