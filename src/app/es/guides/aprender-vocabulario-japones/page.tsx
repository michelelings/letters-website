import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario japonés con juegos de palabras",
  description: "Aprende vocabulario japonés con hiragana, sesiones cortas y repetición gamificada, Letters.",
  path: "/es/guides/aprender-vocabulario-japones/",
  locale: "es",
  alternates: {
    en: "/guides/learn-japanese-vocabulary/",
    es: "/es/guides/aprender-vocabulario-japones/",
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
      <h1 itemProp="headline">Aprender vocabulario japonés con juegos de palabras</h1>
      <p className="article-lead" itemProp="description">Aprenderás <strong>vocabulario japonés</strong> mejor si unes <strong>hiragana</strong>, <strong>temas</strong> con sentido (comida, viaje, verbos) y <strong>recuperación</strong> en formatos de juego, no solo copiar caracteres sin fin.</p>

      <h2>Consolidar hiragana</h2>
      <p>Sin silabario básico automático, cada palabra cuesta doble. Mezcla reconocimiento de caracteres y significado.</p>
      <h2>Conjuntos por tema</h2>
      <p>Comida, transporte, verbos cotidianos, paquetes pequeños ganan a listas aleatorias enormes.</p>
      <h2>Recuperación, no solo ver</h2>
      <p>Produce lecturas y significados tú; quedarte solo en romanización frena si quieres leer japonés real.</p>
      <h2>Victorias diarias cortas</h2>
      <p>Cinco minutos enfocados ganan a culpa mensual.</p>
      <h2>Letters y el japonés</h2>
      <p><strong>Letters</strong> encaja si quieres deletrear con tacto mientras memorizas caracteres.</p>
      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/como-aprender-vocabulario-japones/">Cómo aprender vocabulario japonés (divertido)</Link></li>
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
          { href: "https://www.letters.game/guides/learn-japanese-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-japones/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
