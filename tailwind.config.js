/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  darkMode: ['selector', '[data-mode="dark"]'],

  theme: {
    extend: {
      colors: {
        'text': '#FFFFFF',
        'btn': '#2e2f38',
        'light-grey': '#4e505f',
        'blue-color': '#4b5efc',
        'background': '#17171c',
        'text2': '#000000',
        'btn2': '#FFFFFF',
        'light-grey2': '#D2D3DA',
        'background2': '#F1F2F3'
      },

      fontFamily: {
        'work': ["Work Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}

