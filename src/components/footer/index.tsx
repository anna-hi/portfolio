"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "../flower-icon/flower-icon";

import styles from "./style.module.css";

const email = "annaji@andrew.cmu.edu";
const linkedin = "https://www.linkedin.com/in/anna-ji/";
const github = "https://github.com/anna-hi";

type FooterProps = {
  containerRef: React.RefObject<HTMLElement | null>;
};

const Footer: React.FC<FooterProps> = ({ containerRef }) => {
  const pathname = usePathname();

  return (
    <footer className={styles.footerContainer}>
      <div className="flex items-center justify-between relative text-caption">
        <div className="flex items-center gap-2 w-[33%] shrink-0">
          <div className="text-nowrap">
            Wow! You&apos;ve made it to the bottom.
            <br />
            Here&apos;s a flower for your troubles :&#41;
          </div>
          <motion.div
            className="cursor-grab active:cursor-grabbing"
            drag
            whileDrag={{ scale: 1.1 }}
            dragConstraints={containerRef}
            dragElastic={0}
            key={pathname}
          >
            <FlowerIcon color={FLOWER_COLORS.PINK} size={FLOWER_SIZES.MEDIUM} />
          </motion.div>
        </div>
        <div className="mx-auto text-nowrap text-center">&copy; Anna Ji</div>
        <div className="w-[33%]">
          <div className="float-end flex gap-8 items-center">
            <a
              href={`mailto:${email}`}
              target="_blank"
              className={styles.links}
            >
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
      </div>
    </footer>
  );
};

export default Footer;
