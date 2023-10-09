/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "'Playfair Display', serif", // Adds a new `font-Raleway` class
      }
    },
  },
  plugins: [
    require("daisyui"),
     require('preline/plugin'),
  ],
}

