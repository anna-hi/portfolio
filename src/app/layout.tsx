import "./globals.css";

import type { Metadata } from "next";
import { LORA, PONTANO_SANS } from "@/util/fonts";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Anna's Portfolio",
  description: "I'm stinky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${LORA.variable} ${PONTANO_SANS.variable}`}
    >
      <body className="h-full">
        <main className="flex flex-col h-full">
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
