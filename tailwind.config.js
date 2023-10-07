/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "'Raleway', sans-serif", // Adds a new `font-Raleway` class
      }
    },
  },
    plugins: [require("daisyui")],
}

