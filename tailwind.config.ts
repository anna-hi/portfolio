import type { Config } from "tailwindcss";

const NEGOTIUM_COLORS = {
  primary: "#C1D374",
};

const FAT_PROJECT_COLORS = {
  background: "#FFFBFB",
  primary: "#DB4D4D",
};

const MINDFUL_COLORS = {
  primary: "#5963B1",
  secondary: "#ED6745",
  background: {
    DEFAULT: "#FFFEFE",
    secondary: "#F2F6FF",
  },
};

const PENELLA_COLORS = {
  primary: "#673D1F",
  orange: "#F35916",
  background: {
    DEFAULT: "#FEFBF6",
    banner: "#FFE2E2",
    secondary: "#FDF4F4",
  },
};

const config: Config = {
  important: true,
  content: [
    "./src/app/**/*.{tsx, ts, jsx, js}",
    "./src/components/**/*.{tsx, ts, jsx, js}",
  ],
  theme: {
    extend: {
      colors: {
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
          dark: {
            DEFAULT: "#25201A",
            secondary: "#2D2823",
          },
        },
        negotium: NEGOTIUM_COLORS,
        fatProject: FAT_PROJECT_COLORS,
        mindful: MINDFUL_COLORS,
        penella: PENELLA_COLORS,
      },
      fontSize: {
        // 'name': ['size', 'line-height'],
        "6xl": "4.6875rem",
        "5xl": "3.125rem",
        "4xl": ["2.5rem", { lineHeight: "normal", fontWeight: "500" }],
        "3xl": ["1.75rem", { lineHeight: "normal", fontWeight: "600" }],
        "2xl": ["1.5rem", { lineHeight: "normal", fontWeight: "600" }],
        base: "1.25rem",
        caption: "1rem",
      },
      spacing: {
        together: "3.5rem",
        separate: "5.5rem",
        text: "22%",
        photo: "16%",
      },
      // TODO: Add custom font families
      // fontFamily: {},
      screens: {
        home: "1200px",
      },
    },
  },
};

export { NEGOTIUM_COLORS, FAT_PROJECT_COLORS, MINDFUL_COLORS, PENELLA_COLORS };

export default config;
