'use client'
import React, { useEffect } from "react";
import Main from "@/block-pages/Services/InventiaExperienceProductDesign/Main";
import Explanation from "@/block-pages/Services/InventiaExperienceProductDesign/Explanation";
import Success from "@/block-pages/Services/InventiaExperienceProductDesign/Success";

export default function ServicesInventiaExperienceProductDesign() {

  useEffect(() => {
    document.title = "InventiaLab: Product Design and Build";
  }, []);

  return (
    <>
      <main>
        <Main />
        <Explanation />
        <Success />
      </main>
    </>
  );
}