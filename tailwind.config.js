/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1024px'},
      'lg': {'min': '1025px'}
    },
    fontFamily: {
      title: ["Bodoni Moda"],
      main: ["Playfair Display"],
    },
    extend: {},
  },
  plugins: [],
};
