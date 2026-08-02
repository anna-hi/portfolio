"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { optimizedImageSource } from "@/util/image";

export default function ProjectElementPhoto({
  thumbnail,
  alt,
}: {
  thumbnail: string;
  alt: string;
}) {
  return (
    <motion.div
      className="shrink-1 flex items-center min-w-80 w-auto max-w-96 lg:max-w-none"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={optimizedImageSource(thumbnail)}
        width={668}
        height={498}
        sizes="(min-width: 1024px) 50vw, 100vw"
        alt={alt}
        className="rounded-md"
      />
    </motion.div>
  );
}
