/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Inter Tight"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};