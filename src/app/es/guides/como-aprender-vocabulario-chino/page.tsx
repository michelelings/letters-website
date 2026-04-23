import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
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
    <ArticlePage
      topbar={{ ctaLabel: "Descargar" }}
      schemaArticle

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
    >
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
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-chino/",
      label: <>Aprender vocabulario chino (guía central)</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-japones/",
      label: <>Aprender vocabulario japonés</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/",
      label: <>Todas las guías</>,
      }
      ]}
      />
      
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: un juego de palabras de Ocho. Sesiones cortas y fichas táctiles, pensado para quien quiere jugar antes que agobiarse.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
