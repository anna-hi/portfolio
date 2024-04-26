import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          {/* can replace this with a link to hosted resume too */}
          <a href="/resume">Résumé</a>
        </li>
        <li>
          <a href="/fun">Fun</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
