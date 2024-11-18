/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'dark-blue' : '#000814',
      'white' : '#fff',
      'yellow' : "#fec238",
      'black': '#000',
      'gray': '#dee2e6',
      'dark-gray': '#adb5bd'
    }
  },
  plugins: [],
}