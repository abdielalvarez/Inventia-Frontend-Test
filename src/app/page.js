'use client'
import AboutUs from "@/block-pages/Home/AboutUs";
import ContactUs from "@/block-pages/Home/ContactUs";
import ContactUsForm from "@/block-pages/Home/ContactUsForm";
import Explanation from "@/block-pages/Home/Explanation";
import Help from "@/block-pages/Home/Help";
import Specialize from "@/block-pages/Home/Specialize";
import Transform from "@/block-pages/Home/Transform";
import Trust from "@/block-pages/Home/Trust";
import Main from "@/block-pages/Home/Welcome";
import React from "react";

export default function Home() {
  return (
    <main>
      <Main />
      <Transform />
      <ContactUs />
      <Help />
      <Explanation />
      <Specialize />
      <Trust />
      <AboutUs />
      <ContactUsForm />
    </main>
  );
}