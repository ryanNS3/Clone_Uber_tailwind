/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'fotoBanner' : 'url(./assets/fotoBanner.png)',
        'fotoCidade' : 'url(assets/fotoCidade.png)',
        
      },
      screens: {
        'Notebook': '1100px',
      }

    },
  },
  plugins: [],
}

