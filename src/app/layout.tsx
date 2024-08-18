import "./globals.css";

import type { Metadata } from "next";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

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
    <html lang="en" className="h-full">
      <body className="h-full">
        <main className="flex flex-col h-full">
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
