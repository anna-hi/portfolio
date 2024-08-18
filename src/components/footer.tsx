import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="animate-pulse flex space-x-4 bg-slate-500 p-4">
      <p>&copy; {new Date().getFullYear()} My Awesome Company</p>
    </div>
  );
};

export default Footer;
