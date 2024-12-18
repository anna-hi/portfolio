"use client";

import React, { useState } from "react";
import Image from "next/image";

import { PONTANO_SANS } from "@/util/fonts";

type projectHeader = {
  header: string;
  subheader?: string;
  photo?: string;
};

export default function ProjectHeader({
  header,
  subheader,
  photo,
}: projectHeader) {
  const [backgroundHeight, setBackgroundHeight] = useState(80);
  return (
    <div
      className="project-header-container"
      style={{
        background: `linear-gradient(to bottom, pink, pink ${backgroundHeight}%, transparent ${backgroundHeight}%, transparent)`,
      }}
    >
      <h1 className="my-4">{header}</h1>
      {subheader && (
        <h3 className={`my-4 ${PONTANO_SANS.className}`}>{subheader}</h3>
      )}
      {photo && (
        <Image
          src={photo}
          width={0}
          height={0}
          alt={header}
          sizes="100vw"
          className="w-full h-auto"
        />
      )}
    </div>
  );
}
