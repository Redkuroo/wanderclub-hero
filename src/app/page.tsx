'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PromoBar from "./components/PromoBar";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonial";
import HeroHeadlineCTA from "./components/HeroHeadlineCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PromoBar />
      <Navbar />
      <div className="w-full flex justify-center mt-0">
        <div className="relative w-full h-[calc(100vw*0.75)] sm:h-[320px] md:w-[1800px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
          <Carousel />
        </div>
      </div>
      <Testimonial />
      <HeroHeadlineCTA />
    </div>
  );
}
