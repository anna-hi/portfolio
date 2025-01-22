import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";

import { LORA, SOURCE_SANS_3, ALEGREYA_SANS } from "@/util/fonts";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

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
      className={`h-full ${LORA.variable} ${SOURCE_SANS_3.variable} ${ALEGREYA_SANS.variable}`}
    >
      <body className="h-full">
        <main className="flex flex-col h-full">
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
          <ScrollToTop />
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
