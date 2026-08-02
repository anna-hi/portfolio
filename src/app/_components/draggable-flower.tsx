"use client";

import React from "react";

import { motion, useMotionValue } from "framer-motion";

import FlowerIcon, {
  FLOWER_COLORS,
  FLOWER_SIZES,
} from "../../components/flower-icon/flower-icon";
import styles from "../../components/footer/style.module.css";

type DraggableFlowerProps = {
  containerRef: React.RefObject<HTMLElement | null>;
};

const DraggableFlower: React.FC<DraggableFlowerProps> = ({ containerRef }) => {
  const [hasInitialClick, setHasInitialClick] = React.useState(false);

  return (
    <div className={styles.flowerAnchor}>
      <motion.div
        className={`${styles.flowerDrag} cursor-grab active:cursor-grabbing`}
        drag
        whileDrag={{ scale: 1.1 }}
        dragConstraints={hasInitialClick ? containerRef : undefined}
        dragElastic={0}
        dragMomentum={true}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        onPointerDown={() => setHasInitialClick(true)}
      >
        <FlowerIcon color={FLOWER_COLORS.PINK} size={FLOWER_SIZES.MEDIUM} />
      </motion.div>
    </div>
  );
};

export default DraggableFlower;
