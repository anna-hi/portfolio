import React from "react";

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
    <div className="flex flex-nowrap w-80">
      <div className="mx-4 mt-1">
        <FlowerIcon size={FLOWER_SIZES.MEDIUM} color={color} />
      </div>
      <div>
        <h3 className="italic mb-2">{header}</h3>
        <div className="text-caption text-gray-light mt-2">{subtext}</div>
      </div>
    </div>
  );
};

export default ActivityElement;
