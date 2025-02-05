"use client";

import { useRef } from "react";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";

export default function MainSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <main className="flex flex-col min-h-lvh" ref={containerRef}>
      <NavBar />
      <div className="flex-grow">{children}</div>
      <Footer containerRef={containerRef} />
      <ScrollToTop />
    </main>
  );
}
