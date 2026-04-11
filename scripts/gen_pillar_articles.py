#!/usr/bin/env python3
"""One-off generator for pillar article HTML pairs (EN + ES)."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

EN_FOOTER_SCRIPT = """
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      function analyticsEvent(name, params) {
        if (typeof gtag === 'function') gtag('event', name, params);
      }
      document.querySelectorAll('.article-topbar__cta, .article-post .beta-cta__btn').forEach((el) => {
        el.addEventListener('click', () => {
          analyticsEvent('download_beta_click', { link_url: el.href, locale: '__LOCALE__', page_type: 'article' });
        });
      });
      document.querySelector('.site-footer p a')?.addEventListener('click', () => {
        analyticsEvent('ocho_link_click', { link_url: 'https://www.ocho.so', locale: '__LOCALE__', page_type: 'article' });
      });
    });
  </script>
"""

GA_HEAD = """
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-CYNDT2QSQX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ letters_locale: '__LOCALE__' });
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CYNDT2QSQX');
  </script>
"""

OG_BLOCK = """
  <meta property="og:image" content="https://www.letters.game/og-image.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="900">
"""


def ld_article(headline: str, description: str, url: str, lang: str) -> str:
    data = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": description,
        "url": url,
        "inLanguage": lang,
        "author": {"@type": "Organization", "name": "Ocho", "url": "https://www.ocho.so"},
        "publisher": {"@type": "Organization", "name": "Ocho", "url": "https://www.ocho.so"},
    }
    return json.dumps(data, ensure_ascii=False)


def write_en(
    slug: str,
    slug_es: str,
    title: str,
    meta_desc: str,
    og_desc: str,
    h1: str,
    lead: str,
    body: str,
    related: list[tuple[str, str]],
) -> None:
    url_en = f"https://www.letters.game/guides/{slug}/"
    url_es = f"https://www.letters.game/es/guides/{slug_es}/"
    rel_html = "\n".join(f'          <li><a href="{href}">{label}</a></li>' for href, label in related)
    topbar_home = "/"
    dl = "Download"
    cta_title = "Try Letters"
    cta_p = "Short word puzzles from Ocho. Play first, pressure second."
    cta_btn = "Download Letters"
    footer_home, footer_guides = "Home", "All guides"
    footer_aria = "Site"
    related_heading = "Related guides"
    brand_href = "/"

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="description" content="{meta_desc}">
  <link rel="canonical" href="{url_en}">
  <link rel="alternate" hreflang="en" href="{url_en}">
  <link rel="alternate" hreflang="es" href="{url_es}">
  <link rel="alternate" hreflang="x-default" href="{url_en}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{url_en}">
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="es_ES">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{og_desc}">
{OG_BLOCK}
  <meta property="og:image:alt" content="Letters: word game from Ocho">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{og_desc}">
  <meta name="twitter:image" content="https://www.letters.game/og-image.png">
  <title>{title} | Letters</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <script type="application/ld+json">
  {ld_article(h1, og_desc, url_en, "en")}
  </script>
{GA_HEAD.replace('__LOCALE__', 'en')}
  <link rel="stylesheet" href="/styles.css">
</head>
<body class="body--article">
  <header class="article-topbar">
    <div class="article-topbar__inner">
      <a class="article-topbar__brand" href="{brand_href}">Letters</a>
      <a class="article-topbar__cta" href="https://testflight.apple.com/join/3jNtcz3K" target="_blank" rel="noopener noreferrer">{dl}</a>
    </div>
  </header>
  <main id="main" class="article-wrap">
    <article class="article-post" itemscope itemtype="https://schema.org/Article">
      <h1 itemprop="headline">{h1}</h1>
      <p class="article-lead" itemprop="description">{lead}</p>
{body}
      <nav class="article-related" aria-label="{related_heading}">
        <h2>{related_heading}</h2>
        <ul>
{rel_html}
          <li><a href="/guides/">All guides</a></li>
        </ul>
      </nav>
      <div class="article-cta-box">
        <p><strong>{cta_title}</strong>: {cta_p}</p>
      </div>
      <p class="beta-cta">
        <a class="beta-cta__btn" href="https://testflight.apple.com/join/3jNtcz3K" target="_blank" rel="noopener noreferrer">{cta_btn}</a>
      </p>
    </article>
  </main>
  <footer class="site-footer">
    <nav class="site-footer__extras" aria-label="{footer_aria}">
      <a href="{topbar_home}">{footer_home}</a>
      <span class="lang-switch__sep" aria-hidden="true">·</span>
      <a href="/guides/">{footer_guides}</a>
    </nav>
    <nav class="lang-switch" aria-label="Choose language">
      <a href="{url_en}" hreflang="en" aria-current="true">English</a>
      <span class="lang-switch__sep" aria-hidden="true">·</span>
      <a href="{url_es}" hreflang="es">Español</a>
    </nav>
    <p>Letters is made by <a href="https://www.ocho.so" target="_blank" rel="noopener noreferrer">Ocho</a></p>
  </footer>
{EN_FOOTER_SCRIPT.replace('__LOCALE__', 'en')}
</body>
</html>
"""
    path = ROOT / "guides" / slug / "index.html"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(html, encoding="utf-8")


