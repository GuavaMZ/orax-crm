/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js,ttf,woff2,woff}","./**/*.html","./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans:['cairo-regular'],
    },
  },
  plugins: [],
}

