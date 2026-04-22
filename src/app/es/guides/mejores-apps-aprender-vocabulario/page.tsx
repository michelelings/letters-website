import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
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
    <>
      <LocaleEffect locale="es" />
      <ArticleBodyClass />
      <ArticleTopbar ctaLabel="Descargar" />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
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
      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
          <li><Link href="/es/guides/aprender-vocabulario-ingles/">Aprender vocabulario en inglés</Link></li>
          <li><Link href="/es/guides/juegos-aprender-vocabulario/">Juegos para aprender vocabulario</Link></li>
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
          { href: "https://www.letters.game/guides/best-apps-to-learn-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/mejores-apps-aprender-vocabulario/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
