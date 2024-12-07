"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
// import FlowerIcon, { FLOWER_COLORS, FLOWER_SIZES } from "./flower-icon";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    console.log("hi");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <motion.div
        onClick={scrollToTop}
        className="scroll-to-top"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          delay: 0,
          ease: "easeOut",
        }}
      >
        <ChevronUpIcon />
      </motion.div>
    )
  );
};
export default ScrollToTop;
