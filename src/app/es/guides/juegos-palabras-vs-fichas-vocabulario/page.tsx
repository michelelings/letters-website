import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Juegos de palabras vs fichas para vocabulario",
  description: "Juegos de palabras vs fichas para vocabulario: motivación, profundidad de recuperación y cuándo conviene cada herramienta, Letters.",
  path: "/es/guides/juegos-palabras-vs-fichas-vocabulario/",
  locale: "es",
  alternates: {
    en: "/guides/word-games-vs-flashcards-vocabulary/",
    es: "/es/guides/juegos-palabras-vs-fichas-vocabulario/",
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
          { href: "/guides/word-games-vs-flashcards-vocabulary/", hreflang: "en", label: "English" },
          { href: "/es/guides/juegos-palabras-vs-fichas-vocabulario/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Juegos de palabras vs fichas para vocabulario</h1>
      <p className="article-lead" itemProp="description"><strong>Juegos de palabras vs fichas</strong> no es una guerra santa: es una cuestión de encaje. Los juegos suelen ganar en <strong>motivación</strong> y <strong>recuperación tipo producción</strong>; las fichas ganan en <strong>eficiencia reconocimiento</strong> para mazos grandes. A mucha gente le va bien <strong>combinar</strong>.</p>
      
      <h2>Qué hacen mejor las fichas</h2>
      <p>Mucho volumen de reconocimiento, calendarios de repaso y modo «tengo que pasarme esta lista». El SRS digital brilla cuando ya aceptas el formato.</p>
      
      <h2>Dónde las fichas pinchan sin avisar</h2>
      <p>Mazos interminables, cero contexto y culpa cuando se acumulan repasos. Puedes conocer la ficha y fracasar en la conversación: reconocer sin producir es a medias.</p>
      
      <h2>Qué aportan los juegos de palabras</h2>
      <p>Restricciones parecidas al uso real: encontrar la palabra, deletrearla, mover letras, algo de tiempo. Los buenos diseños también <strong>acotan la sesión</strong> en bucles satisfactorios.</p>
      
      <h2>La retención es recuperación, no envoltorio</h2>
      <p>La evidencia favorece <strong>autoexaminarte</strong>, no releer. Juegos y fichas pueden ofrecer recuperación, elige el envoltorio que abres un martes por la noche.</p>
      
      <h2>Plan semana tipo</h2>
      <p>Fichas para entrada y calendario; juegos (o conversación) para producción. Si odias las fichas, invierte la proporción, pero mantén <em>algo</em> de esfuerzo honesto sin la respuesta delante.</p>
      
      <h2>Letters en esta comparación</h2>
      <p><strong>Letters</strong> es de espíritu lúdico primero: fichas táctiles y rondas cortas para quien quiere vocabulario con sensación de juego.</p>
      
      <h2>Resumen</h2>
      <p>No hay duelo real entre juego y ficha. Elige según necesites reconocimiento masivo, producción amena, o ambos, y no dejes que la herramienta sea excusa para no practicar.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario (guía central)</>,
      },
      {
      href: "/es/guides/mejores-apps-aprender-vocabulario/",
      label: <>Mejores apps para aprender vocabulario</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/mejor-forma-aprender-vocabulario/",
      label: <>La mejor forma de aprender vocabulario (casual)</>,
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
