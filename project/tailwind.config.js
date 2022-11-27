/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: {
          400: '#5ed5a8',
        },
        Gray: {
          100: '#F1F4F6',
        },
        Black: {
          400: '#1B232A',
        },
        Red: {
          400: '#DD4B4B',
        },
      },
    },
  },
  plugins: [],
}
