import React from "react";
import styles from "../../../../styles/block-pages/services/inventiaexperience-servicedesign/normalimg.module.css";
import Image from "next/image";

const NormalImg = () => {
  return (
    <div className={styles.background}>
      <Image
        src="/images/services/inventiaexperience-servicedesign/main/background.jpg"
        alt="Service Design"
        width={1920}
        height={1080}
        priority
        layout="responsive"
      />
    </div>
  );
};

export default NormalImg;
