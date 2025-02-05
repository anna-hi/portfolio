"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export default function ProjectElementPhoto({
  thumbnail,
  alt,
}: {
  thumbnail: string;
  alt: string;
}) {
  return (
    <motion.div
      className="shrink-1 flex items-center min-w-80 w-80 md:w-auto"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={thumbnail}
        width={668}
        height={498}
        priority
        sizes="100vw"
        alt={alt}
        className="rounded-md"
      />
    </motion.div>
  );
}
