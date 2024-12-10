"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageViewerProps {
  src: string;
  alt: string;
}

export default function ImageViewer({ src, alt }: ImageViewerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="image-viewer" onClick={handleImageClick}>
        <Image
          src={src}
          width={0}
          height={0}
          alt={alt}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      {isModalOpen && (
        <div className="image-viewer-modal" onClick={handleCloseModal}>
          <div className="image-viewer-modal-content flex justify-center align-middle bg-transparent rounded-lg">
            <div className="w-full h-auto">
              <Image
                src={src}
                width={0}
                height={0}
                alt={alt}
                sizes="100vw"
                className="w-full h-full"
              />{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
