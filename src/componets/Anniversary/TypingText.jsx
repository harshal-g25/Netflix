import React, { useState, useEffect } from "react";

function TypingText({ lines, speed = 45, pauseBetween = 1200 }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, pauseBetween);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex, lines, speed, pauseBetween]);

  return (
    <div className="space-y-4 max-w-2xl mx-auto text-center px-4">
      {lines.map((line, i) => (
        <p
          key={i}
          className={`text-lg sm:text-xl text-stone-300 leading-relaxed ${
            i === lineIndex && lineIndex < lines.length ? "typing-cursor" : ""
          }`}
        >
          {displayed[i] || (i < lineIndex ? line : "")}
        </p>
      ))}
    </div>
  );
}

export default TypingText;
