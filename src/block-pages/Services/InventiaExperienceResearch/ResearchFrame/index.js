import React, { useEffect, useRef, useState } from "react";
import styles from "../../../../styles/block-pages/services/inventiaexperience-research/researchframe.module.css";

const ResearchFrame = () => {
  const videoRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.classList.add(styles.videoFadeIn);
      video.addEventListener('ended', () => {
        setFadeOut(true);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', () => {
          setFadeOut(true);
        });
      }
    };
  }, []);

  return (
    <div className={styles.background}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`${styles.videoFullScreen} ${fadeOut ? styles.videoFadeOut : ''}`}
      >
        <source
          src="/videos/services/inventiaexperience-research/research.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ResearchFrame;