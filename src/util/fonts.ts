import {
  Alegreya_Sans_SC,
  Lora,
  Pontano_Sans,
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
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-lora",
});

export const PINYON_SCRIPT = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export const SOURCE_SANS_3 = Source_Sans_3({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-source-sans-3",
});