def write_es(
    slug: str,
    slug_en: str,
    title: str,
    meta_desc: str,
    og_desc: str,
    h1: str,
    lead: str,
    body: str,
    related: list[tuple[str, str]],
) -> None:
    url_es = f"https://www.letters.game/es/guides/{slug}/"
    url_en = f"https://www.letters.game/guides/{slug_en}/"
    rel_html = "\n".join(f'          <li><a href="{href}">{label}</a></li>' for href, label in related)
    html = f"""<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="description" content="{meta_desc}">
  <link rel="canonical" href="{url_es}">
  <link rel="alternate" hreflang="en" href="{url_en}">
  <link rel="alternate" hreflang="es" href="{url_es}">
  <link rel="alternate" hreflang="x-default" href="{url_en}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="{url_es}">
  <meta property="og:locale" content="es_ES">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{og_desc}">
{OG_BLOCK}
  <meta property="og:image:alt" content="Letters: juego de palabras de Ocho">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{og_desc}">
  <meta name="twitter:image" content="https://www.letters.game/og-image.png">
  <title>{title} | Letters</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <script type="application/ld+json">
  {ld_article(h1, og_desc, url_es, "es")}
  </script>
{GA_HEAD.replace('__LOCALE__', 'es')}
  <link rel="stylesheet" href="/styles.css">
</head>
<body class="body--article">
  <header class="article-topbar">
    <div class="article-topbar__inner">
      <a class="article-topbar__brand" href="/es/">Letters</a>
      <a class="article-topbar__cta" href="https://testflight.apple.com/join/3jNtcz3K" target="_blank" rel="noopener noreferrer">Descargar</a>
    </div>
  </header>
  <main id="main" class="article-wrap">
    <article class="article-post" itemscope itemtype="https://schema.org/Article">
      <h1 itemprop="headline">{h1}</h1>
      <p class="article-lead" itemprop="description">{lead}</p>
{body}
      <nav class="article-related" aria-label="Guías relacionadas">
        <h2>Más guías</h2>
        <ul>
{rel_html}
          <li><a href="/es/guides/">Todas las guías</a></li>
        </ul>
      </nav>
      <div class="article-cta-box">
        <p><strong>Prueba Letters</strong>: puzles de palabras de Ocho; juega primero.</p>
      </div>
      <p class="beta-cta">
        <a class="beta-cta__btn" href="https://testflight.apple.com/join/3jNtcz3K" target="_blank" rel="noopener noreferrer">Descargar Letters</a>
      </p>
    </article>
  </main>
  <footer class="site-footer">
    <nav class="site-footer__extras" aria-label="Sitio">
      <a href="/es/">Inicio</a>
      <span class="lang-switch__sep" aria-hidden="true">·</span>
      <a href="/es/guides/">Todas las guías</a>
    </nav>
    <nav class="lang-switch" aria-label="Elegir idioma">
      <a href="{url_en}" hreflang="en">English</a>
      <span class="lang-switch__sep" aria-hidden="true">·</span>
      <a href="{url_es}" hreflang="es" aria-current="true">Español</a>
    </nav>
    <p>Letters es de <a href="https://www.ocho.so" target="_blank" rel="noopener noreferrer">Ocho</a></p>
  </footer>
{EN_FOOTER_SCRIPT.replace('__LOCALE__', 'es')}
</body>
</html>
"""
    path = ROOT / "es" / "guides" / slug / "index.html"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(html, encoding="utf-8")


