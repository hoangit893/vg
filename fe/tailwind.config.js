/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-brown": "#817161",
        "brown": "#2F230A",
        "light-yellow": "#FDF9DD",
      },

      gridTemplateRows: {
        "twoone": "2fr 1fr",
      }
    },
  },
  plugins: [],
}