'use client'
import Main from "@/block-pages/ContactUs/Main";
import React, { useEffect } from "react";

export default function ContactUs() {

  useEffect(() => {
    document.title = "Nosotros";
  }, []);

  return (
    <>
      <main>
        <Main />
      </main>
    </>
  );
}