import { useEffect, useRef, useState } from "react";

export const useAudio = () => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    ref.current = new Audio();
    ref.current.volume = 0.5;
    return () => {
      ref.current?.pause();
      ref.current = null;
    };
  }, []);

  const setCurrentAudio = async (url: string) => {
    if (!ref.current || !url) return;
    const isActiveTrack = ref.current.src === url;
    if (isActiveTrack && isPlaying) {
      pause();
    } else if (!isActiveTrack) {
      ref.current.src = url;
      await play();
    } else if (isActiveTrack && !isPlaying) {
      await play();
    } else {
      pause();
    }
  };
  const play = async () => {
    await ref.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    ref.current?.pause();
    setIsPlaying(false);
  };

  return { isPlaying, setCurrentAudio, play, pause };
};
