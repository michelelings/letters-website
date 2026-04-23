import { guideArticleBreadcrumb } from "@/lib/guideBreadcrumb";
import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aprender vocabulario a diario: un sistema sencillo",
  description: "Hábito diario de vocabulario: sesiones pequeñas, anclas realistas y constancia, Letters.",
  path: "/es/guides/aprender-vocabulario-diario/",
  locale: "es",
  alternates: {
    en: "/guides/learn-vocabulary-daily/",
    es: "/es/guides/aprender-vocabulario-diario/",
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
      articleJsonLd={{
        path: "/es/guides/aprender-vocabulario-diario/",
        headline: "Aprender vocabulario a diario: un sistema sencillo",
        description: "Hábito diario de vocabulario: sesiones pequeñas, anclas realistas y constancia, Letters.",
      }}
      i18nAlternates={{
        en: "https://www.letters.game/guides/learn-vocabulary-daily/",
        es: "https://www.letters.game/es/guides/aprender-vocabulario-diario/",
      }}
      breadcrumb={guideArticleBreadcrumb({ locale: "es", path: "/es/guides/aprender-vocabulario-diario/", label: "Aprender vocabulario a diario: un sistema sencillo" })}

        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
    >
      <h1 itemProp="headline">Aprender vocabulario a diario: un sistema sencillo</h1>
      <p className="article-lead" itemProp="description">Para <strong>aprender vocabulario a diario</strong>, baja la barra hasta que encaje en la vida: <strong>la misma señal</strong> cada día, <strong>dos a siete minutos</strong> de recuperación y una <strong>regla de perdón</strong> para que un día sin estudio no tumbe todo.</p>
      
      <h2>Ancla a una rutina que ya tienes</h2>
      <p>Tras el café, antes de dormir… une el vocabulario a algo inevitable en tu día.</p>
      <h2>Sesión mínima viable</h2>
      <p>Cinco minutos honestos cuentan; cero minutos es pausa, no fracaso.</p>
      <h2>Rachas como andamio</h2>
      <p>Usa rachas para que la siguiente sesión sea obvia, no para castigarte.</p>
      <h2>Repaso semanal, sin culpa</h2>
      <p>Repasa lo débil una vez por semana; celebra aparecer con imperfección.</p>
      <h2>Letters cada día</h2>
      <p><strong>Letters</strong> está hecho para rondas cortas repetibles, ancla diaria ideal.</p>
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Más guías"
      items={[
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
      },
      {
      href: "/es/guides/aprender-mas-vocabulario-5-minutos/",
      label: <>Más vocabulario en 5 minutos al día</>,
      },
      {
      href: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
      label: <>Vocabulario nuevo cada día</>,
      },
      {
      href: "/es/guides/juegos-aprender-vocabulario/",
      label: <>Juegos para aprender vocabulario</>,
      },
      {
      href: "/es/guides/mejores-apps-aprender-vocabulario/",
      label: <>Mejores apps para aprender vocabulario</>,
      },
      {
      href: "/es/guides/",
      label: <>Todas las guías</>,
      }
      ]}
      />
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho; juega primero.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
