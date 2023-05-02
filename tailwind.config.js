/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#FF6060",
        lightGray: "#F6F6F6",
      },
      backgroundImage: {
        header: 'url("/src/assets/test.png")',
      },
    },
  },
  plugins: [],
};
