/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "535px",
      },
      colors: {
        primary: "#1B2223",
        greyColor: "#3A4F50",
        greenColor: "#0EF6CC",
        whiteColor: "#F4FEFD",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
