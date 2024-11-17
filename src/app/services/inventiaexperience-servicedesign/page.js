'use client'
import React, { useEffect } from "react";
import Main from "@/block-pages/Services/InventiaExperienceServiceDesign/Main";
import Explanation from "@/block-pages/Services/InventiaExperienceServiceDesign/Explanation";
import Success from "@/block-pages/Services/InventiaExperienceServiceDesign/Success";
import NormalImg from "@/block-pages/Services/InventiaExperienceServiceDesign/NormalImg";

export default function ServicesInventiaExperienceServiceDesign() {

  useEffect(() => {
    document.title = "InventiaLab: Service Design";
  }, []);

  return (
    <>
      <main>
        <Main />
        <NormalImg />
        <Explanation />
        <Success />
      </main>
    </>
  );
}