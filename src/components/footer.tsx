import React from "react";
import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "./flower-icon/flower-icon";

import styles from "./style.module.css";

const email = "annaji@andrew.cmu.edu";
const linkedin = "https://www.linkedin.com/in/anna-ji/";
const github = "https://github.com/anna-hi";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className="flex items-center justify-between relative text-caption">
        <div className="flex items-center gap-2 w-[33%] shrink-0">
          <div>
            Wow! You&apos;ve made it to the bottom. Here&apos;s a flower for
            your troubles :&#41;
          </div>
          <div>
            <FlowerIcon color={FLOWER_COLORS.PINK} size={FLOWER_SIZES.MEDIUM} />
          </div>
        </div>
        <div className="mx-auto text-nowrap text-center">&copy; Anna Ji</div>
        <div className="w-[33%] text-end">ALL MY LINKS</div>
      </div>
    </footer>
  );
};

export default Footer;
