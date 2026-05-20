import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { ANNIVERSARY_PASSWORD, MUSIC } from "../Constants/anniversaryConfig";

const AnniversaryContext = createContext(null);

const STORAGE_KEY = "anniversary_unlocked";

export function AnniversaryProvider({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "true"
  );
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicReady, setMusicReady] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(MUSIC.src);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    const onCanPlay = () => setMusicReady(true);
    const onError = () => setMusicReady(false);

    audio.addEventListener("canplaythrough", onCanPlay);
    audio.addEventListener("error", onError);

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", onCanPlay);
      audio.removeEventListener("error", onError);
      audioRef.current = null;
    };
  }, []);

  const unlock = useCallback((password) => {
    if (password === ANNIVERSARY_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
      return { success: true };
    }
    return { success: false };
  }, []);

  const lock = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setIsUnlocked(false);
    setJourneyStarted(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const startExperience = useCallback(() => {
    setJourneyStarted(true);
    const audio = audioRef.current;
    if (audio && !isPlaying) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <AnniversaryContext.Provider
      value={{
        isUnlocked,
        unlock,
        lock,
        journeyStarted,
        setJourneyStarted,
        isPlaying,
        toggleMusic,
        startExperience,
        musicReady,
        musicTitle: MUSIC.title,
        musicArtist: MUSIC.artist,
      }}
    >
      {children}
    </AnniversaryContext.Provider>
  );
}

export function useAnniversary() {
  const ctx = useContext(AnniversaryContext);
  if (!ctx) throw new Error("useAnniversary must be used within AnniversaryProvider");
  return ctx;
}

export default AnniversaryContext;
