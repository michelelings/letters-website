import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "La mejor forma de aprender vocabulario en español para viajar",
  description: "La mejor forma de aprender vocabulario en español para viajar: frases por situación, cortesía, bloques temáticos y repaso móvil, Letters.",
  path: "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
  locale: "es",
  alternates: {
    en: "/guides/best-way-to-learn-spanish-vocabulary-travel/",
    es: "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
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
        path: "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
        headline: "La mejor forma de aprender vocabulario en español para viajar",
        description: "La mejor forma de aprender vocabulario en español para viajar: frases por situación, cortesía, bloques temáticos y repaso móvil, Letters.",
      }}

        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        extras={[
          { href: "/es/", label: "Inicio" },
          { href: "/es/guides/", label: "Todas las guías" },
        ]}
        langs={[
          { href: "/guides/best-way-to-learn-spanish-vocabulary-travel/", hreflang: "en", label: "English" },
          { href: "/es/guides/mejor-forma-vocabulario-espanol-viaje/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">La mejor forma de aprender vocabulario en español para viajar</h1>
      <p className="article-lead" itemProp="description">La <strong>mejor forma de aprender vocabulario en español para viajar</strong> es <strong>situaciones primero</strong>, no el manual del aula: ensaya los momentos que vas a vivir, mostradores, metro, cafeterías, hotel, y junta <strong>cortesía</strong> (<em>por favor</em>, <em>disculpe</em>, <em>¿podría…?</em>) con los sustantivos y verbos de ese contexto.</p>
      
      <h2>Aprende micro-guiones, no palabras sueltas</h2>
      <p>En viaje mandan los intercambios de diez segundos. Practica pedir, preguntar precio, direcciones, baño, alergias: líneas enteras retienen mejor que vocabulario sin escenario.</p>
      
      <h2>Prioriza que te entiendan con amabilidad</h2>
      <p>La paciencia sube cuando notan esfuerzo. Un puñado de suavizadores y frases de aclaración (<em>más despacio, por favor</em>) abren margen mientras afinas oído y boca.</p>
      
      <h2>Organiza el estudio en torno al viaje</h2>
      <p>Comida, transporte, alojamiento, emergencias: un tema cada pocos días de práctica. Cierra un bloque antes de sumar léxico glamuroso que quizá no necesites.</p>
      
      <h2>Practica en voz alta, acento imperfecto incluido</h2>
      <p>Murmurar en silencio solo entrena reconocimiento. Hablar en voz alta, aunque suene raro, construye la motricidad para sacar palabras bajo prisa leve.</p>
      
      <h2>Lleva una lista mínima sin conexión</h2>
      <p>Captura o anota tus guiones en el móvil. Repasa en cola, no solo en casa. El vocabulario de viaje muere en el cajón.</p>
      
      <h2>Mezcla con juegos de recuperación antes de volar</h2>
      <p>Antes del vuelo, alterna lectura pasiva con juegos que obliguen a producir. <strong>Letters</strong> encaja si quieres deletrear y jugar sin montar un aula en el salón.</p>
      
      <h2>Resumen</h2>
      <p>Guiones, cortesía, bloques temáticos, voz alta y repaso móvil superan mazos abstractos. Construye vocabulario para el viaje real, y luego disfrútalo al usarlo.</p>
      
      <RelatedLinks
      ariaLabel="Guías relacionadas"
      heading="Guías relacionadas"
      items={[
      {
      href: "/es/guides/aprender-vocabulario-espanol/",
      label: <>Aprender vocabulario en español (guía central)</>,
      },
      {
      href: "/es/guides/mejores-formas-aprender-vocabulario/",
      label: <>Mejores formas de aprender vocabulario</>,
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
      
      <RelatedLinks
        ariaLabel="Páginas de estudio"
        heading="Páginas de estudio"
        items={[
          {
            href: "/learn/spanish/travel/restaurants/",
            label: <>Viaje: restaurantes (inglés en el sitio)</>,
          },
          {
            href: "/learn/spanish/",
            label: <>Resumen «Learn Spanish» (inglés en el sitio)</>,
          },
          {
            href: "/spanish/",
            label: <>Hub de español</>,
          },
          {
            href: "/learn/spanish/family-vocabulary/",
            label: <>Vocabulario de familia</>,
          },
        ]}
      />
      
      <ArticleCta label="Descargar Letters">
      <p><strong>Prueba Letters</strong>: un juego de palabras de Ocho. Sesiones cortas y fichas táctiles, pensado para quien quiere jugar antes que agobiarse.</p>
      </ArticleCta>
      
    </ArticlePage>
  );
}
