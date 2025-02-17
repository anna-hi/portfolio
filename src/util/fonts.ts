import {
  Alegreya_Sans_SC,
  Lora,
  Pinyon_Script,
  Source_Sans_3,
} from "next/font/google";

export const ALEGREYA_SANS = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alegreya-sans",
});

export const LORA = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-lora",
});

export const PINYON_SCRIPT = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export const SOURCE_SANS_3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans-3",
});
