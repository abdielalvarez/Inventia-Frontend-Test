import React from "react";
import styles from "../../../../styles/block-pages/services/inventiaexperience-productdesign/normalimg.module.css";
import Image from "next/image";

const NormalImg = () => {
  return (
    <div className={styles.background}>
      <Image
        src="/images/services/inventiaexperience-productdesign/main/background.jpg"
        alt="Product Design"
        width={1920}
        height={1080}
        priority
        layout="responsive"
      />
    </div>
  );
};

export default NormalImg;
