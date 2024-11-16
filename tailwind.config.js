/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'fotoBanner' : "url(./assets/fotoBanner.png)",
      }
    },
  },
  plugins: [],
}