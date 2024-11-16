import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/app/**/*.{tsx, ts, jsx, js}",
    "./src/components/**/*.{tsx, ts, jsx, js}",
  ],
  theme: {
    colors: {
      ...colors,
      // blue: "#1fb6ff",
      // purple: "#7e5bef",
      pink: {
        light: "#e7c8bf",
        DEFAULT: "#FF81A0",
      },
      orange: "#F7BEA9",
      // green: "#13ce66",
      // yellow: "#ffc82c",
      gray: {
        light: "#c7c7c7",
        DEFAULT: "#8492a6",
        dark: "#273444",
      },
    },
  },
};
export default config;
