"use client";

import { motion } from "motion/react";

import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "./flower-icon/flower-icon";

import styles from "./style.module.css";
import Link from "next/link";

const NavBar: React.FC = () => {
  const resumeURL =
    "https://drive.google.com/file/d/1VlE1NctNL2japj9nKU_DiXkNXPS3uCHG/view?usp=sharing";

  const buttons = [
    { label: "Work", link: "/" },
    // { label: "Fun", link: "/fun" },
    { label: "About", link: "/about" },
  ];

  return (
    <nav className={styles.navbar}>
      <Link className="md:mr-32" type="button" href="/">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.7, 0.2, 1],
          }}
        >
          <FlowerIcon size={FLOWER_SIZES.LARGE} color={FLOWER_COLORS.PINK} />
        </motion.div>
      </Link>

      <div className="flex-grow px-2"></div>

      <div className="flex gap-8 md:gap-12">
        {buttons.map(({ label, link }) => (
          <Link
            type="button"
            href={link}
            key={label}
            className={styles.navbarButton}
          >
            {label}
          </Link>
        ))}
        <a
          type="button"
          href={resumeURL}
          target="_blank"
          className={styles.navbarButton}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
