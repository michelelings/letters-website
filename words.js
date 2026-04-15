const WORDS_BY_LOCALE = {
  en: [
    "Welcome",
    "Hello",
    "Hi",
    "Words",
    "Letters",
    "Play",
    "Puzzle",
    "Game",
    "Learn",
    "Spell",
    "Letters.game",
    "Wordplay",
    "Daily",
    "Fun",
    "Challenge",
    "Practice",
    "Score",
    "Nice",
    "Great",
    "Wow",
  ],
  es: [
    "Bienvenido",
    "Hola",
    "Palabras",
    "Letras",
    "Jugar",
    "Juego",
    "Aprender",
    "Divertido",
    "Reto",
    "Práctica",
    "Genial",
    "Vamos",
    "Súper",
    "Perfecto",
    "Letters.game",
    "Palabra",
    "Puzle",
    "Diario",
    "Nivel",
    "Gana",
  ],
};

const WORD_CLUES_BY_LOCALE = {
  en: {
    welcome: "A friendly greeting when someone arrives",
    hello: "A simple greeting",
    hi: "A very short greeting",
    words: "Units of language you read and write",
    letters: "Alphabet pieces used to spell words",
    play: "Have fun in a game",
    puzzle: "A brain-teasing challenge",
    game: "An activity with rules and goals",
    learn: "Build knowledge or a new skill",
    spell: "Put letters in the correct order",
    "letters.game": "The website name",
    wordplay: "Fun with language and meanings",
    daily: "Happening every day",
    fun: "Enjoyable and playful",
    challenge: "Something that tests your skill",
    practice: "Repeat to get better",
    score: "Points you earn in a game",
    nice: "Kind or pleasant",
    great: "Really good",
    wow: "Reaction of surprise",
  },
  es: {
    bienvenido: "Saludo para recibir a alguien",
    hola: "Saludo comun",
    palabras: "Unidades del lenguaje",
    letras: "Piezas del alfabeto",
    jugar: "Pasarlo bien en un juego",
    juego: "Actividad con reglas",
    aprender: "Adquirir conocimiento",
    divertido: "Que causa alegria",
    reto: "Algo que pone a prueba",
    "práctica": "Repeticion para mejorar",
    genial: "Muy bueno",
    vamos: "Invitacion para empezar",
    "súper": "Excelente o muy bueno",
    perfecto: "Sin errores",
    palabra: "Conjunto de letras con significado",
    puzle: "Rompecabezas",
    diario: "Que ocurre cada dia",
    nivel: "Etapa o grado",
    gana: "Consigue la victoria",
  },
};

function contentLocale() {
  const lang = (document.documentElement.lang || "en").toLowerCase();
  if (lang.startsWith("es")) return "es";
  return "en";
}

function wordListForLocale() {
  return WORDS_BY_LOCALE[contentLocale()] || WORDS_BY_LOCALE.en;
}

function clueMapForLocale(locale = contentLocale()) {
  return WORD_CLUES_BY_LOCALE[locale] || WORD_CLUES_BY_LOCALE.en;
}

function clueForWord(word, locale = contentLocale()) {
  const key = String(word || "").trim().toLowerCase();
  if (!key) return locale === "es" ? "Adivina la palabra" : "Guess the word";
  const localeMap = clueMapForLocale(locale);
  const fallbackMap = WORD_CLUES_BY_LOCALE.en;
  return (
    localeMap[key] ||
    fallbackMap[key] ||
    (locale === "es" ? "Adivina la palabra" : "Guess the word")
  );
}

/** BuildBoardView.stableRotation, degrees */
function stableRotationDeg(index) {
  const seed = ((index * 7 + 3) % 11) / 11;
  return (seed - 0.5) * 6;
}

const WORD_CYCLE_MS = 3000;
const EXIT_PAD_MS = 120;
const ENTER_PAD_MS = 80;
/** How soon the incoming row starts (after outgoing exit begins), in ms */
const ENTER_OVERLAP_MS = 160;

function pickWord() {
  const list = wordListForLocale();
  return list[Math.floor(Math.random() * list.length)];
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function parseCssTimeMs(value, fallback) {
  const raw = String(value ?? "").trim();
  if (!raw) return fallback;
  if (/ms$/i.test(raw)) return Number.parseFloat(raw) || fallback;
  if (/s$/i.test(raw)) return (Number.parseFloat(raw) || 0) * 1000;
  const n = Number.parseFloat(raw);
  return Number.isFinite(n) ? n * 1000 : fallback;
}

function durationFromRootVar(prop, fallback) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(prop)
    .trim();
  return parseCssTimeMs(raw, fallback);
}

