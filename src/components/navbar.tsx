"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

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
      <nav className="flex p-2 bg-blue-200">
        <button type="button" onClick={navigateToHome}>
          Home
        </button>
        <button
          type="button"
          className={setActive(
            pathname.includes("projects") || pathname === "/"
          )}
          onClick={navigateToHome}
        >
          Work
        </button>
        <button
          type="button"
          className={setActive(pathname === "/about")}
          onClick={navigateToAbout}
        >
          About
        </button>
        <button
          type="button"
          className={setActive(pathname === "/resume")}
          onClick={navigateToResume}
        >
          Résumé
        </button>
        <div className="flex-grow px-2"></div>
        <button
          type="button"
          className={setActive(pathname === "/fun")}
          onClick={navigateToFun}
        >
          Fun
        </button>
      </nav>
    </>
  );
};

export default NavBar;
