import React from "react";

export type flowerColor = {
  petal: string;
  center: string;
};

export const FLOWER_COLORS = {
  PINK: { petal: "#EA7693", center: "#FBF8EC" },
  BLUE: { petal: "#57AAE0", center: "#FBF8EC" },
  PURPLE: { petal: "#AC6994", center: "#FBF8EC" },
  FAT_RED: { petal: "#F15350", center: "#FBF8EC" },
  MINDFUL_PURPLE: { petal: "#5963B1", center: "#FBF8EC" },
  PENELLA_WHITE: { petal: "#FFE9E9", center: "#C3653B" },
};

type flowerSize = {
  x: number;
  y: number;
};

export const FLOWER_SIZES = {
  SMALL: { x: 20, y: 19 },
  MEDIUM: { x: 35, y: 33 },
  LARGE: { x: 46, y: 43 },
};

interface FlowerIconProps {
  color?: flowerColor;
  size?: flowerSize;
}

const FlowerIcon: React.FC<FlowerIconProps> = ({
  color = FLOWER_COLORS.BLUE,
  size = FLOWER_SIZES.MEDIUM,
}) => {
  return (
    <svg
      width={size.x}
      height={size.y}
      viewBox="0 0 51 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.8803 17.3801C46.8008 23.1417 35.549 28.2665 35.549 28.2665C35.549 28.2665 37.9595 32.699 37.1042 35.265C36.2489 37.831 33.3587 39.6101 30.1059 39.153C26.9092 38.7038 25.4401 32.9322 25.4401 32.9322C25.4401 32.9322 25.5514 41.9389 19.9969 42.2634C17.6 42.4035 15.3313 40.7082 13.7761 39.153C11.0268 36.4038 11.4434 32.1546 11.4434 32.1546C11.4434 32.1546 6 29.8217 6 25.9337C6 20.7623 16.1089 17.38 16.1089 17.38C16.1089 17.38 14.9941 10.6021 17.6641 8.04875C20.1178 5.70217 22.9266 5.65937 26.2177 6.49354C30.5938 7.60271 33.9938 15.0472 33.9938 15.0472C33.9938 15.0472 43.325 12.7145 44.8803 17.3801Z"
        fill={color.petal}
        stroke={color.petal}
        strokeWidth="11.2164"
        strokeLinecap="round"
      />
      <circle cx="23.5" cy="24.5" r="3.5" fill={color.center} />
    </svg>
  );
};

export default FlowerIcon;
