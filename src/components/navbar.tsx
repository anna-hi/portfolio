"use client";

import React from "react";

import { usePathname, useRouter } from "next/navigation";

import FlowerIcon, { FLOWER_COLORS, FLOWER_SIZES } from "./flower-icon";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const navigateToHome = () => {
    navigateTo("/");
  };

  const navigateToAbout = () => {
    navigateTo("/about");
  };

  const navigateToResume = () => {
    // can replace this with a link to hosted resume too
    navigateTo("/resume");
  };

  const navigateToFun = () => {
    navigateTo("/fun");
  };

  const setActive = (predicate: boolean): string => {
    return predicate ? "active" : "";
  };

  return (
    <>
      <nav className="navbar flex bg-transparent">
        <button type="button" onClick={navigateToHome}>
          <FlowerIcon size={FLOWER_SIZES.LARGE} color={FLOWER_COLORS.PINK} />
        </button>

        <div className="flex-grow px-2"></div>

        <button
          type="button"
          className={`navbar-button ${setActive(
            pathname.includes("projects") || pathname === "/"
          )}`}
          onClick={navigateToHome}
        >
          Work
        </button>
        <button
          type="button"
          className={`navbar-button ${setActive(pathname === "/fun")}`}
          onClick={navigateToFun}
        >
          Fun
        </button>
        <button
          type="button"
          className={`navbar-button ${setActive(pathname === "/about")}`}
          onClick={navigateToAbout}
        >
          About
        </button>
        <button
          type="button"
          className={`navbar-button ${setActive(pathname === "/resume")}`}
          onClick={navigateToResume}
        >
          Resume
        </button>
      </nav>
    </>
  );
};

export default NavBar;
