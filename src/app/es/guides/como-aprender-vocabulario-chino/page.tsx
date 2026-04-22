import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cómo aprender vocabulario chino (de forma divertida)",
  description: "Cómo aprender vocabulario chino de forma divertida: pinyin y tonos, temas, caracteres a tu ritmo y práctica lúdica, Letters.",
  path: "/es/guides/como-aprender-vocabulario-chino/",
  locale: "es",
  alternates: {
    en: "/guides/how-to-learn-chinese-vocabulary/",
    es: "/es/guides/como-aprender-vocabulario-chino/",
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
      <h1 itemProp="headline">Cómo aprender vocabulario chino (de forma divertida)</h1>
      <p className="article-lead" itemProp="description">¿<strong>Cómo aprender vocabulario chino</strong> sin que cada sesión sea repetición mecánica? Pon el <strong>pinyin y los tonos de oído</strong> como columna, aprende <strong>trozos hablados temáticos</strong> que vas a repetir y sube <strong>caracteres</strong> con calma, con recuperación lo bastante lúdica como para volver mañana.</p>

      <h2>Estabiliza el pinyin (tono incluido)</h2>
      <p>Hasta que leer pinyin con tono correcto sea automático, cada palabra te costará doble: sonido y significado. Las series cortas de escucha y repetición vencen a maratones de copiar.</p>

      <h2>Vocabulario temático, no listas aleatorias</h2>
      <p>Comida, transporte, frases sociales, cierra un bloque antes del siguiente. El contexto regala colocaciones que oírás una y otra vez.</p>

      <h2>Retarda el heroísmo con caracteres (pero no para siempre)</h2>
      <p>Es válido hablar desde pinyin al principio mientras construyes motivación. Fija un ritmo para caracteres, aunque sean dos al día, para que la lectura suba con el oral.</p>

      <h2>Producción en cada sesión</h2>
      <p>Di la palabra, deletrea las sílabas, copia una línea corta. Solo reconocer deja un hueco cuando toca hablar o escribir.</p>

      <h2>Si también estudias japonés</h2>
      <p>Los sinogramas compartidos pueden reforzar la memoria visual si separas bien la pronunciación.</p>

      <h2>Letters y el chino</h2>
      <p><strong>Letters</strong> encaja si quieres deletrear y jugar cerca de la capa pinyin en rondas breves.</p>

      <h2>Resumen</h2>
      <p>Pinyin y tonos primero, profundidad temática segundo, caracteres en rail tercero, producción siempre. La diversión no es obligatoria en teoría; en la práctica es lo que hace que el estudiante casual aguante más de dos semanas.</p>

      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Guías relacionadas</h2>
        <ul>
          <li><Link href="/es/guides/aprender-vocabulario-chino/">Aprender vocabulario chino (guía central)</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-japones/">Aprender vocabulario japonés</Link></li>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/juegos-aprender-vocabulario/">Juegos para aprender vocabulario</Link></li>
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
          { href: "/guides/how-to-learn-chinese-vocabulary/", hreflang: "en", label: "English" },
          { href: "/es/guides/como-aprender-vocabulario-chino/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
