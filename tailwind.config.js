/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ss: "250px",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
        "brand-blue-2": "#4285f4",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        gray: "0 1px 3px 0 rgba(60,64,67,0.3)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
