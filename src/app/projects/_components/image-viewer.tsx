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
          style={{ width: "100%", height: "auto" }}
          alt={alt}
        />
      </div>

      {isModalOpen && (
        <div className="image-viewer-modal" onClick={handleCloseModal}>
          <div className="image-viewer-modal-content">
            <Image
              src={src}
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt={alt}
            />
          </div>
        </div>
      )}
    </div>
  );
}
