/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000",
      gray: "#303030",
      white: "#FFFFFF",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
