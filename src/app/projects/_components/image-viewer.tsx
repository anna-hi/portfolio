"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// styles
import styles from "./style.module.css";

interface ImageViewerProps {
  src: string;
  alt: string;
  imageClass?: string;
  useImg?: boolean; // Optional prop to use <img> instead of <Image>
}

export default function ImageViewer({
  src,
  alt,
  imageClass = "",
  useImg = false, // Default to using <Image>
}: ImageViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOnScroll = () => {
      if (isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [isModalOpen]);

  const MainImageComponent = useImg ? (
    <Image
      src={src}
      width={0}
      height={0}
      alt={alt}
      sizes="100vw"
      priority
      className={`${imageClass} w-full h-auto rounded-md cursor-zoom-in`}
      onClick={handleImageClick}
    />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`${imageClass} w-full h-auto rounded-md cursor-zoom-in`}
      onClick={handleImageClick}
    />
  );

  return (
    <>
      {MainImageComponent}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.imageViewerModal}
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.imageViewerModalContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {/* TODO: maybe replace this if gifs are also failing on this */}
              <Image
                src={src}
                alt={alt}
                fill={true}
                objectFit="contain"
                sizes="100vw"
                className={imageClass}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
