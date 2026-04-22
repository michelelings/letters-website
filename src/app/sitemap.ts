import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * All canonical URLs for the site, preserved 1:1 from the legacy static site.
 * Keep this list in sync with the pages under `src/app/*`.
 */
const PATHS: string[] = [
  "/",
  "/es/",
  "/guides/",
  "/es/guides/",
  "/guides/best-ways-to-learn-vocabulary/",
  "/es/guides/mejores-formas-aprender-vocabulario/",
  "/guides/learn-spanish-vocabulary/",
  "/es/guides/aprender-vocabulario-espanol/",
  "/guides/learn-english-vocabulary/",
  "/es/guides/aprender-vocabulario-ingles/",
  "/guides/learn-japanese-vocabulary/",
  "/es/guides/aprender-vocabulario-japones/",
  "/guides/learn-german-vocabulary/",
  "/es/guides/aprender-vocabulario-aleman/",
  "/guides/games-to-learn-vocabulary/",
  "/es/guides/juegos-aprender-vocabulario/",
  "/guides/best-apps-to-learn-vocabulary/",
  "/es/guides/mejores-apps-aprender-vocabulario/",
  "/guides/learn-chinese-vocabulary/",
  "/es/guides/aprender-vocabulario-chino/",
  "/guides/learn-korean-vocabulary/",
  "/es/guides/aprender-vocabulario-coreano/",
  "/guides/learn-vocabulary-daily/",
  "/es/guides/aprender-vocabulario-diario/",
  "/guides/how-to-learn-vocabulary-fast/",
  "/es/guides/aprender-vocabulario-rapido/",
  "/guides/best-way-to-learn-vocabulary/",
  "/es/guides/mejor-forma-aprender-vocabulario/",
  "/guides/how-to-learn-japanese-vocabulary/",
  "/es/guides/como-aprender-vocabulario-japones/",
  "/guides/strategies-difficult-vocabulary-words/",
  "/es/guides/estrategias-vocabulario-dificil/",
  "/guides/best-way-to-learn-spanish-vocabulary-travel/",
  "/es/guides/mejor-forma-vocabulario-espanol-viaje/",
  "/guides/how-to-learn-spanish-without-classes/",
  "/es/guides/aprender-vocabulario-espanol-sin-clases/",
  "/guides/learn-more-vocabulary-in-5-minutes-a-day/",
  "/es/guides/aprender-mas-vocabulario-5-minutos/",
  "/guides/learn-new-vocabulary-every-day/",
  "/es/guides/aprender-vocabulario-nuevo-cada-dia/",
  "/guides/learn-german-vocabulary-without-grammar-drills/",
  "/es/guides/aprender-vocabulario-aleman-sin-gramatica/",
  "/guides/word-games-vs-flashcards-vocabulary/",
  "/es/guides/juegos-palabras-vs-fichas-vocabulario/",
  "/guides/why-learn-vocabulary-through-games/",
  "/es/guides/por-que-aprender-vocabulario-con-juegos/",
  "/guides/how-to-learn-chinese-vocabulary/",
  "/es/guides/como-aprender-vocabulario-chino/",
  "/guides/how-to-learn-korean-vocabulary/",
  "/es/guides/como-aprender-vocabulario-coreano/",
  "/guides/english-vocabulary-games-for-adults/",
  "/es/guides/juegos-vocabulario-ingles-adultos/",
  "/guides/best-vocabulary-games-for-adults/",
  "/es/guides/mejores-juegos-vocabulario-adultos/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${SITE_URL}${p}` }));
}
