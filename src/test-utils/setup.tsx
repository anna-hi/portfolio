import "@testing-library/jest-dom";
import type React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ fill, priority, objectFit, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; objectFit?: string }) => <img {...props} />,
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, prefetch, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; prefetch?: boolean }) => <a href={href} {...props}>{children}</a>,
}));

const motionProps = new Set(["animate", "initial", "exit", "transition", "whileHover", "whileDrag", "drag", "dragConstraints", "dragElastic", "dragMomentum", "dragTransition"]);
const motionComponent = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const domProps = Object.fromEntries(Object.entries(props).filter(([key]) => !motionProps.has(key)));
  return <div {...domProps}>{children}</div>;
};
jest.mock("framer-motion", () => ({
  motion: new Proxy({}, { get: () => motionComponent }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useMotionValue: jest.fn(),
}));
jest.mock("motion/react", () => ({ motion: new Proxy({}, { get: () => motionComponent }) }));

jest.mock("next/font/google", () => {
  const font = () => ({ className: "font", variable: "font-variable" });
  return { Alegreya_Sans_SC: font, Lora: font, Pinyon_Script: font, Source_Sans_3: font };
});

jest.mock("@vercel/analytics/next", () => ({ Analytics: () => null }));
jest.mock("@vercel/speed-insights/next", () => ({ SpeedInsights: () => null }));
