/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true, // Optional: Centers the container by adding `margin: auto`
      padding: '1rem', // Optional: Adds padding to the container
      screens: {
        'sm': '620',   // Full width on small screens
        'md': '640px',  // Custom width for medium screens
        'lg': '768px',  // Custom width for large screens
        'xl': '1024px', // Custom width for extra-large screens
        '2xl': '1280px' // Custom width for ultra-wide screens
      },
    },
    extend: {
      colors: {
        mcolor: "#2C3E50",
        scolor: "#1ABC9C"
      }
    },
  },
  plugins: [],
}

