import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
        setHasInteracted(true);
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    return () => document.removeEventListener("click", handleFirstInteraction);
  }, [hasInteracted]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/song.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 glass p-4 rounded-full border border-rose-medium/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-rose-deep group-hover:text-primary transition-colors" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground group-hover:text-rose-deep transition-colors" />
        )}
      </button>
      
      {!hasInteracted && (
        <div className="fixed bottom-20 right-6 z-50 glass px-4 py-2 rounded-full border border-rose-medium/30 text-sm text-muted-foreground animate-pulse">
          Click anywhere to play music ♪
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
