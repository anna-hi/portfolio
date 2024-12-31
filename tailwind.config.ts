import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const fontSizes = require("tailwindcss/defaultTheme").fontSize;

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
      white: "#FBF8EC",
      background: {
        dark: "#25201a",
      },
    },
    fontSize: {
      // 'name': ['size', 'line-height'],
      ...fontSizes,
      "5xl": "3.125rem",
      "4xl": "2.5rem",
      "2xl": [
        "1.375rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "500",
        },
      ],
    },
  },
};
export default config;
