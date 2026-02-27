import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/images/title.png" alt="MacBook Pro title" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <button>Buy</button>
      <p>From $1,599.00 or $54.12/mo for 24 months</p>
    </section>
  );
};

export default Hero;
