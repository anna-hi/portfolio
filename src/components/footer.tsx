import React from "react";
import FlowerIcon, { FLOWER_COLORS, FLOWER_SIZES } from "./flower-icon";

const email = "annaji@andrew.cmu.edu";
const linkedin = "https://www.linkedin.com/in/anna-ji/";

const Footer: React.FC = () => {
  return (
    <div className="footer-container bg-white text-black">
      {/* <p>&copy; {new Date().getFullYear()} Anna banananananananan Corp</p> */}
      <div className="flex flex-nowrap mb-3">
        <div className="me-2">Made with</div>{" "}
        <FlowerIcon color={FLOWER_COLORS.PINK} size={FLOWER_SIZES.SMALL} />
      </div>
      <div className="mb-2 underline hover:text-blue-500">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <a href={linkedin}>LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;
