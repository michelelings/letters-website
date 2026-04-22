import type { Metadata } from "next";
import Link from "next/link";
import { ArticleTopbar } from "@/components/ArticleTopbar";
import { ArticleBodyClass } from "@/components/ArticleBodyClass";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleEffect } from "@/components/LocaleEffect";
import { GuidesFocusBar } from "@/components/GuidesFocusBar";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guías de vocabulario",
  description:
    "Guías para aprender vocabulario con juegos, hábitos diarios y consejos por idioma, Letters.",
  path: "/es/guides/",
  locale: "es",
  alternates: { en: "/guides/", es: "/es/guides/" },
});

interface GuideItem {
  href: string;
  title: string | React.ReactNode;
  blurb: string;
}

function GuideList({ items }: { items: GuideItem[] }) {
  return (
    <ul className="guides-index__list">
      {items.map((g) => (
        <li key={g.href}>
          <Link href={g.href}>{g.title}</Link>
          <p>{g.blurb}</p>
        </li>
      ))}
    </ul>
  );
}

export default function SpanishGuidesIndexPage() {
  return (
    <>
      <LocaleEffect locale="es" />
      <ArticleBodyClass />
      <ArticleTopbar brand="Letters" ctaLabel="Descargar" />
      <main id="main" className="article-wrap">
        <article className="article-post">
          <h1>Guías de vocabulario</h1>
          <p className="article-lead">
            Artículos prácticos y cercanos al juego para aprender y recordar palabras, en la línea de Letters.
          </p>
          <p className="guides-focus-hint">
            Aquí mezclamos consejos <strong>generales</strong> y guías por <strong>idioma que estudias</strong>. Si te centras sobre todo en uno, elígelo abajo para subir ese bloque (solo en este dispositivo, no es lo mismo que el idioma del sitio en el pie).
          </p>
          <GuidesFocusBar
            label="Estoy aprendiendo"
            defaultOptionLabel="General primero (orden por defecto)"
            languageOptions={[
              { value: "spanish", label: "Español" },
              { value: "english", label: "Inglés" },
              { value: "japanese", label: "Japonés" },
              { value: "german", label: "Alemán" },
              { value: "chinese", label: "Chino" },
              { value: "korean", label: "Coreano" },
            ]}
          />

          <section className="guides-index__section" aria-labelledby="guides-h-general">
            <h2 className="guides-index__heading" id="guides-h-general">Guías transversales</h2>
            <p className="guides-index__section-intro">
              Métodos, juegos, apps y hábitos, válidos para cualquier idioma.
            </p>
            <GuideList items={[
              { href: "/es/guides/mejores-formas-aprender-vocabulario/", title: "Mejores formas de aprender vocabulario (sin fichas)", blurb: "Métodos, espaciado, contexto y práctica lúdica." },
              { href: "/es/guides/juegos-aprender-vocabulario/", title: "Juegos para aprender vocabulario (que sí funcionan)", blurb: "Qué hace útiles los juegos de palabras y qué conviene evitar." },
              { href: "/es/guides/mejores-apps-aprender-vocabulario/", title: "Mejores apps para aprender vocabulario (ranking)", blurb: "Cómo elegir una app si buscas juego, no solo deberes." },
              { href: "/es/guides/aprender-vocabulario-diario/", title: "Aprender vocabulario a diario: un sistema sencillo", blurb: "Rachas, metas pequeñas y constancia sin agotarte." },
              { href: "/es/guides/aprender-vocabulario-rapido/", title: "Cómo aprender vocabulario rápido: 7 técnicas", blurb: "Sesiones cortas, espaciado y hábitos de recuperación que escalan." },
              { href: "/es/guides/mejor-forma-aprender-vocabulario/", title: "La mejor forma de aprender vocabulario (casual)", blurb: "Práctica sin presión cuando no memorizas para un examen." },
              { href: "/es/guides/estrategias-vocabulario-dificil/", title: "Estrategias para vocabulario difícil", blurb: "Cuando las palabras se confunden o no entran, ataca la causa." },
              { href: "/es/guides/aprender-mas-vocabulario-5-minutos/", title: "Más vocabulario en 5 minutos al día", blurb: "Micro-sesiones, una meta por sesión, anclas que funcionan." },
              { href: "/es/guides/aprender-vocabulario-nuevo-cada-dia/", title: "Vocabulario nuevo cada día", blurb: "Pocos estrenos, mucho repaso, capture y modos mixtos." },
              { href: "/es/guides/juegos-palabras-vs-fichas-vocabulario/", title: "Juegos de palabras vs fichas", blurb: "Cuándo conviene cada herramienta y cómo combinarlas." },
              { href: "/es/guides/por-que-aprender-vocabulario-con-juegos/", title: "Por qué aprender vocabulario con juegos", blurb: "Recuperación, motivación y ritmo, enfoque cercano a la evidencia." },
              { href: "/es/guides/mejores-juegos-vocabulario-adultos/", title: "Mejores juegos de vocabulario para adultos", blurb: "Qué priorizar cuando quieres recuperación real." },
            ]} />
          </section>

          <div className="guides-index__lang-wrap" id="guides-lang-sections">
            <section className="guides-index__section" data-guide-lang="spanish" data-order="0" aria-labelledby="guides-h-es">
              <h2 className="guides-index__heading" id="guides-h-es">Español</h2>
              <GuideList items={[
                { href: "/es/guides/aprender-vocabulario-espanol/", title: "Aprender vocabulario en español de forma divertida", blurb: "Categorías, viaje y práctica tipo puzle para estudiantes casuales." },
                { href: "/es/guides/mejor-forma-vocabulario-espanol-viaje/", title: "Mejor vocabulario en español para viajar", blurb: "Frases por situación, cortesía y práctica temática de viaje." },
                { href: "/es/guides/aprender-vocabulario-espanol-sin-clases/", title: "Aprender vocabulario en español sin clases", blurb: "Temas, input, habla temprana y recuperación lúdica." },
              ]} />
              <p className="guides-index__section-intro">
                Páginas de estudio en Letters: hubs, listas por tema, viaje y fichas de palabras (contenido en inglés en el sitio).
              </p>
              <GuideList items={[
                { href: "/spanish/", title: "Hub de español", blurb: "Vocabulario, frases, viaje, traducciones y notas por país." },
                { href: "/learn/spanish/", title: "Resumen «Learn Spanish»", blurb: "Palabras, temas, frases, viaje y páginas regionales." },
                { href: "/learn/spanish/family-vocabulary/", title: "Vocabulario de familia", blurb: "Lista temática para casa y parientes." },
                { href: "/learn/spanish/travel/restaurants/", title: "Viaje: restaurantes", blurb: "Pedir, la cuenta y frases al comer fuera." },
                { href: "/learn/spanish/word/hermana/", title: (<span lang="es">hermana</span>), blurb: "Ficha de ejemplo: significado, pronunciación y palabras relacionadas." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="english" data-order="1" aria-labelledby="guides-h-en">
              <h2 className="guides-index__heading" id="guides-h-en">Inglés</h2>
              <GuideList items={[
                { href: "/es/guides/aprender-vocabulario-ingles/", title: "Aprender vocabulario en inglés: juegos vs fichas", blurb: "Para quien estudia inglés y prefiere juego antes que memorización abstracta." },
                { href: "/es/guides/juegos-vocabulario-ingles-adultos/", title: "Juegos de vocabulario en inglés para adultos", blurb: "Estilo puzle sin ambiente infantil." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="japanese" data-order="2" aria-labelledby="guides-h-ja">
              <h2 className="guides-index__heading" id="guides-h-ja">Japonés</h2>
              <GuideList items={[
                { href: "/es/guides/aprender-vocabulario-japones/", title: "Aprender vocabulario japonés con juegos de palabras", blurb: "Hiragana, sesiones cortas y repetición gamificada." },
                { href: "/es/guides/como-aprender-vocabulario-japones/", title: "Cómo aprender vocabulario japonés (divertido)", blurb: "Hiragana, temas y recuperación lúdica más allá del copiado." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="german" data-order="3" aria-labelledby="guides-h-de">
              <h2 className="guides-index__heading" id="guides-h-de">Alemán</h2>
              <GuideList items={[
                { href: "/es/guides/aprender-vocabulario-aleman/", title: "Aprender vocabulario alemán con práctica diaria tipo puzle", blurb: "Compuestos, viaje y palabras en dosis pequeñas." },
                { href: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/", title: "Alemán sin ejercicios de gramática", blurb: "Frases, compuestos y temas antes de declinaciones largas." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="chinese" data-order="4" aria-labelledby="guides-h-zh">
              <h2 className="guides-index__heading" id="guides-h-zh">Chino</h2>
              <GuideList items={[
                { href: "/es/guides/aprender-vocabulario-chino/", title: "Aprender vocabulario chino con juegos de palabras", blurb: "Pinyin, caracteres y categorías sin ahogarse en ejercicios." },
                { href: "/es/guides/como-aprender-vocabulario-chino/", title: "Cómo aprender vocabulario chino (divertido)", blurb: "Pinyin, temas y caracteres a tu ritmo." },
              ]} />
            </section>

            <section className="guides-index__section" data-guide-lang="korean" data-order="5" aria-labelledby="guides-h-ko">
              <h2 className="guides-index__heading" id="guides-h-ko">Coreano</h2>
              <GuideList items={[
                { href: "/es/guides/aprender-vocabulario-coreano/", title: "Aprender vocabulario coreano: juego de palabras diario", blurb: "Hangul, cultura y hábitos sostenibles." },
                { href: "/es/guides/como-aprender-vocabulario-coreano/", title: "Cómo aprender vocabulario coreano (divertido)", blurb: "Hangul, temas y práctica sin culpa." },
              ]} />
            </section>
          </div>
        </article>
      </main>
      <SiteFooter
        locale="es"
        pageType="article"
        madeByLabel="Letters es de"
        extrasAriaLabel="Sitio"
        langAriaLabel="Elegir idioma"
        extras={[{ href: "/es/", label: "Inicio" }]}
        langs={[
          { href: "/guides/", hreflang: "en", label: "English" },
          { href: "/es/guides/", hreflang: "es", label: "Español", current: true },
        ]}
      />
    </>
  );
}
