/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js,ttf}","./**/*.html","./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      cairo:['Cairo-Bold'],
      cairoBold:['Cairo-Regular']
    },
  },
  plugins: [],
}

