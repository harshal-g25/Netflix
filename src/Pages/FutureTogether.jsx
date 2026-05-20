import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import Footer from "../componets/Footer/Footer";
import FloatingHearts from "../componets/Anniversary/FloatingHearts";
import MediaPlaceholder from "../componets/Anniversary/MediaPlaceholder";
import { futureDreams } from "../Constants/anniversaryData";
import { NEXT_ANNIVERSARY_DATE, PARTNER_NAME } from "../Constants/anniversaryConfig";

function getCountdown(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = target - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    passed: false,
  };
}

function FutureTogether() {
  const [countdown, setCountdown] = useState(() =>
    getCountdown(NEXT_ANNIVERSARY_DATE)
  );

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(getCountdown(NEXT_ANNIVERSARY_DATE));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#111] min-h-screen pb-28 relative">
      <FloatingHearts count={10} />

      <section className="pt-24 px-4 sm:px-12 max-w-6xl mx-auto fade-in-cinematic">
        <Fade bottom>
          <h1 className="text-4xl sm:text-5xl font-bold text-white border-l-8 border-red-700 pl-4 romantic-glow-text mb-2">
            Our Future Together
          </h1>
          <p className="text-stone-400 text-lg mb-12 ml-1">
            Dreams, promises, and everything ahead for {PARTNER_NAME}
          </p>
        </Fade>

        <div className="glass-panel romantic-glow rounded-2xl p-8 sm:p-12 mb-16 text-center">
          <h2 className="text-stone-400 uppercase tracking-widest text-sm mb-4">
            Until our next anniversary
          </h2>
          {countdown.passed ? (
            <p className="text-3xl text-white font-bold">Happy Anniversary! ♥</p>
          ) : (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="bg-neutral-900/80 rounded-xl px-6 py-4 min-w-[80px] border border-red-900/30"
                >
                  <p className="text-3xl sm:text-5xl font-bold text-white romantic-glow-text">
                    {String(unit.value).padStart(2, "0")}
                  </p>
                  <p className="text-stone-500 text-xs uppercase mt-1">{unit.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {futureDreams.map((dream, i) => (
            <Fade key={dream.id} bottom delay={i * 80}>
              <div className="glass-panel rounded-xl overflow-hidden romantic-glow hover:scale-[1.02] transition-transform duration-300">
                <MediaPlaceholder
                  src={`/media/${dream.mediaHint}`}
                  mediaHint={dream.mediaHint}
                  className="min-h-[180px]"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{dream.title}</h3>
                  <p className="text-stone-400 mt-2 leading-relaxed">{dream.promise}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FutureTogether;
