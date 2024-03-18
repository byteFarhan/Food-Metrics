/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#878787",
        dark: "#150B2B",
        title: "#282828",
      },
      fontFamily: {
        lexend: "font-family: 'Lexend', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
