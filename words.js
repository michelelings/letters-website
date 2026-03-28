const WORDS = [
  "Welcome",
  "Bienvenue",
  "Willkommen",
  "Bienvenido",
  "Benvenuto",
  "Bem-vindo",
  "Welkom",
  "Välkommen",
  "Velkommen",
  "Tervetuloa",
  "Velkomin",
  "Vítejte",
  "Witamy",
  "Üdvözöljük",
  "Dobrodošli",
  "Добро пожаловать",
  "Ласкаво просимо",
  "Добредојде",
  "Bine ați venit",
  "Hoş geldiniz",
  "Καλώς ήρθατε",
  "مرحبا",
  "أهلا",
  "خوش آمدید",
  "स्वागत",
  "स्वागतम्",
  "স্বাগতম",
  "സ്വാഗതം",
  "வரவேற்கிறோம்",
  "స్వాగతం",
  "ಸ್ವಾಗತ",
  "સ્વાગત",
  "පිළිගනිමු",
  "ยินดีต้อนรับ",
  "សូមស្វាគមន៍",
  "Chào mừng",
  "欢迎",
  "歡迎",
  "ようこそ",
  "환영합니다",
  "Selamat datang",
  "Maligayang pagdating",
  "Mabuhay",
  "Bula",
  "Talofa",
  "Kia ora",
  "Haere mai",
  "Aloha",
  "Karibu",
  "Marhaban",
  "Barka da zuwa",
  "Byenvini",
  "Byenveni",
  "Sugeng rawuh",
  "Wilujeng sumping",
  "Manao ahoana",
  "Tongasoa",
  "Kaze neza",
  "Murakaza neza",
  "Ongi etorri",
  "Benvida",
  "Benvingut",
  "Fàilte",
  "Croeso",
  "Benvengut",
  "Bainvegni",
  "Bienvènu",
  "Bonveni",
  "Benvignû",
  "Benvegnû",
  "Bienvegni",
  "Bainvegnî",
];

/** BuildBoardView.stableRotation — degrees */
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
  return WORDS[Math.floor(Math.random() * WORDS.length)];
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

/** Main content box inside padding — space available for the word row */
function mainContentInnerSize(main) {
  const st = getComputedStyle(main);
  const padX =
    (parseFloat(st.paddingLeft) || 0) + (parseFloat(st.paddingRight) || 0);
  const padY =
    (parseFloat(st.paddingTop) || 0) + (parseFloat(st.paddingBottom) || 0);
  return {
    w: Math.max(0, main.clientWidth - padX),
    h: Math.max(0, main.clientHeight - padY),
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

let wordFitRaf = 0;

function scheduleWordFit(container) {
  if (!container) return;
  cancelAnimationFrame(wordFitRaf);
  wordFitRaf = requestAnimationFrame(() => {
    wordFitRaf = 0;
    applyWordFit(container);
  });
}

function applyWordFit(container) {
  const main = container.closest(".main");
  const fit = container.querySelector(":scope > .word__fit");
  if (!main || !fit) return;

  container.style.setProperty("--word-fit-scale", "1");
  void container.offsetHeight;

  const { w: naturalW, h: naturalH } = measureFitContentSize(fit);
  if (!naturalW || !naturalH) return;

  const { w: availW, h: availH } = mainContentInnerSize(main);
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
    if (char === " ") {
      const gap = document.createElement("span");
      gap.className = "word-gap";
      gap.setAttribute("aria-hidden", "true");
      layer.appendChild(gap);
      return;
    }

    const tile = document.createElement("span");
    tile.className = "tile";
    tile.setAttribute("aria-hidden", "true");

    const face = document.createElement("span");
    face.className = "tile__face";
    face.textContent = char;

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

function renderInitialWord() {
  const container = document.getElementById("word");
  if (!container) return;
  const word = pickWord();
  installWord(container, word);
}

function cycleWords() {
  const container = document.getElementById("word");
  if (!container) return;

  window.setTimeout(() => {
    const fit = getOrCreateFit(container);
    const active = fit.querySelector(".word-layer:last-of-type");
    const nTiles = active?.querySelectorAll(".tile").length ?? 0;

    if (nTiles === 0) {
      window.setTimeout(() => cycleWords(), WORD_CYCLE_MS);
      return;
    }

    if (prefersReducedMotion()) {
      const word = pickWord();
      installWord(container, word);
      cycleWords();
      return;
    }

    active.classList.add("word-layer--out");
    active.style.setProperty("--stagger-max", String(Math.max(0, nTiles - 1)));

    container.classList.add("word--crossfade");

    const word = pickWord();
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
      cycleWords();
    }, cleanupMs);
  }, WORD_CYCLE_MS);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("word");
  const main = document.querySelector(".main");

  renderInitialWord();
  cycleWords();

  if (container && main) {
    const refit = () => scheduleWordFit(container);
    if (document.fonts?.ready) {
      void document.fonts.ready.then(refit);
    }
    window.addEventListener("resize", refit, { passive: true });
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(refit).observe(main);
    }
  }
});
