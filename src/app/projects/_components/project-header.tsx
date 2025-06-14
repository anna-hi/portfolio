"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// styles
import styles from "./style.module.css";
import { ALEGREYA_SANS } from "@/util/fonts";

type projectHeader = {
  header: string;
  tags?: string[];
  photo?: string;
  dropShadow?: boolean;
};

export default function ProjectHeader({
  header,
  tags,
  photo,
  dropShadow = false,
}: projectHeader) {
  const tagsText = tags && tags.join(" · ");

  const photoClass = dropShadow
    ? styles.projectHeaderImage + " " + styles.projectHeaderImageDropShadow
    : styles.projectHeaderImage;

  return (
    <div className={styles.projectHeaderContainer}>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className={styles.projectHeaderText}>
          <h1>{header}</h1>
          {tags && (
            <div className={`${ALEGREYA_SANS.className} text-base`}>
              {tagsText}
            </div>
          )}
        </div>
        {photo && (
          // <Image
          //   src={photo}
          //   width={0}
          //   height={0}
          //   priority
          //   alt={header}
          //   sizes="100vw"
          //   className={photoClass}
          // />

          // eslint-disable-next-line @next/next/no-img-element
          <img className={photoClass} alt={header} src={photo} />
        )}
      </motion.div>
    </div>
  );
}
