/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        jons: ["Jons", "san-serif"],
        nanum: ["Nanum Myeongjo", "serif"]
      },
      backgroundImage: {
        'hero': '../assets/bg-im.svg'
      }
    },
  },
  plugins: [],
}

