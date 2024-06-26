"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="flex">
      <div className="flex-none">
        <Link href="/" className="">
          Home
        </Link>
      </div>
      <div className="flex-grow">padding</div>
      <div className="flex-none">
        <Link href="/" className={`$(pathname === '/' ? 'active' : '')`}>
          Work
        </Link>
      </div>
      <div className="flex-none">
        <Link href="/about">About</Link>
      </div>
      <div className="flex-none">
        {/* can replace this with a link to hosted resume too */}
        <Link href="/resume">Résumé</Link>
      </div>
      <div className="flex-none">
        <Link href="/fun">Fun</Link>
      </div>
    </nav>
  );
};

export default NavBar;
