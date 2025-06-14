"use client";

import React from "react";

import { motion } from "framer-motion";

import FlowerIcon, {
  FLOWER_SIZES,
  flowerColor,
} from "@/components/flower-icon/flower-icon";

interface ActivityElementProps {
  header: string;
  subtext: string;
  color: flowerColor;
}

const ActivityElement: React.FC<ActivityElementProps> = ({
  header,
  subtext,
  color,
}) => {
  return (
    <div className="flex flex-nowrap min-w-80 max-w-lg">
      <motion.div
        className="mx-4 mt-1"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 0, 360],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 1,
        }}
      >
        <FlowerIcon size={FLOWER_SIZES.MEDIUM} color={color} />
      </motion.div>
      <div>
        <h3 className="italic mb-2 font-normal text-[#EEE]">{header}</h3>
        <div className="text-caption text-gray-light mt-2">{subtext}</div>
      </div>
    </div>
  );
};

export default ActivityElement;
