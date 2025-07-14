import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
    className="flex flex-col items-center justify-center mt-6 sm:mt-8 w-full px-2 text-center md:flex-row md:items-center md:justify-center md:text-left gap-1 sm:gap-2"
  >
    <div className="flex gap-1 sm:gap-2 mb-1 md:mb-0 md:mr-3 justify-center">
      {/* 5 blue heart SVGs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          src="/Filled Heart.svg"
          alt="Heart"
          width={22}
          height={22}
          className="inline-block align-middle w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] transition-transform duration-200 hover:scale-125 focus:scale-125"
          tabIndex={0}
        />
      ))}
    </div>
    <span className="text-gray-700 font-medium text-xs sm:text-base md:text-lg whitespace-nowrap">Loved by 500,000+ travelers.</span>
  </motion.div>
);

export default Testimonial; 