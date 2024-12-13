/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        onest: ["Onest", "sans-serif"],
        coustard : ["Coustard", "sans-serif"],
      },
      backgroundImage:{
        'light' : "url('/assets/BackBG.png')",
        'dark-image-bg' : "url('/assets/Rectangle.png')"
      }
    },
    colors:{
      'dark-blue' : '#000814',
      'white' : '#fff',
      'yellow' : "#fec238",
      'black': '#000',
      'gray': '#e5e1dd',
      'dark-gray': '#adb5bd',
      'l-beige': "#FCF8EE",
      'white-dark': "#faf6f1",
    }
  },
  plugins: [],
}