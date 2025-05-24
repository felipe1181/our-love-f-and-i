"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Verifica se o arquivo de áudio está carregado corretamente
    const handleError = (e: Event) => {
      console.error("Erro ao carregar áudio:", e);
      setError("Não foi possível carregar o áudio");
    };

    const handleCanPlay = () => {
      setError(null);
      // Tenta tocar quando o áudio estiver pronto
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Erro ao tocar áudio:", err);
          setError("Não foi possível tocar o áudio automaticamente");
        });
    };

    audio.addEventListener("error", handleError);
    audio.addEventListener("canplaythrough", handleCanPlay);

    // Tenta tocar após um delay
    const timeoutId = setTimeout(() => {
      if (audio.paused) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.error("Erro ao tocar áudio:", err);
            setError("Não foi possível tocar o áudio automaticamente");
          });
      }
    }, 1001);

    return () => {
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("canplaythrough", handleCanPlay);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.error("Erro ao tocar áudio:", err);
            setError("Não foi possível tocar o áudio");
          });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="/nossa-musica.mp3"
        loop
        preload="auto"
        className="hidden"
      />
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3 shadow-lg transition-all duration-300"
        title={error || (isPlaying ? "Pausar música" : "Tocar música")}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
