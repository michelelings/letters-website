import { Term } from "@/components/article";
import type { GuidesIndexData } from "@/components/guides/types";

export const guidesIndexEs: GuidesIndexData = {
  h1: "Guías de vocabulario",
  lead: "Artículos prácticos y cercanos al juego para aprender y recordar palabras, en la línea de Letters.",
  focusHint: (
    <>
      Aquí mezclamos consejos <strong>generales</strong> y guías por <strong>idioma que estudias</strong>. Si te
      centras sobre todo en uno, elígelo abajo para subir ese bloque (solo en este dispositivo, no es lo mismo
      que el idioma del sitio en el pie).
    </>
  ),
  focusBar: {
    label: "Estoy aprendiendo",
    defaultOptionLabel: "General primero (orden por defecto)",
    options: [
      { value: "spanish", label: "Español" },
      { value: "english", label: "Inglés" },
      { value: "japanese", label: "Japonés" },
      { value: "german", label: "Alemán" },
      { value: "chinese", label: "Chino" },
      { value: "korean", label: "Coreano" },
    ],
  },
  general: {
    headingId: "guides-h-general",
    title: "Guías transversales",
    intro: "Métodos, juegos, apps y hábitos, válidos para cualquier idioma.",
    items: [
      {
        href: "/es/guides/mejores-formas-aprender-vocabulario/",
        title: "Mejores formas de aprender vocabulario (sin fichas)",
        blurb: "Métodos, espaciado, contexto y práctica lúdica.",
      },
      {
        href: "/es/guides/juegos-aprender-vocabulario/",
        title: "Juegos para aprender vocabulario (que sí funcionan)",
        blurb: "Qué hace útiles los juegos de palabras y qué conviene evitar.",
      },
      {
        href: "/es/guides/mejores-apps-aprender-vocabulario/",
        title: "Mejores apps para aprender vocabulario (ranking)",
        blurb: "Cómo elegir una app si buscas juego, no solo deberes.",
      },
      {
        href: "/es/guides/aprender-vocabulario-diario/",
        title: "Aprender vocabulario a diario: un sistema sencillo",
        blurb: "Rachas, metas pequeñas y constancia sin agotarte.",
      },
      {
        href: "/es/guides/aprender-vocabulario-rapido/",
        title: "Cómo aprender vocabulario rápido: 7 técnicas",
        blurb: "Sesiones cortas, espaciado y hábitos de recuperación que escalan.",
      },
      {
        href: "/es/guides/mejor-forma-aprender-vocabulario/",
        title: "La mejor forma de aprender vocabulario (casual)",
        blurb: "Práctica sin presión cuando no memorizas para un examen.",
      },
      {
        href: "/es/guides/estrategias-vocabulario-dificil/",
        title: "Estrategias para vocabulario difícil",
        blurb: "Cuando las palabras se confunden o no entran, ataca la causa.",
      },
      {
        href: "/es/guides/aprender-mas-vocabulario-5-minutos/",
        title: "Más vocabulario en 5 minutos al día",
        blurb: "Micro-sesiones, una meta por sesión, anclas que funcionan.",
      },
      {
        href: "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
        title: "Vocabulario nuevo cada día",
        blurb: "Pocos estrenos, mucho repaso, capture y modos mixtos.",
      },
      {
        href: "/es/guides/juegos-palabras-vs-fichas-vocabulario/",
        title: "Juegos de palabras vs fichas",
        blurb: "Cuándo conviene cada herramienta y cómo combinarlas.",
      },
      {
        href: "/es/guides/por-que-aprender-vocabulario-con-juegos/",
        title: "Por qué aprender vocabulario con juegos",
        blurb: "Recuperación, motivación y ritmo, enfoque cercano a la evidencia.",
      },
      {
        href: "/es/guides/mejores-juegos-vocabulario-adultos/",
        title: "Mejores juegos de vocabulario para adultos",
        blurb: "Qué priorizar cuando quieres recuperación real.",
      },
    ],
  },
  langColumns: [
    {
      dataGuideLang: "spanish",
      dataOrder: "0",
      headingId: "guides-h-es",
      title: "Español",
      blocks: [
        {
          items: [
            {
              href: "/es/guides/aprender-vocabulario-espanol/",
              title: "Aprender vocabulario en español de forma divertida",
              blurb: "Categorías, viaje y práctica tipo puzle para estudiantes casuales.",
            },
            {
              href: "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
              title: "Mejor vocabulario en español para viajar",
              blurb: "Frases por situación, cortesía y práctica temática de viaje.",
            },
            {
              href: "/es/guides/aprender-vocabulario-espanol-sin-clases/",
              title: "Aprender vocabulario en español sin clases",
              blurb: "Temas, input, habla temprana y recuperación lúdica.",
            },
          ],
        },
        {
          sectionIntro: "Páginas de estudio en Letters: hubs, listas por tema, viaje y fichas de palabras (contenido en inglés en el sitio).",
          items: [
            {
              href: "/spanish/",
              title: "Hub de español",
              blurb: "Vocabulario, frases, viaje, traducciones y notas por país.",
            },
            {
              href: "/learn/spanish/",
              title: "Resumen «Learn Spanish»",
              blurb: "Palabras, temas, frases, viaje y páginas regionales.",
            },
            {
              href: "/learn/spanish/family-vocabulary/",
              title: "Vocabulario de familia",
              blurb: "Lista temática para casa y parientes.",
            },
            {
              href: "/learn/spanish/travel/restaurants/",
              title: "Viaje: restaurantes",
              blurb: "Pedir, la cuenta y frases al comer fuera.",
            },
            {
              href: "/learn/spanish/word/hermana/",
              title: <Term lang="es">hermana</Term>,
              blurb: "Ficha de ejemplo: significado, pronunciación y palabras relacionadas.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "english",
      dataOrder: "1",
      headingId: "guides-h-en",
      title: "Inglés",
      blocks: [
        {
          items: [
            {
              href: "/es/guides/aprender-vocabulario-ingles/",
              title: "Aprender vocabulario en inglés: juegos vs fichas",
              blurb: "Para quien estudia inglés y prefiere juego antes que memorización abstracta.",
            },
            {
              href: "/es/guides/juegos-vocabulario-ingles-adultos/",
              title: "Juegos de vocabulario en inglés para adultos",
              blurb: "Estilo puzle sin ambiente infantil.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "japanese",
      dataOrder: "2",
      headingId: "guides-h-ja",
      title: "Japonés",
      blocks: [
        {
          items: [
            {
              href: "/es/guides/aprender-vocabulario-japones/",
              title: "Aprender vocabulario japonés con juegos de palabras",
              blurb: "Hiragana, sesiones cortas y repetición gamificada.",
            },
            {
              href: "/es/guides/como-aprender-vocabulario-japones/",
              title: "Cómo aprender vocabulario japonés (divertido)",
              blurb: "Hiragana, temas y recuperación lúdica más allá del copiado.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "german",
      dataOrder: "3",
      headingId: "guides-h-de",
      title: "Alemán",
      blocks: [
        {
          items: [
            {
              href: "/es/guides/aprender-vocabulario-aleman/",
              title: "Aprender vocabulario alemán con práctica diaria tipo puzle",
              blurb: "Compuestos, viaje y palabras en dosis pequeñas.",
            },
            {
              href: "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
              title: "Alemán sin ejercicios de gramática",
              blurb: "Frases, compuestos y temas antes de declinaciones largas.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "chinese",
      dataOrder: "4",
      headingId: "guides-h-zh",
      title: "Chino",
      blocks: [
        {
          items: [
            {
              href: "/es/guides/aprender-vocabulario-chino/",
              title: "Aprender vocabulario chino con juegos de palabras",
              blurb: "Pinyin, caracteres y categorías sin ahogarse en ejercicios.",
            },
            {
              href: "/es/guides/como-aprender-vocabulario-chino/",
              title: "Cómo aprender vocabulario chino (divertido)",
              blurb: "Pinyin, temas y caracteres a tu ritmo.",
            },
          ],
        },
      ],
    },
    {
      dataGuideLang: "korean",
      dataOrder: "5",
      headingId: "guides-h-ko",
      title: "Coreano",
      blocks: [
        {
          items: [
            {
              href: "/es/guides/aprender-vocabulario-coreano/",
              title: "Aprender vocabulario coreano: juego de palabras diario",
              blurb: "Hangul, cultura y hábitos sostenibles.",
            },
            {
              href: "/es/guides/como-aprender-vocabulario-coreano/",
              title: "Cómo aprender vocabulario coreano (divertido)",
              blurb: "Hangul, temas y práctica sin culpa.",
            },
          ],
        },
      ],
    },
  ],
};
