'use client'
import Experience from "@/block-pages/Services/Primary/Experience";
import Help from "@/block-pages/Services/Primary/Help";
import Methodology from "@/block-pages/Services/Primary/Methodology";
import Software from "@/block-pages/Services/Primary/Software";
import React from "react";

export default function Services() {
  return (
    <main>
      <Help />
      <Experience />
      <Software />
      <Methodology />
    </main>
  );
}