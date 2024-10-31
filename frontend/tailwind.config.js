/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#violet-200',
        'secondary': '#purpe-100',
        'blackBG': '#F3F3F3',
        'Favorite': '#violet-50'

      }
    },
  },
  plugins: [],
}

