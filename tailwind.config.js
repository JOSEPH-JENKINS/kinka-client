/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      modal: "35px 0 0 0 rgba(0, 0, 0, 1)",
    },
  },
  plugins: [],
};
