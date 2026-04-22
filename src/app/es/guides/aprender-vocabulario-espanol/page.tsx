import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { DownloadCta } from "@/components/DownloadCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario en español de forma divertida",
  description: "Aprende vocabulario en español de forma divertida: categorías, viaje y práctica tipo puzle para estudiantes casuales, Letters.",
  path: "/es/guides/aprender-vocabulario-espanol/",
  locale: "es",
  alternates: {
    en: "/guides/learn-spanish-vocabulary/",
    es: "/es/guides/aprender-vocabulario-espanol/",
  },
  ogType: "article",
  ogImage: "/og-image.png",
});

export default function Page() {
  return (
    <>
      <LocaleEffect locale="es" />
      <ArticleBodyClass />
      <ArticleTopbar ctaLabel="Descargar" />
      <main id="main" className="article-wrap">
        <article className="article-post" itemScope itemType="https://schema.org/Article">
      <h1 itemProp="headline">Aprender vocabulario en español de forma divertida</h1>
      <p className="article-lead">Si quieres <strong>aprender vocabulario en español</strong> sin ambiente de examen, apóyate en <strong>temas</strong> (comida, viaje, saludos), <strong>sesiones cortas</strong> y <strong>recuperación activa</strong> en lugar de listas abstractas interminables.</p>

      <h2>Empieza por categorías</h2>
      <p>Elige conjuntos pequeños: pedir en un bar, aeropuerto, números, días. Las victorias pequeñas motivan; un mazo gigante aleatorio agota. Los temas imitan la vida real: las palabras vuelven juntas.</p>

      <h2>Viaje y social primero</h2>
      <p>Muchos aprendices casuales quieren sobrevivir un viaje y entablar conversación. Prioriza frases frecuentes y cortesía antes del jerga rara. Siempre puedes ampliar después.</p>

      <h2>Que el recuerdo sea jugable</h2>
      <p>Solo leer no basta. Deletrea sin mirar, di la palabra en voz alta antes de ver la solución o arma la palabra con letras en un puzle, un poco de presión ayuda a fijar sin ansiedad de test.</p>

      <h2>Pronunciación + ortografía</h2>
      <p>El español es bastante regular en grafía; pronuncia en voz alta mientras aprendes para unir sonido y letras. Cinco minutos en voz alta ganan a media hora de scroll silencioso.</p>

      <h2>Letters y el español casual</h2>
      <p><strong>Letters</strong> está pensado para rondas cortas y táctiles: el tipo de práctica que haces en una cola. No es un simulador de examen, es juego de palabras que puedes repetir a diario.</p>

      <nav className="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
          <li><Link href="/es/guides/mejores-formas-aprender-vocabulario/">Mejores formas de aprender vocabulario</Link></li>
          <li><Link href="/es/guides/mejor-forma-vocabulario-espanol-viaje/">Mejor vocabulario en español para viajar</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-espanol-sin-clases/">Aprender vocabulario en español sin clases</Link></li>
          <li><Link href="/es/guides/juegos-aprender-vocabulario/">Juegos para aprender vocabulario</Link></li>
          <li><Link href="/es/guides/aprender-vocabulario-diario/">Aprender vocabulario a diario</Link></li>
          <li><Link href="/es/guides/">Todas las guías</Link></li>
        </ul>
      </nav>

      <nav className="article-related" aria-label="Páginas de estudio">
        <h2>Páginas de estudio</h2>
        <ul>
          <li><Link href="/learn/spanish/">Resumen «Learn Spanish»</Link> (inglés en el sitio)</li>
          <li><Link href="/spanish/">Hub de español</Link></li>
          <li><Link href="/learn/spanish/family-vocabulary/">Vocabulario de familia</Link></li>
          <li><Link href="/learn/spanish/travel/restaurants/">Viaje: restaurantes</Link></li>
        </ul>
      </nav>

      <div className="article-cta-box">
        <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho. Juega primero, estudia después.</p>
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
          { href: "/guides/learn-spanish-vocabulary/", hreflang: "en", label: "English" },
          { href: "/es/guides/aprender-vocabulario-espanol/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
