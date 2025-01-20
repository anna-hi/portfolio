"use client";

import React, { useState, useEffect, useCallback } from "react";

import ImageViewer from "./image-viewer";

import styles from "./style.module.css";

type ImageCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [allImages, setAllImages] = useState(images.concat(images));
  const [numberToShow, setNumberToShow] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);

      if (window.innerWidth < 768) {
        setNumberToShow(1);
      } else {
        setNumberToShow(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imagesLength = images.length;

  const nextImage = () => {
    setAllImages((prevList) => {
      const newList = [...prevList];
      const firstItem = newList.shift();
      if (firstItem) {
        newList.push(firstItem);
        return newList;
      } else {
        throw new Error("No images to display");
      }
    });
  };

  const prevImage = () => {
    setAllImages((prevList) => {
      const newList = [...prevList];
      const lastItem = newList.pop();
      if (lastItem) {
        newList.unshift(lastItem);
        return newList;
      } else {
        throw new Error("No images to display");
      }
    });
  };

  const visibleImages = allImages.slice(
    imagesLength - (numberToShow + 1),
    imagesLength + numberToShow
  );

  // TODO: ADD ANIMATION FOR WHEN IT SCROLLS
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {visibleImages.map((image, index) => (
          <div key={index} className={styles.carouselItem}>
            <ImageViewer src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <button
        className={styles.carouselButton}
        style={{ left: "1rem" }}
        onClick={prevImage}
      >
        {/* TODO: GET ACTUAL LEFT ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className={styles.carouselButton}
        style={{ right: "1rem" }}
        onClick={nextImage}
      >
        {/* TODO: GET ACTUAL RIGHT ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
