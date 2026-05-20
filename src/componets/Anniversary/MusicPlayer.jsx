import React from "react";
import { useAnniversary } from "../../Context/AnniversaryContext";

function MusicPlayer() {
  const { isPlaying, toggleMusic, musicTitle, musicArtist, isUnlocked } =
    useAnniversary();

  if (!isUnlocked) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none"
      aria-label="Music player"
    >
      <div className="max-w-md mx-auto pointer-events-auto">
        <div className="glass-panel music-player-glow rounded-full px-4 py-3 flex items-center gap-4 romantic-glow">
          <button
            type="button"
            onClick={toggleMusic}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-red-800 hover:bg-red-700 flex items-center justify-center transition-all duration-300 shadow-lg"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">{musicTitle}</p>
            <p className="text-stone-400 text-xs truncate">{musicArtist}</p>
          </div>
          <div className="flex gap-0.5 items-end h-6" aria-hidden="true">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`w-1 bg-red-600 rounded-full transition-all ${
                  isPlaying ? "animate-pulse" : "opacity-30"
                }`}
                style={{
                  height: isPlaying ? `${8 + i * 4}px` : "4px",
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
