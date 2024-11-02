'use client'
import Experience from "@/block-pages/Services/Primary/Experience";
import Help from "@/block-pages/Services/Primary/Help";
import Methodology from "@/block-pages/Services/Primary/Methodology";
import Software from "@/block-pages/Services/Primary/Software";
import { TAG_INVENTIAEXPERIENCE, TAG_INVENTIASOFTWARE } from "@/utils/routes";
import React, { useEffect } from "react";

export default function Services() {

  useEffect(() => {
    document.title = "Services";
    const scrollToElement = () => {
      if (window.location.hash === `#${TAG_INVENTIAEXPERIENCE}`) {
        const targetElement = document.getElementById(TAG_INVENTIAEXPERIENCE);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (window.location.hash === `#${TAG_INVENTIASOFTWARE}`) {
        const targetElement = document.getElementById(TAG_INVENTIASOFTWARE);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    setTimeout(scrollToElement, 100);
  }, []);
  
  return (
    <>
      <main>
        <Help />
        <Experience />
        <Software />
        <Methodology />
      </main>
    </>
  );
}