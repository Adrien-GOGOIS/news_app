/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        news: {
          "orange": "rgba(209, 101, 62, 1)",
          "white": "rgba(242, 237, 229, 1)"
        }
      }
    },
  },
  plugins: [],
}
