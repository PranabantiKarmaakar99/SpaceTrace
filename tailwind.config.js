/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Montserrat','Inter', 'sans-serif'], // Add Montserrat to sans family
        
        montserrat: ['Montserrat', 'sans-serif'], // Custom Montserrat family
        farsan: ['Farsan', 'serif'],
        inter:['Inter','sans-serif'] // Custom Farsan family
      },
    },
  },
  plugins: [],
}

