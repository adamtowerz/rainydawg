import { useEffect, useRef, useState } from "react";
import styles from "./Player.module.scss";

const STREAM_SRC = "http://166.62.119.4:8000/stream";

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  function playPause() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  const [spins, setSpins] = useState<any>(null);

  async function updateSpins() {
    const res = await fetch("/api/spins");
    const spins = await res.json();
    setSpins(spins);
  }

  const [timerHandle, setTimerHandle] = useState<any>();
  useEffect(() => {
    updateSpins();

    const handle = setInterval(() => {
      updateSpins();
      console.info("Getting spins");
    }, 1000 * 10);
    setTimerHandle(handle);

    return () => clearInterval(timerHandle);
  }, []);

  return (
    <div className={styles.container}>
      <button type="button" onClick={playPause} className={styles.button}>
        {isPlaying ? (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" />
            <path d="M13.5 3H6V28.5H13.5V3Z" fill="black" stroke="black" />
            <path d="M25.5 3H18V28.5H25.5V3Z" fill="black" stroke="black" />
          </svg>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" />
            <path d="M6 28.5L25.5 16L6 3V28.5Z" fill="black" stroke="black" />
          </svg>
        )}
      </button>
      <audio ref={audioRef} src={STREAM_SRC}></audio>
      <div className={styles.desc}>
        <div>
          <b>{spins && spins.spins.items[0].song}</b>
        </div>
        <div>{spins && spins.spins.items[0].artist}</div>
      </div>
    </div>
  );
}

export default Player;
