"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// styles
import styles from "./style.module.css";

interface ImageViewerProps {
  src: string;
  alt: string;
  imageClass?: string;
}

function AnimatedImageViewer({ src, alt, imageClass }: ImageViewerProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const poster = src.replace(/\.gif$/i, ".webp");
  const videoBase = src.replace(/\.gif$/i, "");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShouldLoad(true),
      { rootMargin: "300px" },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOnScroll = () => isModalOpen && setIsModalOpen(false);
    window.addEventListener("scroll", handleOnScroll);
    return () => window.removeEventListener("scroll", handleOnScroll);
  }, [isModalOpen]);

  const handleVideoClick = () => {
    setShouldLoad(true);
    setIsModalOpen(true);
  };

  return (
    <div ref={containerRef} className={`${imageClass} w-full`}>
      <video
        className="w-full h-auto rounded-md cursor-zoom-in"
        autoPlay={shouldLoad}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={alt}
        onClick={handleVideoClick}
      >
        {shouldLoad && (
          <>
            <source src={`${videoBase}.webm`} type="video/webm" />
            <source src={`${videoBase}.mp4`} type="video/mp4" />
          </>
        )}
      </video>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.imageViewerModal}
            onClick={() => setIsModalOpen(false)}
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
              <video
                className="max-w-full max-h-full rounded-md"
                autoPlay
                muted
                loop
                playsInline
                poster={poster}
                aria-label={alt}
              >
                <source src={`${videoBase}.webm`} type="video/webm" />
                <source src={`${videoBase}.mp4`} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ImageViewer({
  src,
  alt,
  imageClass = "",
}: ImageViewerProps) {
  if (src.toLowerCase().endsWith(".gif")) {
    return <AnimatedImageViewer src={src} alt={alt} imageClass={imageClass} />;
  }

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

  const MainImageComponent = (
    <Image
      src={src}
      width={0}
      height={0}
      alt={alt}
      sizes="(min-width: 1024px) 60vw, 100vw"
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
