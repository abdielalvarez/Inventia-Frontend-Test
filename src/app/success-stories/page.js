'use client'
import Carousel from "@/block-pages/SuccessStories/Primary/Carousel";
import ContactUs from "@/block-pages/SuccessStories/Primary/ContactUs";
import Description from "@/block-pages/SuccessStories/Primary/Description";
import Main from "@/block-pages/SuccessStories/Primary/Main";
import Options from "@/block-pages/SuccessStories/Primary/Options";
import Specialize from "@/block-pages/SuccessStories/Primary/Specialize";
import React, { useEffect } from "react";

export default function SuccessStories() {

  useEffect(() => {
    document.title = "Casos de éxito";
  }, []);

  return (
    <>
      <main>
        <Main />
        <Specialize />
        <Options />
        <Description />
        <Carousel />
        <ContactUs />
      </main>
    </>
  );
}