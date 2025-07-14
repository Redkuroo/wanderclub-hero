'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Custom hook to get number of visible images
function useVisibleImages() {
  const [visible, setVisible] = useState(1);
  useEffect(() => {
    function handleResize() {
      setVisible(window.innerWidth >= 768 ? 3 : 1);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return visible;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Promo Bar */}
      <div className="bg-[#2196f3] text-white text-xs text-center py-2 px-4 flex flex-col items-center justify-center uppercase tracking-widest font-medium">
        <div>
          20% OFF CODE: <span className="font-bold underline">PRIMETIME20</span> <a href="#" className="font-bold underline ml-1">SHOP NOW</a>
        </div>
        <div className="mt-1 normal-case tracking-normal font-normal">
          Sale Ends: <span className="font-bold">03hrs 29min 57sec</span>
        </div>
      </div>
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b px-4 py-4 bg-white md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-[120px] md:min-w-[200px]">
          <Image src="/logo.svg" alt="The Wander Club Logo" width={120} height={32} priority className="md:w-[160px] md:h-[32px] w-[120px] h-[24px]" />
        </div>
        {/* Nav Links (hidden on mobile) */}
        <ul className="hidden md:flex gap-8 font-semibold text-base flex-1 justify-center">
          <li className="text-blue-500 border-b-2 border-blue-500 pb-1">HOME</li>
          <li className="hover:text-blue-500 cursor-pointer">TOKENS</li>
          <li className="hover:text-blue-500 cursor-pointer">TOKEN HOLDERS</li>
          <li className="hover:text-blue-500 cursor-pointer">MERCH</li>
          <li className="hover:text-blue-500 cursor-pointer">THE CLUBHOUSE</li>
        </ul>
        {/* Search and Icons */}
        <div className="flex items-center gap-4 min-w-[120px] md:min-w-[320px] justify-end">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search (e.g. Mexico, Florida, Yellowstone)"
              className="border-2 border-teal-400 rounded-full px-4 py-1 pr-10 w-72 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
              style={{ fontFamily: 'TT Norms Pro, Arial, Helvetica, sans-serif' }}
            />
            <Image src="/Search.svg" alt="Search" width={20} height={20} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          {/* Mobile icons */}
         
          <Image src="/Customer.svg" alt="Customer" width={24} height={24} />
          <Image src="/Shopping Cart.svg" alt="Cart" width={24} height={24} />
          <Image src="/Menu.svg" alt="Menu" width={24} height={24} className="md:hidden" />
          {/* Hamburger menu for mobile */}
        
        </div>
      </nav>
      {/* Hero Images Carousel */}
      <div className="w-full flex justify-center mt-0">
        <div className="relative w-full h-[calc(100vw*0.75)] md:w-[1800px] md:h-[450px] overflow-hidden rounded-lg shadow-lg">
          <Carousel />
        </div>
      </div>
      {/* Testimonial */}
      <div className="flex flex-col items-center justify-center mt-8 w-full px-2 text-center md:flex-row md:items-center md:justify-center md:text-left">
        <div className="flex gap-1 mb-2 md:mb-0 md:mr-3 justify-center">
          {/* 5 blue heart SVGs */}
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src="/Filled Heart.svg"
              alt="Heart"
              width={28}
              height={28}
              className="inline-block align-middle"
            />
          ))}
        </div>
        <span className="text-gray-700 font-medium text-lg whitespace-nowrap">Loved by 500,000+ travelers.</span>
      </div>
      {/* Headline & CTA */}
      <div className="flex flex-col items-center mt-8 mb-12 px-4 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 leading-tight">Hold on to the places that hold your heart</h1>
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-lg rounded-full px-6 py-4 shadow-md transition-colors cursor-pointer w-full max-w-[420px]">Start Your Collection</button>
      </div>
    </div>
  );
}

function Carousel() {
  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
  ];
  // Responsive: 3 visible on desktop, 1 on mobile
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Infinite loop: duplicate images at both ends
  const visibleCount = isDesktop ? 3 : 1;
  const prefix = images.slice(-visibleCount);
  const suffix = images.slice(0, visibleCount);
  const carouselImages = [...prefix, ...images, ...suffix];
  const [index, setIndex] = useState(visibleCount); // Start at first real image
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<any>(null);

  // Slide size
  const slideWidth = isDesktop ? 600 : 0; // px, not used for mobile
  const slideHeight = 450; // px

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Infinite loop logic
  useEffect(() => {
    if (index === carouselImages.length - visibleCount) {
      // After last real image, jump to first real image
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(visibleCount);
      }, 700);
      return () => clearTimeout(timeout);
    }
    if (index === 0) {
      // Before first real image, jump to last real image
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(carouselImages.length - 2 * visibleCount);
      }, 700);
      return () => clearTimeout(timeout);
    }
    setIsTransitioning(true);
  }, [index, carouselImages.length, visibleCount]);

  // On mount or when layout changes, reset to first real image
  useEffect(() => {
    setIndex(visibleCount);
  }, [isDesktop, images.length]);

  // Calculate transform and container width
  const getTransform = () => {
    if (isDesktop) {
      return `translateX(-${index * slideWidth}px)`;
    } else {
      return `translateX(-${index * 100}%)`;
    }
  };
  const getContainerWidth = () => {
    if (isDesktop) {
      return `${carouselImages.length * slideWidth}px`;
    } else {
      return '100%';
    }
  };

  return (
    <div
      className="flex h-full"
      style={{
        width: getContainerWidth(),
        transform: getTransform(),
        transition: isTransitioning ? 'transform 0.7s' : 'none',
      }}
    >
      {carouselImages.map((src, i) => (
        <div
          key={i}
          className={
            isDesktop
              ? `flex-shrink-0 w-[600px] h-[450px]`
              : `flex-shrink-0 w-full h-full`
          }
          style={isDesktop ? { width: `600px`, height: `450px` } : {}}
        >
          <Image
            src={src}
            alt={`Carousel image ${((i - visibleCount + images.length) % images.length) + 1}`}
            width={600}
            height={450}
            className="object-contain w-full h-full bg-white"
            priority={i === visibleCount}
          />
        </div>
      ))}
    </div>
  );
}
