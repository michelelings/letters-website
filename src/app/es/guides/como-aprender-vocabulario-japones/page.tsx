import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cómo aprender vocabulario japonés (de forma divertida)",
  description: "Cómo aprender vocabulario japonés de forma divertida: hiragana estable, conjuntos temáticos, recuperación activa y hábitos, consejos de Letters.",
  path: "/es/guides/como-aprender-vocabulario-japones/",
  locale: "es",
  alternates: {
    en: "/guides/how-to-learn-japanese-vocabulary/",
    es: "/es/guides/como-aprender-vocabulario-japones/",
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
          { href: "/guides/how-to-learn-japanese-vocabulary/", hreflang: "en", label: "English" },
          { href: "/es/guides/como-aprender-vocabulario-japones/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Cómo aprender vocabulario japonés (de forma divertida)</h1>
      <p className="article-lead" itemProp="description">¿<strong>Cómo aprender vocabulario japonés</strong> sin que cada tarde sea copiar de forma mecánica? Combina <strong>hiragana leíble con agilidad</strong>, <strong>bloques temáticos</strong> (comida, transporte, verbos cotidianos) y <strong>recuperación</strong> en formatos tipo puzle para que el ritmo siga motivando.</p>
      
      <h2>Haz el hiragana incómodamente automático primero</h2>
      <p>Hasta que las sílabas básicas se lean rápido, cada palabra arrastra un coste extra de descifrado. Mezcla práctica de caracteres con <strong>palabras con sentido</strong> para no estudiar grafías en el vacío.</p>
      
      <h2>Aprende por conjuntos temáticos, no por maratones aleatorias</h2>
      <p>Un fin de semana de «top 500» dispersa la atención. Elige grupos pequeños, konbini y compras, frases de tren, verbos del día, y ciérralos antes de abrir el siguiente tema.</p>
      
      <h2>Fuerza la recuperación, no solo el reconocimiento</h2>
      <p>El romaji puede ser una manta de consuelo que frena la lectura. Empuja hacia <strong>leer kana con significado</strong> y produce lecturas tú mismo antes de mirar la solución. Ese hueco es donde se forma la memoria.</p>
      
      <h2>Usa frases cortas desde pronto</h2>
      <p>Incluso enunciados de dos palabras codifican acento y partículas mejor que lemas sueltos. Repite líneas sencillas y cambia solo un elemento (<em>これください</em> → cambia el nombre).</p>
      
      <h2>Apila repeticiones diarias pequeñas</h2>
      <p>El japonés premia la constancia: cinco minutos honestos superan el atracón mensual de culpa. Enlaza la práctica con algo que ya haces cada día para no depender solo de la fuerza de voluntad.</p>
      
      <h2>Por qué ayuda la práctica tipo puzle</h2>
      <p>Deletrear o montar palabras desde letras (o fichas kana) imita la <strong>recuperación con ligera fricción</strong>, más cercana a preparar conversación que al vídeo pasivo. <strong>Letters</strong> apunta a quien quiere juego táctil junto al trabajo con caracteres.</p>
      
      <h2>Resumen</h2>
      <p>Estabiliza el kana, tematiza listas, prioriza la producción y mantén sesiones cortas. La diversión no es un adorno: es lo que hace que el estudiante casual aguante hasta que el japonés quede.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-japones/",
      label: <>Aprender vocabulario japonés (guía central)</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-chino/",
      label: <>Aprender vocabulario chino</>,
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
