/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#93B1A6", // Soft mint green
          DEFAULT: "#5C8374", // Desaturated green
          dark: "#183D3D", // Deep teal
          darkest: "#040D12", // Almost black green
        },
      },
    },
  },
  plugins: [require("daisyui")],
});