function exitDurationForTiles(n) {
  if (prefersReducedMotion()) return 0;
  const exitMs = durationFromRootVar("--tile-exit-dur", 420);
  const staggerMs = durationFromRootVar("--tile-stagger-ms", 42);
  const staggerSpan = n > 0 ? (n - 1) * staggerMs : 0;
  return Math.round(exitMs + staggerSpan + EXIT_PAD_MS);
}

/** Last incoming tile finishes at overlap + (n-1)*stagger + enter length */
function enterDurationForTiles(n) {
  if (prefersReducedMotion()) return 0;
  const enterMs = durationFromRootVar("--tile-enter-dur", 550);
  const staggerMs = durationFromRootVar("--tile-stagger-ms", 42);
  const staggerSpan = n > 0 ? (n - 1) * staggerMs : 0;
  return Math.round(
    ENTER_OVERLAP_MS + enterMs + staggerSpan + ENTER_PAD_MS
  );
}

function getOrCreateFit(container) {
  let el = container.querySelector(":scope > .word__fit");
  if (!el) {
    el = document.createElement("div");
    el.className = "word__fit";
    container.appendChild(el);
  }
  return el;
}

/** Root used for measuring available space (.main homepage or .letters-word-mount in articles) */
function getSizingRoot(container) {
  return container.closest(".letters-word-mount") || container.closest(".main");
}

/** Box inside padding, space available for the word row */
function fitInnerSize(root) {
  const box =
    root.querySelector(".main__stage") ||
    root.querySelector(".letters-word-mount__stage") ||
    root;
  const st = getComputedStyle(box);
  const padX =
    (parseFloat(st.paddingLeft) || 0) + (parseFloat(st.paddingRight) || 0);
  const padY =
    (parseFloat(st.paddingTop) || 0) + (parseFloat(st.paddingBottom) || 0);
  return {
    w: Math.max(0, box.clientWidth - padX),
    h: Math.max(0, box.clientHeight - padY),
  };
}

/** Widest/tallest layer (crossfade can have two rows with different lengths) */
function measureFitContentSize(fit) {
  let maxW = 0;
  let maxH = 0;
  const layers = fit.querySelectorAll(".word-layer");
  for (const layer of layers) {
    maxW = Math.max(maxW, layer.offsetWidth);
    maxH = Math.max(maxH, layer.offsetHeight);
  }
  return {
    w: maxW || fit.scrollWidth,
    h: maxH || fit.scrollHeight,
  };
}

const wordFitRafByContainer = new WeakMap();

function scheduleWordFit(container) {
  if (!container) return;
  const prev = wordFitRafByContainer.get(container);
  if (prev) cancelAnimationFrame(prev);
  const id = requestAnimationFrame(() => {
    wordFitRafByContainer.delete(container);
    applyWordFit(container);
  });
  wordFitRafByContainer.set(container, id);
}

function applyWordFit(container) {
  const root = getSizingRoot(container);
  const fit = container.querySelector(":scope > .word__fit");
  if (!root || !fit) return;

  container.style.setProperty("--word-fit-scale", "1");
  void container.offsetHeight;

  const { w: naturalW, h: naturalH } = measureFitContentSize(fit);
  if (!naturalW || !naturalH) return;

  const { w: availW, h: availH } = fitInnerSize(root);
  const pad = 2;
  const scaleW = (availW - pad) / naturalW;
  const scaleH = (availH - pad) / naturalH;
  let scale = Math.min(1, scaleW, scaleH);
  if (!Number.isFinite(scale) || scale <= 0) scale = 1;

  container.style.setProperty("--word-fit-scale", String(scale));
}

function buildLayerElement(word) {
  const layer = document.createElement("div");
  layer.className = "word-layer";

  let tileIndex = 0;
  [...word].forEach((char) => {
    const tile = document.createElement("span");
    tile.className = "tile";
    tile.setAttribute("aria-hidden", "true");

    const face = document.createElement("span");
    face.className = "tile__face";
    if (char !== " ") face.textContent = char;

    tile.appendChild(face);

    const depth = tileIndex + 1;
    tile.style.setProperty("--z", String(depth));
    tile.style.setProperty("--tilt", `${stableRotationDeg(tileIndex)}deg`);
    tile.style.setProperty("--stagger", String(tileIndex));
    tileIndex += 1;

    layer.appendChild(tile);
  });

  return layer;
}

