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

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function renderWord() {
  const container = document.getElementById("word");
  if (!container) return;

  const word = pickWord();

  container.replaceChildren();
  container.classList.remove("word--exiting");
  container.removeAttribute("style");

  container.setAttribute("aria-label", word);

  let tileIndex = 0;
  [...word].forEach((char) => {
    if (char === " ") {
      const gap = document.createElement("span");
      gap.className = "word-gap";
      gap.setAttribute("aria-hidden", "true");
      container.appendChild(gap);
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

    container.appendChild(tile);
  });

  const n = tileIndex;
  if (n > 0) {
    container.style.setProperty("--stagger-max", String(n - 1));
  }

  document.title = `${word} — Letters`;
}

function exitDurationMs() {
  if (prefersReducedMotion()) return 0;

  const root = document.documentElement;
  const staggerMs = Number.parseFloat(
    getComputedStyle(root).getPropertyValue("--tile-stagger-ms").trim() || "42"
  );
  const exitSec = Number.parseFloat(
    getComputedStyle(root).getPropertyValue("--tile-exit-dur").trim() || "0.42"
  );
  const exitMs = (Number.isFinite(exitSec) ? exitSec : 0.42) * 1000;
  const n = document.querySelectorAll("#word .tile").length;
  const staggerSpan = n > 0 ? (n - 1) * staggerMs : 0;
  return Math.round(exitMs + staggerSpan + EXIT_PAD_MS);
}

function cycleWords() {
  const container = document.getElementById("word");
  if (!container) return;

  window.setTimeout(() => {
    const tiles = container.querySelectorAll(".tile");
    if (tiles.length === 0) {
      window.setTimeout(() => cycleWords(), WORD_CYCLE_MS);
      return;
    }

    if (prefersReducedMotion()) {
      renderWord();
      cycleWords();
      return;
    }

    container.classList.add("word--exiting");

    window.setTimeout(() => {
      renderWord();
      cycleWords();
    }, exitDurationMs());
  }, WORD_CYCLE_MS);
}

document.addEventListener("DOMContentLoaded", () => {
  renderWord();
  cycleWords();
});
