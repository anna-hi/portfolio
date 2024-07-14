"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="flex p-2">
      <div className="flex-none px-2">
        <Link href="/" className="">
          Home
        </Link>
      </div>
      <div className="flex-none px-2">
        <Link href="/" className={`$(pathname === '/' ? 'active' : '')`}>
          Work
        </Link>
      </div>
      <div className="flex-none px-2">
        <Link href="/about">About</Link>
      </div>
      <div className="flex-none px-2">
        {/* can replace this with a link to hosted resume too */}
        <Link href="/resume">Résumé</Link>
      </div>
      <div className="flex-grow px-2"></div>
      <div className="flex-none px-2">
        <Link href="/fun">Fun</Link>
      </div>
    </nav>
  );
};

export default NavBar;
