import React from "react";
import { motion } from "framer-motion";

const PromoBar = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-[#2196f3] text-white text-center flex flex-col items-center justify-center uppercase tracking-widest font-medium w-full h-[56px] sm:h-[64px] md:h-[70px] my-[14px] px-2 sm:px-4 text-[11px] sm:text-xs md:text-sm gap-1"
  >
    <div className="flex flex-wrap justify-center items-center gap-2">
      20% OFF CODE: <span className="font-bold underline">PRIMETIME20</span> <a href="#" className="font-bold underline ml-1">SHOP NOW</a>
    </div>
    <div className="normal-case tracking-normal font-normal text-[10px] sm:text-xs md:text-sm">
      Sale Ends: <span className="font-bold">03hrs 29min 57sec</span>
    </div>
  </motion.div>
);

export default PromoBar; 