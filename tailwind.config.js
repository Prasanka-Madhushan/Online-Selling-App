/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#ff4500",
      },
    },
  },
  plugins: [],
};
