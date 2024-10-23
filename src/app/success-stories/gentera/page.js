'use client'
import Brief from "@/block-pages/SuccessStories/Gentera/Brief";
import ContactUs from "@/block-pages/SuccessStories/Gentera/ContactUs";
import Cover from "@/block-pages/SuccessStories/Gentera/Cover";
import Main from "@/block-pages/SuccessStories/Gentera/Main";
import Results from "@/block-pages/SuccessStories/Gentera/Results";
import Success from "@/block-pages/SuccessStories/Gentera/Success";
import React, { useEffect } from "react";

export default function SuccessStoriesGentera() {

  useEffect(() => {
    document.title = "InventiaLab: Gentera";
  }, []);

  return (
    <>
      <main>
        <Cover />
        <Main />
        <Brief />
        <Results />
        <ContactUs />
        <Success />
      </main>
    </>
  );
}