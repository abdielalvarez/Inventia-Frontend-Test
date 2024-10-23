'use client'
import React, { useEffect } from "react";
import Main from "@/block-pages/Services/InventiaExperienceResearch/Main";
import ResearchFrame from "@/block-pages/Services/InventiaExperienceResearch/ResearchFrame";
import Explanation from "@/block-pages/Services/InventiaExperienceResearch/Explanation";
import Success from "@/block-pages/Services/InventiaExperienceResearch/Success";

export default function ServicesInventiaExperienceResearch() {

  useEffect(() => {
    document.title = "InventiaLab: Customer Research e Insights";
  }, []);

  return (
    <>
      <main>
        <ResearchFrame />
        <Main />
        <Explanation />
        <Success />
      </main>
    </>
  );
}