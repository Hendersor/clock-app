/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#000000",
      gray: "#303030",
      white: "#FFFFFF",
      data: "#ecf0f1",
      bg: "rgba(49, 53, 50, 0.36)",
      test: "#234509",
    },
    screens: {
      sm: "640px",
      md: "768px",
      mymd: "962px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        dayMobile:
          "url('https://res.cloudinary.com/dwdz4mn27/image/upload/v1660698705/clock-app/starter-code/assets/mobile/bg-image-daytime_e4i4o3.jpg')",
        dayTablet:
          "url('https://res.cloudinary.com/dwdz4mn27/image/upload/v1660698706/clock-app/starter-code/assets/tablet/bg-image-daytime_q13f3y.jpg')",
      },
    },
  },
  plugins: [],
};
