"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Carousel = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
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
    </motion.div>
  );
};

export default Carousel; 