function installWord(container, word) {
  const fit = getOrCreateFit(container);
  fit.replaceChildren();
  container.classList.remove("word--crossfade");
  fit.appendChild(buildLayerElement(word));
  container.setAttribute("aria-label", word);
  scheduleWordFit(container);
}

function parseWordsAttr(value) {
  if (!value || !String(value).trim()) return [];
  return String(value)
    .split(/[,|]/u)
    .map((s) => s.trim())
    .filter(Boolean);
}

function cycleIntervalMs(container) {
  const raw = container.getAttribute("data-letters-interval");
  if (raw) {
    const n = Number.parseInt(raw, 10);
    if (Number.isFinite(n) && n >= 800) return n;
  }
  return WORD_CYCLE_MS;
}

function makeWordPicker(container, list) {
  if (!list.length) {
    return () => pickWord();
  }
  if (list.length === 1) {
    return () => list[0];
  }
  const mode = (container.getAttribute("data-letters-rotate") || "sequential")
    .toLowerCase()
    .trim();
  if (mode === "random") {
    return () => list[Math.floor(Math.random() * list.length)];
  }
  let i = 0;
  return () => {
    const w = list[i % list.length];
    i += 1;
    return w;
  };
}

function shouldCycle(container, list, staticWord) {
  if (staticWord) return false;
  if (!list.length) return true;
  return list.length > 1;
}

function cycleWordsForContainer(container, pickWordFn) {
  const delayMs = cycleIntervalMs(container);
  window.setTimeout(function tick() {
    const fit = getOrCreateFit(container);
    const active = fit.querySelector(".word-layer:last-of-type");
    const nTiles = active?.querySelectorAll(".tile").length ?? 0;

    if (nTiles === 0) {
      window.setTimeout(tick, delayMs);
      return;
    }

    if (prefersReducedMotion()) {
      installWord(container, pickWordFn());
      window.setTimeout(tick, delayMs);
      return;
    }

    active.classList.add("word-layer--out");
    active.style.setProperty("--stagger-max", String(Math.max(0, nTiles - 1)));

    container.classList.add("word--crossfade");

    const word = pickWordFn();
    const inLayer = buildLayerElement(word);
    inLayer.classList.add("word-layer--in");
    inLayer.style.setProperty(
      "--enter-overlap",
      `${ENTER_OVERLAP_MS / 1000}s`
    );
    fit.appendChild(inLayer);

    container.setAttribute("aria-label", word);
    scheduleWordFit(container);

    const nNew = inLayer.querySelectorAll(".tile").length;
    const cleanupMs = Math.max(
      exitDurationForTiles(nTiles),
      enterDurationForTiles(nNew)
    );

    window.setTimeout(() => {
      active.remove();
      container.classList.remove("word--crossfade");
      inLayer.classList.remove("word-layer--in");
      inLayer.style.removeProperty("--enter-overlap");
      scheduleWordFit(container);
      window.setTimeout(tick, delayMs);
    }, cleanupMs);
  }, delayMs);
}

function observeResize(container) {
  const root = getSizingRoot(container);
  if (!container || !root) return;
  const refit = () => scheduleWordFit(container);
  if (document.fonts?.ready) {
    void document.fonts.ready.then(refit);
  }
  window.addEventListener("resize", refit, { passive: true });
  const observeEl =
    root.querySelector(".main__stage") ||
    root.querySelector(".letters-word-mount__stage") ||
    root;
  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(refit).observe(observeEl);
  }
}

function initWordContainer(container) {
  if (!container || !container.classList.contains("word")) return;

  const staticWord = container.getAttribute("data-static-word");
  if (staticWord) {
    installWord(container, staticWord);
    observeResize(container);
    return;
  }

  const list = parseWordsAttr(container.getAttribute("data-letters-words"));
  const picker = makeWordPicker(container, list);
  installWord(container, picker());

  if (shouldCycle(container, list, null)) {
    cycleWordsForContainer(container, picker);
  }
  observeResize(container);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".word").forEach(initWordContainer);
});
