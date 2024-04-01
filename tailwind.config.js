/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base: '#3238f2'
      },
      fontFamily: {
        primary: ['Urbanist', 'sans-serif'],
        special: ['Playfair Display', 'serif'],
        poppins: [' Poppins', 'sans-serif']
      },
      screens: {
        'sm': '640px',
  
        'md': '768px',
  
        'lg': '992px',
  
        'xl': '1024px',
  
        '2xl': '1280px',
      }
    },
  },
  plugins: [],
}