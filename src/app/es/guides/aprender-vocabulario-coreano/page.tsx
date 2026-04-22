import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario coreano: juego de palabras diario",
  description: "Aprende vocabulario coreano con hangul, cultura y microsesiones diarias, Letters.",
  path: "/es/guides/aprender-vocabulario-coreano/",
  locale: "es",
  alternates: {
    en: "/guides/learn-korean-vocabulary/",
    es: "/es/guides/aprender-vocabulario-coreano/",
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
      <h1 itemProp="headline">Aprender vocabulario coreano: juego de palabras diario</h1>
      <p className="article-lead" itemProp="description">Para <strong>aprender vocabulario coreano</strong>, fija el <strong>hangul</strong>, aprende <strong>unidades temáticas</strong> y usa <strong>recuperación diaria tipo puzle</strong>, la cultura pop ayuda a mantener el hábito.</p>

      <h2>Hangul primero, rápido</h2>
      <p>Haz legibles los bloques silábicos pronto, desbloquea todo lo demás.</p>
      <h2>Mazos temáticos</h2>
      <p>Comida, emociones, verbos de redes sociales, lo que realmente usarías.</p>
      <h2>Formalidad después</h2>
      <p>Empieza con básicos neutros/educados; la maticidad viene después.</p>
      <h2>Microsesión diaria</h2>
      <p>La constancia vence al maratón de fin de semana.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> apoya deletreo diario cuando las letras te resulten familiares.</p>
      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/como-aprender-vocabulario-coreano/">Cómo aprender vocabulario coreano (divertido)</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-japones/">Aprender vocabulario japonés</Link></li>
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
          { href: "https://www.letters.game/guides/learn-korean-vocabulary/", hreflang: "en", label: "English" },
          { href: "https://www.letters.game/es/guides/aprender-vocabulario-coreano/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
