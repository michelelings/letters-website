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

/** Degrees; repeats for words longer than this pattern */
const TILTS = [-4, 3, 1, -3, 4];

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function renderWord() {
  const word = pickWord();
  const container = document.getElementById("word");
  if (!container) return;

  container.replaceChildren();
  container.setAttribute("aria-label", word);

  [...word].forEach((char, i) => {
    const span = document.createElement("span");
    span.className = "tile";
    span.textContent = char;
    span.style.zIndex = String(i + 1);
    span.style.setProperty("--tilt", `${TILTS[i % TILTS.length]}deg`);
    container.appendChild(span);
  });

  document.title = `${word} — Letters`;
}

document.addEventListener("DOMContentLoaded", renderWord);
