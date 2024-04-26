import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <p>&copy; {new Date().getFullYear()} My Awesome Company</p>
    </div>
  );
};

export default Footer;
