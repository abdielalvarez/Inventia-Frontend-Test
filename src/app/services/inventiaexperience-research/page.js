'use client'
import React from "react";
import Main from "@/block-pages/Services/InventiaExperienceResearch/Main";
import ResearchFrame from "@/block-pages/Services/InventiaExperienceResearch/ResearchFrame";
import Explanation from "@/block-pages/Services/InventiaExperienceResearch/Explanation";
import Success from "@/block-pages/Services/InventiaExperienceResearch/Success";

export default function ServicesInventiaExperienceResearch() {
  return (
    <main>
      <ResearchFrame />
      <Main />
      <Explanation />
      <Success />
    </main>
  );
}