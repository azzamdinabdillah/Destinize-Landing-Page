/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#4475F2"
      },
      fontFamily: {
        'manrope': "Manrope, sans-serif"
      }
    },
  },
  plugins: [],
}
