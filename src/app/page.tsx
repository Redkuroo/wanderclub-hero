'use client';

import PromoBar from "./components/PromoBar";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonial";
import HeroHeadlineCTA from "./components/HeroHeadlineCTA";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PromoBar />
      <Navbar />
      <div className="w-full flex justify-center mt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-full h-[calc(100vw*0.75)] sm:h-[320px] md:max-w-full md:w-full md:h-[350px] lg:w-full lg:h-[450px] overflow-hidden rounded-lg shadow-lg sm:rounded-lg sm:shadow-lg md:rounded-none md:shadow-none lg:rounded-none lg:shadow-none"
        >
          <Carousel />
        </motion.div>
      </div>
      <Testimonial />
      <HeroHeadlineCTA />
    </div>
  );
}
