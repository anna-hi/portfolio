import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";

import { LORA, SOURCE_SANS_3, ALEGREYA_SANS } from "@/util/fonts";

import MainSection from "./main";

export const metadata: Metadata = {
  title: "Anna Ji",
  description: "Anna Ji's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${LORA.variable} ${SOURCE_SANS_3.variable} ${ALEGREYA_SANS.variable}`}
    >
      <body>
        <MainSection>{children}</MainSection>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
