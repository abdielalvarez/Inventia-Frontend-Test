'use client'
import React, { useEffect } from "react";
import Main from "@/block-pages/Services/InventiaSoftwareCloudEngineering/Main";
import Explanation from "@/block-pages/Services/InventiaSoftwareCloudEngineering/Explanation";
import Success from "@/block-pages/Services/InventiaSoftwareCloudEngineering/Success";

export default function ServicesInventiaSoftwareCloudEngineering() {

  useEffect(() => {
    document.title = "InventiaLab: Cloud Engineering";
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