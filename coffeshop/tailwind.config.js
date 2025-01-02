/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        serif:[ "Playfair Display", "serif"],
        company:["Festivo LC Basic" , "serif-serif"],
        
      },
      colors: {
        customGreen: "rgb(167, 193, 121)",
        customWhite: "rgb(232, 230, 227)",
        bgGreen:"#0E3528",
        bg2Green:"#5B7234",
        opacityBlack1:"rgb(0, 0, 0, 0.71)"
      },
      container: {
        center: true,
        padding: "0 10rem",
      },
      backgroundImage:{
        "hero-Backgroundİmage":"url(./src/assets/heroBg.webp)"
      }
    },
  },
  plugins: [],
};
