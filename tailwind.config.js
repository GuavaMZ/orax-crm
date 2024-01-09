/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/**/*.{html,js,ttf}","./**/*.html","./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins:['Poppins'],
      // cairoBold:['Cairo-Regular']
      cairo:['Cairo']
    },
  },
  plugins: [],
}

