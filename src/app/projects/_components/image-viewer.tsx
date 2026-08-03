"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { fullResolutionImageSource, optimizedImageSource } from "@/util/image";

// styles
import styles from "./style.module.css";

interface ImageViewerProps {
  src: string;
  alt: string;
  imageClass?: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#C8C8C8" offset="20%" />
      <stop stop-color="#FBF8EC" offset="50%" />
      <stop stop-color="#C8C8C8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#C8C8C8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const shimmerPlaceholder = (w: number, h: number) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}` as PlaceholderValue;

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
                <source src={`${videoBase}.full.webm`} type="video/webm" />
                <source src={`${videoBase}.full.mp4`} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NormalImageViewer({ src, alt, imageClass }: ImageViewerProps) {
  const optimizedSrc = optimizedImageSource(src);
  const fullResolutionSrc = fullResolutionImageSource(src);

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
      src={optimizedSrc}
      width={0}
      height={0}
      alt={alt}
      loading="eager"
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
              <Image
                src={fullResolutionSrc}
                alt={alt}
                fill={true}
                sizes="100vw"
                style={{ objectFit: "contain" }}
                quality={90}
                className={imageClass}
                placeholder={shimmerPlaceholder(700, 475)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ImageViewer(props: ImageViewerProps) {
  if (props.src.toLowerCase().endsWith(".gif")) {
    return <AnimatedImageViewer {...props} />;
  }
  return <NormalImageViewer {...props} />;
}
