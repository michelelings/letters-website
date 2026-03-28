import { useEffect, useMemo, useState } from "react";
import { WordShuffleWebDemo } from "./WordShuffleBoard";
import { pickWord, WORD_ROTATE_MS } from "./words";

function promptForDemoWord(word: string) {
  const w = word.trim();
  return {
    id: w,
    sourceWord: w,
    targetWord: w.toUpperCase(),
    sourceLanguage: "Letters",
    targetLanguage: "Letters",
    topic: "Unscramble the word",
  };
}

export function App() {
  const [word, setWord] = useState(() => pickWord(null));

  useEffect(() => {
    const id = window.setInterval(() => {
      setWord((prev) => pickWord(prev));
    }, WORD_ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    document.title = `${word} — Letters`;
  }, [word]);

  const prompt = useMemo(() => promptForDemoWord(word), [word]);

  return (
    <>
      <main className="main">
        <div className="word-board" id="word-board">
          <WordShuffleWebDemo key={word} prompt={prompt} />
        </div>
      </main>
      <footer className="site-footer">
        <p>
          Letters is made by{" "}
          <a href="https://www.ocho.so" target="_blank" rel="noopener noreferrer">
            Ocho
          </a>
        </p>
      </footer>
    </>
  );
}
