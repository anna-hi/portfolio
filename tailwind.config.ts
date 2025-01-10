import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const fontSizes = require("tailwindcss/defaultTheme").fontSize;

const FAT_PROJECT_COLORS = {
  background: "#FFFBFB",
  primary: "#DB4D4D",
};

const config: Config = {
  important: true,
  content: [
    "./src/app/**/*.{tsx, ts, jsx, js}",
    "./src/components/**/*.{tsx, ts, jsx, js}",
  ],
  theme: {
    colors: {
      ...colors,
      pink: {
        light: "#e7c8bf",
        DEFAULT: "#FF81A0",
      },
      orange: "#F7BEA9",
      gray: {
        light: "#c7c7c7",
        DEFAULT: "#8492a6",
        dark: "#5D5C5C",
      },
      white: "#FBF8EC",
      whiteWhite: "#FFFFFF",
      background: {
        dark: "#25201a",
      },
      iteration: {
        primary: "#25201A",
        secondary: "#2A2A2A",
      },
      fatProject: FAT_PROJECT_COLORS,
    },
    fontSize: {
      // 'name': ['size', 'line-height'],
      // anna says there is
      ...fontSizes,
      "6xl": "4.6875rem",
      "5xl": "3.125rem",
      "4xl": "2.5rem",
      "3xl": "1.75rem",
      "2xl": [
        "1.5rem",
        {
          lineHeight: "1.875rem",
          fontWeight: "600",
        },
      ],
      base: "1.25rem",
      caption: "1rem",
    },
    extend: {
      spacing: {
        together: "3.5rem",
        separate: "5.5rem",
        text: "22%",
        photo: "16%",
      },
      // TODO: Add custom font families
      // fontFamily: {},
    },
  },
};

export { FAT_PROJECT_COLORS };

export default config;
