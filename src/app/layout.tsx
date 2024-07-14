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
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
