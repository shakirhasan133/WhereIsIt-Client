/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: { primary: ['"Merriweather Sans"', "sans-serif"] },
      colors: {
        primary: {
          light: "#B8E3EA", // Soft Aqua
          DEFAULT: "#42C0B9", // Vibrant Teal
          dark: "#205A67", // Deep Aqua Blue
          darkest: "#0E2A31", // Midnight Teal
        },
        secondary: {
          light: "#FFC9A9", // Soft Coral Peach
          DEFAULT: "#FF7E5F", // Sunset Coral
          dark: "#D15037", // Burnt Orange
        },
        background: {
          light: "#F7FAFC", // Subtle Off-White
          dark: "#1E293B", // Neutral Navy
        },
        text: {
          light: "#606F7B", // Soft Slate
          dark: "#1B1F23", // Rich Black
        },
        accent: {
          light: "#FDE8E9", // Blush Pink
          DEFAULT: "#E63946", // Bright Red
          dark: "#940C24", // Dark Crimson
        },
      },
    },
  },
  plugins: [require("daisyui")],
});
