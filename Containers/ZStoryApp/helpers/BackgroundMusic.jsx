import { React, useRef, useEffect } from "react";

export default function BackgroundMusic({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.play();
    }
  }, []);

  return <audio ref={audioRef} src={src}></audio>;
}
