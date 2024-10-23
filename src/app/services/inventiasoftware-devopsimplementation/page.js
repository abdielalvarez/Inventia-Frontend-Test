'use client'
import React, { useEffect } from "react";
import Main from "@/block-pages/Services/InventiaSoftwareDevopsImplementation/Main";
import Explanation from "@/block-pages/Services/InventiaSoftwareDevopsImplementation/Explanation";
import Success from "@/block-pages/Services/InventiaSoftwareDevopsImplementation/Success";

export default function ServicesInventiaSoftwareDevopsImplementation() {

  useEffect(() => {
    document.title = "InventiaLab: Devops Implementation";
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