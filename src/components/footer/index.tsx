"use client";

import React from "react";

import DraggableFlower from "@/app/_components/draggable-flower";

import styles from "./style.module.css";

const email = "annaji@andrew.cmu.edu";
const linkedin = "https://www.linkedin.com/in/anna-ji/";
const github = "https://github.com/anna-hi";

type FooterProps = {
  containerRef: React.RefObject<HTMLElement | null>;
};

const Footer: React.FC<FooterProps> = ({ containerRef }) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGrid}>
        <div className={styles.flowerGroup}>
          <div className={styles.flowerText}>
            Wow! You&apos;ve made it to the bottom.
            <br />
            Here&apos;s a flower for your troubles :&#41;
          </div>
          <DraggableFlower containerRef={containerRef} />
        </div>
        <div className={styles.copyright}>&copy; Anna Ji</div>
        <div className={styles.linkGroup}>
          <a href={`mailto:${email}`} target="_blank" className={styles.links}>
            Email
          </a>
          <a href={linkedin} target="_blank" className={styles.links}>
            Linkedin
          </a>
          <a href={github} target="_blank" className={styles.links}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
