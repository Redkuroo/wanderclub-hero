import React from "react";
import { motion } from "framer-motion";

const HeroHeadlineCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
    className="flex flex-col items-center mt-6 sm:mt-8 mb-8 sm:mb-12 px-2 sm:px-4 w-full"
  >
    <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-8 leading-tight">Hold on to the places that hold your heart</h1>
    <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-base sm:text-lg rounded-full px-4 sm:px-6 py-3 sm:py-4 shadow-md transition-all duration-200 ease-in-out transform hover:scale-105 focus:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-300 cursor-pointer w-full max-w-[420px]">Start Your Collection</button>
  </motion.div>
);

export default HeroHeadlineCTA; 