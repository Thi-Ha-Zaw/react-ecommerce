/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Poppins', 'sans-serif']
      },
      colors: {
        'white-90' : 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

