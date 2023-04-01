
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "heading-color":"#1A202C",
        "body-color": "#718096"
      },
      fontFamily: {
        Poppins : 'Poppins'        
      },
    },
  },
  plugins: [],
}