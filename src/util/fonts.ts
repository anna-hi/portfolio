import {
  Alegreya_Sans_SC,
  Lora,
  Pontano_Sans,
  Pinyon_Script,
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


export const PONTANO_SANS = Pontano_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pontano-sans",
});

export const PINYON_SCRIPT = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});
