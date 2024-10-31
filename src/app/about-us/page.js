'use client'
import Experience from "@/block-pages/AboutUs/Experience";
import JoinTeamForm from "@/block-pages/AboutUs/JoinTeam";
import Main from "@/block-pages/AboutUs/Main";
import OurTeam from "@/block-pages/AboutUs/OurTeam";
import Software from "@/block-pages/AboutUs/Software";
import { TAG_JOIN_TEAM } from "@/utils/routes";
import React, { useEffect } from "react";

export default function AboutUs() {

  useEffect(() => {
    document.title = "Hablemos";
    const scrollToElement = () => {
      if (window.location.hash === `#${TAG_JOIN_TEAM}`) {
        const targetElement = document.getElementById(TAG_JOIN_TEAM);
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
          <Main />
          <OurTeam />
          <Experience />
          <Software />
          <JoinTeamForm />
      </main>
    </>
  );
}