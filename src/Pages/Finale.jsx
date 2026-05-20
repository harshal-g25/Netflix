import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import FloatingHearts from "../componets/Anniversary/FloatingHearts";
import { finaleMessage } from "../Constants/anniversaryData";
import { PARTNER_NAME } from "../Constants/anniversaryConfig";

function spawnConfetti() {
  const colors = ["#e50914", "#ff69b4", "#fff", "#ff6b6b", "#ffd700"];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.left = `${Math.random() * 100}vw`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = `${2 + Math.random() * 3}s`;
    el.style.animationDelay = `${Math.random() * 0.5}s`;
    el.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }
}

function Finale() {
  const navigate = useNavigate();
  const [surpriseShown, setSurpriseShown] = useState(false);
  const [fadeBlack, setFadeBlack] = useState(false);

  const handleSurprise = useCallback(() => {
    spawnConfetti();
    setSurpriseShown(true);
    setTimeout(() => setFadeBlack(true), 4000);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pb-32">
      <FloatingHearts count={20} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(229,9,20,0.2) 0%, transparent 55%)",
        }}
      />

      <section className="relative z-10 pt-28 px-4 sm:px-12 max-w-3xl mx-auto text-center fade-in-cinematic">
        <Fade bottom>
          <h1 className="text-4xl sm:text-6xl font-bold text-white romantic-glow-text mb-8">
            {finaleMessage.title}
          </h1>
        </Fade>

        <div className="space-y-6 mb-12">
          {finaleMessage.lines.map((line, i) => (
            <Fade key={i} bottom delay={i * 200}>
              <p className="text-lg sm:text-xl text-stone-300 leading-relaxed">{line}</p>
            </Fade>
          ))}
        </div>

        <p className="text-2xl text-pink-300/90 font-light mb-12">
          Happy One Year, {PARTNER_NAME} ♥
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-4xl mb-12 opacity-60">
          <span className="animate-pulse">🌹</span>
          <span className="animate-pulse delay-100">♥</span>
          <span className="animate-pulse delay-200">🌹</span>
        </div>

        {!surpriseShown ? (
          <button
            type="button"
            onClick={handleSurprise}
            className="bg-red-800 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-md romantic-glow transition-all duration-300"
          >
            {finaleMessage.surpriseLabel}
          </button>
        ) : (
          <Fade bottom>
            <p className="text-white text-xl animate-pulse">
              I love you more than words can say...
            </p>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="mt-8 text-stone-500 hover:text-white underline text-sm"
            >
              Watch our story again
            </button>
          </Fade>
        )}
      </section>

      {fadeBlack && (
        <div className="fixed inset-0 z-[200] bg-black fade-to-black pointer-events-none" />
      )}
    </div>
  );
}

export default Finale;