def main() -> None:
    articles: list[dict] = [
        {
            "slug_en": "learn-english-vocabulary",
            "slug_es": "aprender-vocabulario-ingles",
            "title_en": "Learn English Vocabulary: Games vs Flashcards",
            "title_es": "Aprender vocabulario en inglés: juegos vs fichas",
            "meta_en": "Learn English vocabulary with games instead of flashcard marathons, for non-native speakers who want low-pressure practice.",
            "meta_es": "Aprende vocabulario en inglés con juegos en lugar de maratones de fichas, práctica sin presión para no nativos.",
            "og_en": "Game-first English vocabulary for adults: recall, chunks, and consistency without burnout.",
            "og_es": "Vocabulario en inglés con enfoque lúdico: recuperación, frases útiles y constancia.",
            "h1_en": "Learn English Vocabulary: Games vs Flashcards",
            "h1_es": "Aprender vocabulario en inglés: juegos vs fichas",
            "lead_en": "To <strong>learn English vocabulary</strong> as a non-native speaker, balance <strong>chunks</strong> (phrases, not only single words), <strong>active recall</strong>, and formats that feel like <strong>play</strong>, especially if traditional flashcards have failed you before.",
            "lead_es": "Para <strong>aprender vocabulario en inglés</strong> como no nativo, equilibra <strong>unidades</strong> (frases, no solo palabras sueltas), <strong>recuperación activa</strong> y formatos que se sientan a <strong>juego</strong>, sobre todo si las fichas tradicionales ya te cansaron.",
            "body_en": """
      <h2>Chunks beat lonely words</h2>
      <p>Learn collocations and short phrases (“take a break”, “pay attention”) so rhythm and grammar ride along with meaning.</p>
      <h2>Recognition is not enough</h2>
      <p>Train production: say it, spell it, or rebuild the word from letters before you check the answer.</p>
      <h2>Games when they demand recall</h2>
      <p>The best English vocabulary games force retrieval under time or layout constraints, similar to real-time conversation.</p>
      <h2>Adult-friendly difficulty</h2>
      <p>Skip childish themes if they kill your motivation; pick content that matches your tastes and goals.</p>
      <h2>Letters for English learners</h2>
      <p><strong>Letters</strong> offers tactile, short rounds you can repeat daily, useful when you want English practice without a heavy course load.</p>""",
            "body_es": """
      <h2>Las frases ganan a la palabra suelta</h2>
      <p>Aprende colocaciones y frases cortas para que ritmo y gramática vayan con el significado.</p>
      <h2>Reconocer no basta</h2>
      <p>Entrena la producción: dilo, deletrea o reconstruye la palabra antes de mirar la solución.</p>
      <h2>Juegos que exigen recuperación</h2>
      <p>Los mejores juegos obligan a sacar la palabra tú, parecido a hablar con un poco de tiempo real.</p>
      <h2>Dificultad para adultos</h2>
      <p>Evita temas infantiles si te matan las ganas; elige contenido alineado con tus gustos y metas.</p>
      <h2>Letters para quien estudia inglés</h2>
      <p><strong>Letters</strong> ofrece rondas táctiles y breves para repetir a diario sin sentir un curso pesado encima.</p>""",
            "rel_en": [
                ("/guides/best-ways-to-learn-vocabulary/", "Best ways to learn vocabulary"),
                ("/guides/games-to-learn-vocabulary/", "Games to learn vocabulary"),
                ("/guides/best-apps-to-learn-vocabulary/", "Best apps to learn vocabulary"),
            ],
            "rel_es": [
                ("/es/guides/mejores-formas-aprender-vocabulario/", "Mejores formas de aprender vocabulario"),
                ("/es/guides/juegos-aprender-vocabulario/", "Juegos para aprender vocabulario"),
                ("/es/guides/mejores-apps-aprender-vocabulario/", "Mejores apps para aprender vocabulario"),
            ],
        },
        {
            "slug_en": "learn-japanese-vocabulary",
            "slug_es": "aprender-vocabulario-japones",
            "title_en": "Learn Japanese Vocabulary Through Puzzle Games",
            "title_es": "Aprender vocabulario japonés con juegos de palabras",
            "meta_en": "Learn Japanese vocabulary with hiragana-friendly recall, short sessions, and gamified repetition, from Letters.",
            "meta_es": "Aprende vocabulario japonés con hiragana, sesiones cortas y repetición gamificada, Letters.",
            "og_en": "Japanese vocabulary without only rote drills: characters, recall, and bite-sized play.",
            "og_es": "Vocabulario japonés sin solo repetición mecánica: caracteres, recuperación y juego en dosis pequeñas.",
            "h1_en": "Learn Japanese Vocabulary Through Puzzle Games",
            "h1_es": "Aprender vocabulario japonés con juegos de palabras",
            "lead_en": "<strong>Learn Japanese vocabulary</strong> faster when you pair <strong>hiragana recognition</strong>, <strong>meaningful themes</strong> (food, travel, verbs), and <strong>recall</strong> in formats that feel like games, not endless copying drills.",
            "lead_es": "Aprenderás <strong>vocabulario japonés</strong> mejor si unes <strong>hiragana</strong>, <strong>temas</strong> con sentido (comida, viaje, verbos) y <strong>recuperación</strong> en formatos de juego, no solo copiar caracteres sin fin.",
            "body_en": """
      <h2>Stabilize hiragana early</h2>
      <p>Until basic syllabary is automatic, every word fight includes decoding overhead. Mix character recognition with meaning.</p>
      <h2>Themed sets</h2>
      <p>Food, transit, daily verbs, tight bundles beat random joyrides through a frequency list.</p>
      <h2>Recall, not only flash</h2>
      <p>Produce readings and meanings yourself; romaji-only comfort slows progress if you want to read real Japanese.</p>
      <h2>Short daily wins</h2>
      <p>Five focused minutes beat monthly guilt spirals.</p>
      <h2>Letters and Japanese</h2>
      <p><strong>Letters</strong> suits learners who want tactile spelling practice alongside character memory.</p>""",
            "body_es": """
      <h2>Consolidar hiragana</h2>
      <p>Sin silabario básico automático, cada palabra cuesta doble. Mezcla reconocimiento de caracteres y significado.</p>
      <h2>Conjuntos por tema</h2>
      <p>Comida, transporte, verbos cotidianos, paquetes pequeños ganan a listas aleatorias enormes.</p>
      <h2>Recuperación, no solo ver</h2>
      <p>Produce lecturas y significados tú; quedarte solo en romanización frena si quieres leer japonés real.</p>
      <h2>Victorias diarias cortas</h2>
      <p>Cinco minutos enfocados ganan a culpa mensual.</p>
      <h2>Letters y el japonés</h2>
      <p><strong>Letters</strong> encaja si quieres deletrear con tacto mientras memorizas caracteres.</p>""",
            "rel_en": [
                ("/guides/best-ways-to-learn-vocabulary/", "Best ways to learn vocabulary"),
                ("/guides/games-to-learn-vocabulary/", "Games to learn vocabulary"),
                ("/guides/learn-vocabulary-daily/", "Learn vocabulary daily"),
            ],
            "rel_es": [
                ("/es/guides/mejores-formas-aprender-vocabulario/", "Mejores formas de aprender vocabulario"),
                ("/es/guides/juegos-aprender-vocabulario/", "Juegos para aprender vocabulario"),
                ("/es/guides/aprender-vocabulario-diario/", "Aprender vocabulario a diario"),
            ],
        },
        {
            "slug_en": "learn-german-vocabulary",
            "slug_es": "aprender-vocabulario-aleman",
            "title_en": "Learn German Vocabulary with Daily Puzzle Practice",
            "title_es": "Aprender vocabulario alemán con práctica diaria tipo puzle",
            "meta_en": "Learn German vocabulary with compounds, travel themes, and bite-sized puzzle-style practice, from Letters.",
            "meta_es": "Aprende vocabulario alemán: palabras compuestas, viaje y práctica en microdosis tipo puzle, Letters.",
            "og_en": "German vocabulary for casual learners: compounds, gender hooks, and consistent micro-sessions.",
            "og_es": "Vocabulario alemán casual: compuestos, anclajes y microsesiones constantes.",
            "h1_en": "Learn German Vocabulary with Daily Puzzle Practice",
            "h1_es": "Aprender vocabulario alemán con práctica diaria tipo puzle",
            "lead_en": "To <strong>learn German vocabulary</strong>, embrace <strong>noun compounds</strong> as puzzles, learn <strong>travel-ready chunks</strong>, and repeat in <strong>short daily rounds</strong> so cases and gender feel less overwhelming.",
            "lead_es": "Para <strong>aprender vocabulario alemán</strong>, trata los <strong>compuestos</strong> como puzles, aprende <strong>frases de viaje</strong> y repite en <strong>rondas diarias cortas</strong> para que género y casos pesen menos.",
            "body_en": """
      <h2>Compounds are feature, not bug</h2>
      <p>Breaking words into parts (Brot, Butter, Brotzeit) builds pattern recognition.</p>
      <h2>Chunks for travel and daily life</h2>
      <p>Train realistic phrases you will say aloud, not only isolated nouns.</p>
      <h2>Gender hooks</h2>
      <p>Pair articles with imagery (“die Sonne” as vivid) instead of brute force tables.</p>
      <h2>Daily beats heroic</h2>
      <p>Steady micro-practice wins over rare three-hour attempts.</p>
      <h2>Letters</h2>
      <p>Use <strong>Letters</strong> for spelling/recall loops that respect your attention budget.</p>""",
            "body_es": """
      <h2>Los compuestos son oportunidad</h2>
      <p>Desglosar partes (Brot, Butter…) enseña patrones.</p>
      <h2>Frases para viaje y día a día</h2>
      <p>Entrena lo que realmente dirías en voz alta.</p>
      <h2>Anclajes de género</h2>
      <p>Une artículos a imágenes vivas antes de tablas infinitas.</p>
      <h2>Diario vence al heroico</h2>
      <p>Micropráctica estable gana a maratones raros.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> sirve para bucles deletreo/recuerdo sin derrochar atención.</p>""",
            "rel_en": [
                ("/guides/best-ways-to-learn-vocabulary/", "Best ways to learn vocabulary"),
                ("/guides/games-to-learn-vocabulary/", "Games to learn vocabulary"),
                ("/guides/learn-spanish-vocabulary/", "Learn Spanish vocabulary"),
            ],
            "rel_es": [
                ("/es/guides/mejores-formas-aprender-vocabulario/", "Mejores formas de aprender vocabulario"),
                ("/es/guides/juegos-aprender-vocabulario/", "Juegos para aprender vocabulario"),
                ("/es/guides/aprender-vocabulario-espanol/", "Aprender vocabulario en español"),
            ],
        },
        {
            "slug_en": "games-to-learn-vocabulary",
            "slug_es": "juegos-aprender-vocabulario",
            "title_en": "Games to Learn Vocabulary (That Actually Work)",
            "title_es": "Juegos para aprender vocabulario (que sí funcionan)",
            "meta_en": "What makes vocabulary games effective: retrieval, spacing, and meaningful challenge, and what to avoid.",
            "meta_es": "Qué hace efectivos los juegos de vocabulario: recuperación, espaciado y reto con sentido, y qué evitar.",
            "og_en": "Science-friendly signals for picking vocabulary games that build durable memory.",
            "og_es": "Señales para elegir juegos de vocabulario que sí consolidan memoria.",
            "h1_en": "Games to Learn Vocabulary (That Actually Work)",
            "h1_es": "Juegos para aprender vocabulario (que sí funcionan)",
            "lead_en": "The best <strong>games to learn vocabulary</strong> force <strong>retrieval</strong>, respect <strong>spacing</strong>, and attach words to <strong>meaning</strong>. Pretty graphics alone do not build memory.",
            "lead_es": "Los mejores <strong>juegos para aprender vocabulario</strong> exigen <strong>recuperación</strong>, respetan el <strong>espaciado</strong> y atan las palabras al <strong>significado</strong>. Bonito por sí solo no fija memoria.",
            "body_en": """
      <h2>Retrieval over passive matching</h2>
      <p>Tap-to-reveal matching is easy; producing the word is what sticks.</p>
      <h2>Challenge, not chaos</h2>
      <p>Optimal difficulty keeps you successful ~70–85% of the time, stretch, not demoralize.</p>
      <h2>Spacing and revisits</h2>
      <p>Good games bring words back before you forget, not only once.</p>
      <h2>Meaning and story</h2>
      <p>Themes, levels, or narratives beat raw alphabetized lists.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> focuses tactile spelling and short sessions suited to spaced, repeatable play.</p>""",
            "body_es": """
      <h2>Recuperación, no solo emparejar</h2>
      <p>Emparejar pasivo es fácil; producir la palabra es lo que fija.</p>
      <h2>Reto, no caos</h2>
      <p>La dificultad óptima te mantiene ~70–85% de aciertos, estírate sin hundirte.</p>
      <h2>Espaciado y reapariciones</h2>
      <p>Un buen juego trae palabras de vuelta antes de olvidar, no solo una vez.</p>
      <h2>Sentido y narrativa</h2>
      <p>Temas o niveles vencen listas frías ordenadas alfabéticamente.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> apuesta por deletrear táctil y sesiones cortas, fáciles de espaciar.</p>""",
            "rel_en": [
                ("/guides/best-ways-to-learn-vocabulary/", "Best ways to learn vocabulary"),
                ("/guides/best-apps-to-learn-vocabulary/", "Best apps to learn vocabulary"),
                ("/guides/learn-vocabulary-daily/", "Learn vocabulary daily"),
            ],
            "rel_es": [
                ("/es/guides/mejores-formas-aprender-vocabulario/", "Mejores formas de aprender vocabulario"),
                ("/es/guides/mejores-apps-aprender-vocabulario/", "Mejores apps para aprender vocabulario"),
                ("/es/guides/aprender-vocabulario-diario/", "Aprender vocabulario a diario"),
            ],
        },
        {
            "slug_en": "best-apps-to-learn-vocabulary",
            "slug_es": "mejores-apps-aprender-vocabulario",
            "title_en": "Best Apps to Learn Vocabulary (Ranked 2026)",
            "title_es": "Mejores apps para aprender vocabulario (ranking 2026)",
            "meta_en": "How to pick the best apps to learn vocabulary when you want games, not grammar homework, framework for 2026.",
            "meta_es": "Cómo elegir las mejores apps de vocabulario si buscas juego, no solo tareas de gramática.",
            "og_en": "Decision framework: retrieval depth, spacing, honesty about pricing, and joy.",
            "og_es": "Marco de decisión: profundidad de recuperación, espaciado, precio claro y disfrute.",
            "h1_en": "Best Apps to Learn Vocabulary (Ranked 2026)",
            "h1_es": "Mejores apps para aprender vocabulario (ranking 2026)",
            "lead_en": "The <strong>best apps to learn vocabulary</strong> share traits: real <strong>recall practice</strong>, sensible <strong>spacing</strong>, transparent <strong>pricing</strong>, and an experience you open without dread. Rankings change, criteria should not.",
            "lead_es": "Las <strong>mejores apps para aprender vocabulario</strong> comparten rasgos: <strong>práctica de recuerdo</strong> real, <strong>espaciado</strong> razonable, <strong>precio</strong> claro y una experiencia que abres sin angustia. Los ranking cambian; los criterios no.",
            "body_en": """
      <h2>Does it make you produce words?</h2>
      <p>Swipe-heavy apps can feel productive while skipping retrieval.</p>
      <h2>Spacing and review quality</h2>
      <p>Look for systems that reschedule weak items intelligently.</p>
      <h2>Pricing clarity</h2>
      <p>Free trials should show the real experience, not a bait-and-switch.</p>
      <h2>Joy and friction</h2>
      <p>Pick the app you will open on a tired Tuesday.</p>
      <h2>Where Letters fits</h2>
      <p><strong>Letters</strong> targets learners who want tactile word puzzles over grammar grind, try it alongside your shortlist.</p>""",
            "body_es": """
      <h2>¿Te hace producir palabras?</h2>
      <p>Deslizar mucho puede sentirse productivo sin recuperación real.</p>
      <h2>Espaciado y calidad de repaso</h2>
      <p>Busca sistemas que reprogramen lo débil con sentido.</p>
      <h2>Transparencia de precio</h2>
      <p>El gratis debería mostrar la experiencia real, no un engaño.</p>
      <h2>Alegría y fricción</h2>
      <p>Elige la app que abrirás un martes cansado.</p>
      <h2>Dónde encaja Letters</h2>
      <p><strong>Letters</strong> apunta a quien quiere puzles táctiles antes que molienda de gramática.</p>""",
            "rel_en": [
                ("/guides/learn-english-vocabulary/", "Learn English vocabulary"),
                ("/guides/games-to-learn-vocabulary/", "Games to learn vocabulary"),
                ("/guides/learn-vocabulary-daily/", "Learn vocabulary daily"),
            ],
            "rel_es": [
                ("/es/guides/aprender-vocabulario-ingles/", "Aprender vocabulario en inglés"),
                ("/es/guides/juegos-aprender-vocabulario/", "Juegos para aprender vocabulario"),
                ("/es/guides/aprender-vocabulario-diario/", "Aprender vocabulario a diario"),
            ],
        },
        {
            "slug_en": "learn-chinese-vocabulary",
            "slug_es": "aprender-vocabulario-chino",
            "title_en": "Learn Chinese Vocabulary Through Puzzle Games",
            "title_es": "Aprender vocabulario chino con juegos de palabras",
            "meta_en": "Learn Chinese vocabulary with pinyin grounding, character recognition, and themed sets, puzzle-friendly approach.",
            "meta_es": "Aprende vocabulario chino con pinyin, caracteres y temas, enfoque tipo puzle.",
            "og_en": "Casual path: pinyin + meaning + spaced recall without drowning in drills.",
            "og_es": "Camino casual: pinyin + significado + recuerdo espaciado sin ahogarte.",
            "h1_en": "Learn Chinese Vocabulary Through Puzzle Games",
            "h1_es": "Aprender vocabulario chino con juegos de palabras",
            "lead_en": "<strong>Learn Chinese vocabulary</strong> sustainably by pairing <strong>pinyin</strong> with <strong>meaningful themes</strong>, leaning on <strong>character recognition</strong> in doses, and practicing <strong>recall</strong> in quick game-like loops.",
            "lead_es": "Para <strong>aprender vocabulario chino</strong> de forma sostenible, une <strong>pinyin</strong> con <strong>temas</strong>, <strong>reconoce caracteres</strong> en dosis y practica <strong>recuperación</strong> en bucles rápidos tipo juego.",
            "body_en": """
      <h2>Pinyin as scaffolding</h2>
      <p>Use pinyin to anchor sounds while you build character knowledge, not as a permanent crutch.</p>
      <h2>Themed vocabulary</h2>
      <p>Food, transport, family, finite sets reduce overload.</p>
      <h2>Characters in batches</h2>
      <p>Learn high-value characters that unlock many words.</p>
      <h2>Tone awareness</h2>
      <p>Practice hearing and speaking tones early; pair with minimal pairs carefully.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> can reinforce spelling/recall once you know the pinyin letters for your deck.</p>""",
            "body_es": """
      <h2>Pinyin como andamio</h2>
      <p>Ancla sonidos con pinyin mientras creces en caracteres, no como muleta eterna.</p>
      <h2>Vocabulario por temas</h2>
      <p>Comida, transporte, familia, conjuntos finitos reducen saturación.</p>
      <h2>Caracteres por lotes</h2>
      <p>Prioriza caracteres de alto impacto que desbloquean muchas palabras.</p>
      <h2>Tonos</h2>
      <p>Practica oír y decir tonos pronto; usa pares mínimos con cuidado.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> refuerza deletreo/recuerdo cuando dominas las letras de tu mazo en pinyin.</p>""",
            "rel_en": [
                ("/guides/best-ways-to-learn-vocabulary/", "Best ways to learn vocabulary"),
                ("/guides/games-to-learn-vocabulary/", "Games to learn vocabulary"),
                ("/guides/learn-japanese-vocabulary/", "Learn Japanese vocabulary"),
            ],
            "rel_es": [
                ("/es/guides/mejores-formas-aprender-vocabulario/", "Mejores formas de aprender vocabulario"),
                ("/es/guides/juegos-aprender-vocabulario/", "Juegos para aprender vocabulario"),
                ("/es/guides/aprender-vocabulario-japones/", "Aprender vocabulario japonés"),
            ],
        },
        {
            "slug_en": "learn-korean-vocabulary",
            "slug_es": "aprender-vocabulario-coreano",
            "title_en": "Learn Korean Vocabulary: Daily Puzzle Game",
            "title_es": "Aprender vocabulario coreano: juego de palabras diario",
            "meta_en": "Learn Korean vocabulary with Hangul fluency, pop-culture hooks, and daily micro-sessions, from Letters.",
            "meta_es": "Aprende vocabulario coreano con hangul, cultura y microsesiones diarias, Letters.",
            "og_en": "Hangul + themed decks + repeatable play for casual Korean learners.",
            "og_es": "Hangul + mazos temáticos + juego repetible para aprendices casuales.",
            "h1_en": "Learn Korean Vocabulary: Daily Puzzle Game",
            "h1_es": "Aprender vocabulario coreano: juego de palabras diario",
            "lead_en": "<strong>Learn Korean vocabulary</strong> by locking in <strong>Hangul</strong>, learning <strong>themed chunks</strong>, and using <strong>daily puzzle-style recall</strong>, especially if K-culture keeps you motivated.",
            "lead_es": "Para <strong>aprender vocabulario coreano</strong>, fija el <strong>hangul</strong>, aprende <strong>unidades temáticas</strong> y usa <strong>recuperación diaria tipo puzle</strong>, la cultura pop ayuda a mantener el hábito.",
            "body_en": """
      <h2>Hangul first, fast</h2>
      <p>Get syllable blocks readable early, it unlocks every later step.</p>
      <h2>Themed decks</h2>
      <p>Food, emotions, social media verbs, pick what you actually say.</p>
      <h2>Politeness levels later</h2>
      <p>Start with neutral/polite basics; stack formality nuance as you grow.</p>
      <h2>Daily micro-session</h2>
      <p>Consistency matters more than marathon weekends.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> supports daily spelling play once Hangul letters are familiar.</p>""",
            "body_es": """
      <h2>Hangul primero, rápido</h2>
      <p>Haz legibles los bloques silábicos pronto, desbloquea todo lo demás.</p>
      <h2>Mazos temáticos</h2>
      <p>Comida, emociones, verbos de redes sociales, lo que realmente usarías.</p>
      <h2>Formalidad después</h2>
      <p>Empieza con básicos neutros/educados; la maticidad viene después.</p>
      <h2>Microsesión diaria</h2>
      <p>La constancia vence al maratón de fin de semana.</p>
      <h2>Letters</h2>
      <p><strong>Letters</strong> apoya deletreo diario cuando las letras te resulten familiares.</p>""",
            "rel_en": [
                ("/guides/best-ways-to-learn-vocabulary/", "Best ways to learn vocabulary"),
                ("/guides/learn-japanese-vocabulary/", "Learn Japanese vocabulary"),
                ("/guides/learn-vocabulary-daily/", "Learn vocabulary daily"),
            ],
            "rel_es": [
                ("/es/guides/mejores-formas-aprender-vocabulario/", "Mejores formas de aprender vocabulario"),
                ("/es/guides/aprender-vocabulario-japones/", "Aprender vocabulario japonés"),
                ("/es/guides/aprender-vocabulario-diario/", "Aprender vocabulario a diario"),
            ],
        },
        {
            "slug_en": "learn-vocabulary-daily",
            "slug_es": "aprender-vocabulario-diario",
            "title_en": "Learn Vocabulary Daily: A Simple System",
            "title_es": "Aprender vocabulario a diario: un sistema sencillo",
            "meta_en": "Build a daily vocabulary habit with tiny sessions, streak psychology, and realistic anchors, from Letters.",
            "meta_es": "Hábito diario de vocabulario: sesiones pequeñas, anclas realistas y constancia, Letters.",
            "og_en": "Habit design for vocabulary: cues, smallest viable session, and recovery from missed days.",
            "og_es": "Diseño de hábito: señales, sesión mínima viable y recuperarte si falta un día.",
            "h1_en": "Learn Vocabulary Daily: A Simple System",
            "h1_es": "Aprender vocabulario a diario: un sistema sencillo",
            "lead_en": "To <strong>learn vocabulary daily</strong>, shrink the bar until it fits real life: <strong>same cue</strong> each day, <strong>two to seven minutes</strong> of retrieval, and a <strong>forgiveness rule</strong> so one miss does not collapse the habit.",
            "lead_es": "Para <strong>aprender vocabulario a diario</strong>, baja la barra hasta que encaje en la vida: <strong>la misma señal</strong> cada día, <strong>dos a siete minutos</strong> de recuperación y una <strong>regla de perdón</strong> para que un día sin estudio no tumbe todo.",
            "body_en": """
      <h2>Anchor to an existing routine</h2>
      <p>After coffee, before sleep, lunch, attach vocabulary to something you already do.</p>
      <h2>Smallest viable session</h2>
      <p>Even five honest minutes count; zero minutes count as a break, not failure.</p>
      <h2>Streaks as scaffolding</h2>
      <p>Use streaks to make the next session obvious, not to shame you.</p>
      <h2>Weekly review, not guilt</h2>
      <p>Skim weak words weekly; celebrate showing up imperfectly.</p>
      <h2>Letters for daily play</h2>
      <p><strong>Letters</strong> is designed for repeatable short rounds, ideal daily anchor.</p>""",
            "body_es": """
      <h2>Ancla a una rutina que ya tienes</h2>
      <p>Tras el café, antes de dormir… une el vocabulario a algo inevitable en tu día.</p>
      <h2>Sesión mínima viable</h2>
      <p>Cinco minutos honestos cuentan; cero minutos es pausa, no fracaso.</p>
      <h2>Rachas como andamio</h2>
      <p>Usa rachas para que la siguiente sesión sea obvia, no para castigarte.</p>
      <h2>Repaso semanal, sin culpa</h2>
      <p>Repasa lo débil una vez por semana; celebra aparecer con imperfección.</p>
      <h2>Letters cada día</h2>
      <p><strong>Letters</strong> está hecho para rondas cortas repetibles, ancla diaria ideal.</p>""",
            "rel_en": [
                ("/guides/best-ways-to-learn-vocabulary/", "Best ways to learn vocabulary"),
                ("/guides/games-to-learn-vocabulary/", "Games to learn vocabulary"),
                ("/guides/best-apps-to-learn-vocabulary/", "Best apps to learn vocabulary"),
            ],
            "rel_es": [
                ("/es/guides/mejores-formas-aprender-vocabulario/", "Mejores formas de aprender vocabulario"),
                ("/es/guides/juegos-aprender-vocabulario/", "Juegos para aprender vocabulario"),
                ("/es/guides/mejores-apps-aprender-vocabulario/", "Mejores apps para aprender vocabulario"),
            ],
        },
    ]

    for a in articles:
        write_en(
            a["slug_en"],
            a["slug_es"],
            a["title_en"],
            a["meta_en"],
            a["og_en"],
            a["h1_en"],
            a["lead_en"],
            a["body_en"],
            a["rel_en"],
        )
        write_es(
            a["slug_es"],
            a["slug_en"],
            a["title_es"],
            a["meta_es"],
            a["og_es"],
            a["h1_es"],
            a["lead_es"],
            a["body_es"],
            a["rel_es"],
        )

    print("Wrote", len(articles), "article pairs")


if __name__ == "__main__":
    main()
