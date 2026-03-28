const WORDS = [
  "ROLEJ",
  "HELLO",
  "WORLD",
  "WORDS",
  "PLAYS",
  "LIGHT",
  "DREAM",
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
