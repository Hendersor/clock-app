/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000",
      gray: "#303030",
      white: "#FFFFFF",
      bg: "rgba(49, 53, 50, 0.36)",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      time: "4rem",
    },
    extend: {
      backgroundImage: {
        dayMobile:
          "url('https://res.cloudinary.com/dwdz4mn27/image/upload/v1660698705/clock-app/starter-code/assets/mobile/bg-image-daytime_e4i4o3.jpg')",
      },
    },
  },
  plugins: [],
};
