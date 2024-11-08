/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      keyframes: {
        press: {
          "0%": { transform: "scale(1)", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
          "50%": { transform: "scale(0.95) translateY(2px)", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" },
          "100%": { transform: "scale(1)", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
        },
      },
      animation: {
        press: "press 200ms ease-in-out",
      },
    },
  },
  plugins: [],
}


