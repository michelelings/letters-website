import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "La mejor forma de aprender vocabulario (estudiantes casuales)",
  description: "La mejor forma de aprender vocabulario para estudiantes casuales: hábitos sin presión, práctica lúdica y recuperación que encaja en la vida real.",
  path: "/es/guides/mejor-forma-aprender-vocabulario/",
  locale: "es",
  alternates: {
    en: "/guides/best-way-to-learn-vocabulary/",
    es: "/es/guides/mejor-forma-aprender-vocabulario/",
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
          { href: "/guides/best-way-to-learn-vocabulary/", hreflang: "en", label: "English" },
          { href: "/es/guides/mejor-forma-aprender-vocabulario/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">La mejor forma de aprender vocabulario (para estudiantes casuales)</h1>
      <p className="article-lead" itemProp="description">La <strong>mejor forma de aprender vocabulario</strong> si no te preparas para un examen es la que <em>repites</em>: práctica breve y amena, <strong>recuperación activa</strong> en lugar de scroll pasivo y metas lo bastante pequeñas para una semana ocupada.</p>
      
      <h2>Diseña para constancia, no para días heroicos</h2>
      <p>El estudiante casual pierde fuelle cuando la meta es «terminar el mazo entero». Un método sostenible prioriza <strong>victorias fáciles</strong>: una sesión corta, un momento fijo del día y permiso para parar cuando aún tienes energía.</p>
      
      <h2>Prefiere la recuperación en formatos divertidos</h2>
      <p>Juegos de palabras, puzles con fichas y tests rápidos fuerzan <strong>producción activa</strong> con presión ligera, más cercana al uso real que a mirar traducciones. Si parece juego, es más difícil «negociar» para no practicar.</p>
      
      <h2>Mantén listas de tamaño humano</h2>
      <p>Elige <strong>un tema a la vez</strong> (café, direcciones, amigos) y ciérralo antes de sumar más. La amplitud entusiasma; la profundidad es lo que hace las palabras disponibles cuando las necesitas.</p>
      
      <h2>Ancla el léxico a situaciones que te importen</h2>
      <p>Viajes, series, aficiones: une el vocabulario a contextos que vas a visitar de verdad. La memoria es narrativa; un buen método lo aprovecha en lugar de pelear contra ello.</p>
      
      <h2>Combina con gramática «suficientemente buena»</h2>
      <p>No necesitas gramática perfecta para ganar vocabulario. Aprende <strong>frases hechas</strong>, imita oraciones cortas y deja que la precisión mejore con exposición. El perfeccionismo es una causa frecuente de abandono entre quien estudia sin prisa.</p>
      
      <h2>Letters encaja en el camino casual</h2>
      <p><strong>Letters</strong> apuesta por rondas breves y juego con letras, una superficie de baja fricción para quien quiere avanzar sin ambiente de clase.</p>
      
      <h2>Resumen</h2>
      <p>Lo mejor es lo repetible: sesiones pequeñas, recuperación activa, manojos temáticos y contexto personal. Primero el hábito; velocidad y amplitud llegan después.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-ingles/",
      label: <>Aprender vocabulario en inglés</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-diario/",
      label: <>Aprender vocabulario a diario</>,
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
