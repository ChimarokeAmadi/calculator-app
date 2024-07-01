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
      },

      fontFamily: {
        'work': ["Work Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}

