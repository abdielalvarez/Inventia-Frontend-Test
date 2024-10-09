'use client'
import React from "react";
import Main from "@/block-pages/Services/InventiaExperienceServiceDesign/Main";
import Explanation from "@/block-pages/Services/InventiaExperienceServiceDesign/Explanation";
import Success from "@/block-pages/Services/InventiaExperienceServiceDesign/Success";
import NormalImg from "@/block-pages/Services/InventiaExperienceServiceDesign/NormalImg";
import styles from "../../../styles/block-pages/services/inventiaexperience-servicedesign/main.module.css"

export default function ServicesInventiaExperienceServiceDesign() {
  return (
    <main>
      <Main />
      <Explanation />
      <div className={styles.page}>
        <NormalImg />
        <Success />
      </div>
    </main>
  );
}