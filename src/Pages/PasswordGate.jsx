import React, { useState } from "react";
import { useAnniversary } from "../Context/AnniversaryContext";
import FloatingHearts from "../componets/Anniversary/FloatingHearts";
import { PARTNER_NAME } from "../Constants/anniversaryConfig";

function PasswordGate() {
  const { unlock } = useAnniversary();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = unlock(password.trim());
    if (result.success) {
      setFadeOut(true);
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      className={`min-h-screen bg-black flex items-center justify-center relative overflow-hidden password-screen-enter ${
        fadeOut ? "opacity-0 transition-opacity duration-1000" : ""
      }`}
    >
      <FloatingHearts count={18} />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(229,9,20,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(255,105,180,0.08) 0%, transparent 40%), #000",
        }}
      />

      <div
        className={`relative z-10 w-full max-w-md px-6 fade-in-cinematic ${shake ? "shake-animation" : ""}`}
      >
        <div className="text-center mb-10">
          <img
            className="h-8 mx-auto mb-8 opacity-90"
            src="https://fontmeme.com/permalink/250902/1c1670dd6284f8d01001e1c74b52aae3.png"
            alt="Netflix"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-white romantic-glow-text mb-2">
            A Story Made For You
          </h1>
          <p className="text-stone-400 text-sm sm:text-base">
            One year of us · A cinematic love letter for {PARTNER_NAME}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel romantic-glow rounded-lg p-8">
          <label className="block text-stone-300 text-sm mb-2 text-center">
            Enter the secret word to begin
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="Your password"
            className="w-full bg-neutral-900/80 border border-stone-700 focus:border-red-700 focus:ring-1 focus:ring-red-800 rounded px-4 py-3 text-white text-center outline-none transition-all mb-4"
            autoComplete="off"
          />

          {error && (
            <p className="text-red-500 text-sm text-center mb-4 animate-pulse">
              That&apos;s not quite right — try again, my love ♥
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-700 text-white font-semibold py-3 rounded transition-all duration-300 shadow-lg hover:shadow-red-900/40"
          >
            Enter Our Story
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordGate;
