import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="flex items-center justify-between border-b px-2 sm:px-4 md:px-8 py-3 md:py-4 bg-white w-full"
  >
    {/* Logo */}
    <div className="flex items-center gap-2 min-w-[100px] sm:min-w-[120px] md:min-w-[200px]">
      <Image src="/logo.svg" alt="The Wander Club Logo" width={100} height={28} priority className="w-[100px] h-[28px] sm:w-[120px] sm:h-[32px] md:w-[160px] md:h-[32px]" />
    </div>
    {/* Nav Links (hidden on mobile) */}
    <ul className="hidden md:flex gap-4 lg:gap-8 font-semibold text-xs sm:text-base flex-1 justify-center">
      <li className="text-blue-500 border-b-2 border-blue-500 pb-1 transition-colors">HOME</li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4">TOKENS</li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4">TOKEN HOLDERS</li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4">MERCH</li>
      <li className="hover:text-blue-500 cursor-pointer transition-colors hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4">THE CLUBHOUSE</li>
    </ul>
    {/* Search and Icons */}
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-[100px] sm:min-w-[120px] md:min-w-[320px] justify-end">
      <div className="hidden md:block relative w-48 lg:w-72">
        <input
          type="text"
          placeholder="Search (e.g. Mexico, Florida, Yellowstone)"
          className="border-2 border-teal-400 rounded-full px-3 py-1 pr-10 w-full text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
          style={{ fontFamily: 'TT Norms Pro, Arial, Helvetica, sans-serif' }}
        />
        <Image src="/Search.svg" alt="Search" width={20} height={20} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
      {/* Mobile icons */}
      <Image src="/Customer.svg" alt="Customer" width={22} height={22} className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] transition-transform duration-150 hover:scale-110 focus:scale-110" />
      <Image src="/Shopping Cart.svg" alt="Cart" width={22} height={22} className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] transition-transform duration-150 hover:scale-110 focus:scale-110" />
      <Image src="/Menu.svg" alt="Menu" width={22} height={22} className="md:hidden w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] transition-transform duration-150 hover:scale-110 focus:scale-110" />
    </div>
  </motion.nav>
);

export default Navbar; 