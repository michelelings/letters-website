import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Estrategias para aprender palabras de vocabulario difíciles",
  description: "Estrategias para aprender palabras de vocabulario difíciles: contraste, anclajes visuales, pronunciación+ortografía, morfología y repaso espaciado, Letters.",
  path: "/es/guides/estrategias-vocabulario-dificil/",
  locale: "es",
  alternates: {
    en: "/guides/strategies-difficult-vocabulary-words/",
    es: "/es/guides/estrategias-vocabulario-dificil/",
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
      <h1 itemProp="headline">Estrategias para aprender palabras de vocabulario difíciles</h1>
      <p className="article-lead" itemProp="description">Las palabras difíciles suelen serlo por algo concreto: significado abstracto, parecidos engañosos con otra palabra, ortografía cruel o cero vínculo personal. Las <strong>estrategias para aprender palabras de vocabulario difíciles</strong> atacan esos puntos débiles en lugar de «repetir más igual».</p>

      <h2>Separa pares confusos a propósito</h2>
      <p>Si dos términos comparten el mismo hueco mental, estúdialos <strong>juntos una vez</strong> con una mini tabla: significado, colocaciones, una frase ejemplo cada uno. En repasos posteriores, trátalos por separado para fijar memorias distintas.</p>

      <h2>Ancla lo abstracto a una escena concreta</h2>
      <p>Para conceptos como «política», «límite» o «renuente», engancha una <strong>microhistoria o imagen</strong> que puedas revivir en dos segundos. Los ganchos vivos y personales superan la glosa genérica.</p>

      <h2>Aprende pronunciación y ortografía a la vez</h2>
      <p>Los sonidos mal oídos generan grafías fantasmas. Di la palabra en voz alta, exagera el acento y deletrea en alto. En idiomas con ortografía opaca, este emparejamiento evita trabajo doble después.</p>

      <h2>Aprovecha morfemas cuando puedas</h2>
      <p>Prefijos, raíces y compuestos traen patrones. Desmenuzar una palabra larga en partes reconocibles convierte un monstruo en piezas manejables.</p>

      <h2>«Viernes de palabras duras», pero lista mínima</h2>
      <p>Reserva un hueco fijo solo para 3–5 palabras tozudas. El foco estrecho evita aplazar la práctica y da tiempo a varios contactos espaciados en la semana.</p>

      <h2>La recuperación gana a la exposición pasiva</h2>
      <p>Vuelve a escribir la palabra de memoria, explícala en una línea o ensámblala en un puzle. <strong>Letters</strong> premia la recuperación interactiva si te va mejor la práctica con las manos.</p>

      <h2>Resumen</h2>
      <p>Contrasta, imagina, une sonido y grafía, usa la estructura y agenda lo difícil con intención. El vocabulario tozudo cede al esfuerzo adecuado, no al mismo error repetido más alto.</p>

      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Guías relacionadas</h2>
        <ul>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-rapido/">Cómo aprender vocabulario rápido</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-diario/">Aprender vocabulario a diario</Link></li>
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
          { href: "/guides/strategies-difficult-vocabulary-words/", hreflang: "en", label: "English" },
          { href: "/es/guides/estrategias-vocabulario-dificil/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
