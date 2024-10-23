'use client'
import React, { useEffect } from "react";
import Main from "@/block-pages/Services/InventiaSoftwareFullstackDevelopment/Main";
import Explanation from "@/block-pages/Services/InventiaSoftwareFullstackDevelopment/Explanation";
import Success from "@/block-pages/Services/InventiaSoftwareFullstackDevelopment/Success";

export default function ServicesInventiaSoftwareFullstackDevelopment() {

  useEffect(() => {
    document.title = "InventiaLab: Full-Stack Development";
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