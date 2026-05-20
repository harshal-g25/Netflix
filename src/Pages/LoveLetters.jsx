import React, { useState } from "react";
import { Fade } from "react-reveal";
import Footer from "../componets/Footer/Footer";
import FloatingHearts from "../componets/Anniversary/FloatingHearts";
import MediaPlaceholder from "../componets/Anniversary/MediaPlaceholder";
import { loveLetters } from "../Constants/anniversaryData";

function LoveLetters() {
  const [openedId, setOpenedId] = useState(null);

  const toggleLetter = (id) => {
    setOpenedId(openedId === id ? null : id);
  };

  return (
    <div className="bg-[#111] min-h-screen pb-28 relative">
      <FloatingHearts count={8} />

      <section className="pt-24 px-4 sm:px-12 max-w-5xl mx-auto fade-in-cinematic">
        <Fade bottom>
          <h1 className="text-4xl sm:text-5xl font-bold text-white border-l-8 border-red-700 pl-4 romantic-glow-text mb-2">
            Love Letters
          </h1>
          <p className="text-stone-400 text-lg mb-12 ml-1">
            Open when your heart needs me
          </p>
        </Fade>

        <div className="grid sm:grid-cols-2 gap-8">
          {loveLetters.map((letter) => {
            const isOpen = openedId === letter.id;
            return (
              <Fade key={letter.id} bottom>
                <div
                  className={`envelope-card ${isOpen ? "open" : ""}`}
                  onClick={() => toggleLetter(letter.id)}
                  onKeyDown={(e) => e.key === "Enter" && toggleLetter(letter.id)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="glass-panel rounded-xl p-6 romantic-glow cursor-pointer hover:border-red-900/50 border border-transparent transition-all duration-300">
                    <div className="relative mb-4">
                      <div
                        className={`envelope-flap absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-red-900/80 to-red-950 rounded-t-lg z-10 flex items-center justify-center ${
                          isOpen ? "" : ""
                        }`}
                        style={{
                          clipPath: "polygon(0 0, 50% 70%, 100% 0, 100% 0, 0 0)",
                        }}
                      >
                        <span className="text-2xl mt-2">✉</span>
                      </div>
                      <div className="pt-12">
                        <MediaPlaceholder
                          src={`/media/${letter.mediaHint}`}
                          mediaHint={letter.mediaHint}
                          aspect="video"
                          className="min-h-[100px] rounded"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white">{letter.label}</h3>
                    <p className="text-stone-500 text-sm mt-1">{letter.preview}</p>

                    <div
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-stone-700 pt-4">
                        <p className="text-stone-300 leading-relaxed whitespace-pre-line">
                          {letter.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LoveLetters;
