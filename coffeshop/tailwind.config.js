/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        serif:[ "Playfair Display", "serif"],
      },
      colors: {
        customGreen: "rgb(167, 193, 121)",
        customWhite: "rgb(232, 230, 227)",
      },
      container: {
        padding: "0 10rem",
      },
      backgroundImage:{
        "hero-Backgroundİmage":"url(./src/assets/heroBg.webp)"
      }
    },
  },
  plugins: [],
};
