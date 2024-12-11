"use client";

import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

interface ImageViewerProps {
  src: string;
  alt: string;
}

export default function ImageViewer({ src, alt }: ImageViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOnScroll = () => {
      if (isModalOpen) {
        console.log("scrolling");
        handleCloseModal();
      }
    };
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [isModalOpen]);

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        <div className="position-relative">
          <motion.div
            className={`image-viewer ${isModalOpen ? "open" : ""}`}
            layout
            onClick={handleImageClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt={alt}
              {...{ width: 0, height: 0, className: "w-full h-auto" }}
              sizes="100vw"
            />
          </motion.div>
        </div>
        {/* <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="image-viewer open"
            layoutId={`image-viewer-${alt}`}
            onClick={handleCloseModal}
          >
            <Image src={src} layout="fill" objectFit="contain" alt={alt} />
          </motion.div>
        )}
      </AnimatePresence> */}
      </AnimatePresence>
      {isModalOpen && (
        <div className="opacity-0">
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>
      )}
    </>
  );
}
