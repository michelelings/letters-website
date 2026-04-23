import type { Metadata } from "next";
import { ArticlePage, ArticleCta, RelatedLinks } from "@/components/article";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cómo aprender vocabulario rápido: 7 técnicas comprobadas",
  description: "Cómo aprender vocabulario rápido: 7 técnicas prácticas, sesiones cortas, espaciado, recuperación activa, chunks y hábitos que sí se mantienen. Letters.",
  path: "/es/guides/aprender-vocabulario-rapido/",
  locale: "es",
  alternates: {
    en: "/guides/how-to-learn-vocabulary-fast/",
    es: "/es/guides/aprender-vocabulario-rapido/",
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
          { href: "/guides/how-to-learn-vocabulary-fast/", hreflang: "en", label: "English" },
          { href: "/es/guides/aprender-vocabulario-rapido/", hreflang: "es", label: "Español", current: true },
        ]}
    >
      <h1 itemProp="headline">Cómo aprender vocabulario rápido: 7 técnicas comprobadas</h1>
      <p className="article-lead" itemProp="description">Si quieres <strong>aprender vocabulario rápido</strong>, evita el cramming infinito. El patrón que funciona combina <strong>recuperación breve e intensa</strong>, <strong>espaciado</strong> (volver a la palabra antes de olvidarla) y <strong>contexto con sentido</strong> para que cada término tenga sitio en la memoria.</p>
      
      <h2>1. Limita el tiempo de estudio (de verdad: 10–15 minutos)</h2>
      <p>Estudiar horas seguidas <em>parece</em> productivo, pero con palabras suelen ganar las <strong>rachas concentradas</strong>. Mantienes foco, evitas fatigar decisiones y es más fácil volver al día siguiente. La velocidad suele ser <em>frecuencia</em>, no duración.</p>
      
      <h2>2. Espacia los repasos, antes de que “ya no lo olvidaré nunca”</h2>
      <p>Vuelve a las palabras con un ritmo suelto: hoy, mañana, unos días después, luego a la semana. No hace falta un algoritmo perfecto el día uno: necesitas <strong>segundos contactos predecibles</strong> para consolidar antes de que se borre el recuerdo.</p>
      
      <h2>3. Prioriza la recuperación activa frente a releer</h2>
      <p>Mirar la lista es cómodo; <strong>sacar la palabra de la nada</strong> es lo que acelera el aprendizaje. Tapa la respuesta. Dígela. Escríbela. Usa un puzle que obligue a producir. Ese segundo extra de esfuerzo es el núcleo del proceso.</p>
      
      <h2>4. Aprende bloques, no solo palabras sueltas</h2>
      <p>Empareja términos con colocaciones y frases cortas. Los chunks codifican ritmo y gramática a la vez: más provecho por minuto que memorizar lemas aislados.</p>
      
      <h2>5. Mezcla reconocimiento y producción</h2>
      <p>Alterna «¿la reconozco al verla?» con «¿la digo o escribo yo solo?». Entrenan vínculos distintos en memoria. Los juegos que combinan ambas cosas mantienen la dificultad en un rango agradable.</p>
      
      <h2>6. Lleva la cuenta de victorias pequeñas</h2>
      <p>Siete palabras dominadas esta semana supera el plan vago de “estudiar más.” Cifras pequeñas reducen el perfeccionismo y hacen visible el progreso.</p>
      
      <h2>7. Elige una superficie de práctica que te guste</h2>
      <p>El método <em>más rápido</em> es el que repites. Si el juego con fichas te motiva más que las tarjetas, apóyate en ello. <strong>Letters</strong> está pensado para rondas cortas y recuperación que sigue sintiéndose a juego.</p>
      
      <h2>Resumen</h2>
      <p>La velocidad viene de recuperar, espaciar, dotar de significado y volver a menudo. Con estos siete hábitos notarás cambios en pocos días, no por un truco, sino por el tipo de repetición que la memoria sí premia.</p>
      
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
