/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode :'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Poppins', 'sans-serif']
      },
      colors: {
        'white-90': 'hsl(0, 0%, 100%)',
        'dark-bg-body': '#212F3D',
        'dark-over': ' #2C3E50',
        'dark-title': '#FFFFFF',
        'dark-des': '#BDC3C7',
        'dark-btn': ' #4CAF50',
        'dark-star': '#FFD700',
        
      }
    },
  },
  plugins: [],
}

