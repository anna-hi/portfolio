import React from "react";
import Image from "next/image";

// styles
import styles from "./style.module.css";
import { ALEGREYA_SANS } from "@/util/fonts";

type projectHeader = {
  header: string;
  tags?: string[];
  photo?: string;
};

export default function ProjectHeader({ header, tags, photo }: projectHeader) {
  const tagsText = tags && tags.join(" · ");
  return (
    <div className={styles.projectHeaderContainer}>
      <div className={styles.projectHeaderText}>
        <h1>{header}</h1>
        <div className={ALEGREYA_SANS.className}>{tagsText}</div>
      </div>
      {photo && (
        <Image
          src={photo}
          width={0}
          height={0}
          alt={header}
          sizes="100vw"
          className={styles.projectHeaderImage}
        />
      )}
    </div>
  );
}
