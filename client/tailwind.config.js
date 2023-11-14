/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'side1': '#823789',
      'side2': '#422245',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
