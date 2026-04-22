import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario a diario: un sistema sencillo",
  description: "Hábito diario de vocabulario: sesiones pequeñas, anclas realistas y constancia, Letters.",
  path: "/es/guides/aprender-vocabulario-diario/",
  locale: "es",
  alternates: {
    en: "/guides/learn-vocabulary-daily/",
    es: "/es/guides/aprender-vocabulario-diario/",
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
      <h1 itemProp="headline">Aprender vocabulario a diario: un sistema sencillo</h1>
      <p className="article-lead" itemProp="description">Para <strong>aprender vocabulario a diario</strong>, baja la barra hasta que encaje en la vida: <strong>la misma señal</strong> cada día, <strong>dos a siete minutos</strong> de recuperación y una <strong>regla de perdón</strong> para que un día sin estudio no tumbe todo.</p>

      <h2>Ancla a una rutina que ya tienes</h2>
      <p>Tras el café, antes de dormir… une el vocabulario a algo inevitable en tu día.</p>
      <h2>Sesión mínima viable</h2>
      <p>Cinco minutos honestos cuentan; cero minutos es pausa, no fracaso.</p>
      <h2>Rachas como andamio</h2>
      <p>Usa rachas para que la siguiente sesión sea obvia, no para castigarte.</p>
      <h2>Repaso semanal, sin culpa</h2>
      <p>Repasa lo débil una vez por semana; celebra aparecer con imperfección.</p>
      <h2>Letters cada día</h2>
      <p><strong>Letters</strong> está hecho para rondas cortas repetibles, ancla diaria ideal.</p>
      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/aprender-mas-vocabulario-5-minutos/">Más vocabulario en 5 minutos al día</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-nuevo-cada-dia/">Vocabulario nuevo cada día</Link></li>
          <li><Link href="/es/guides/juegos-aprender-vocabulario/">Juegos para aprender vocabulario</Link></li>
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
          { href: "https://www.letters.game/guides/learn-vocabulary-daily/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-diario/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
