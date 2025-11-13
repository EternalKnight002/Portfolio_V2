/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(167,139,250)', // soft purple
        },
        bg: {
          DEFAULT: 'rgb(15 15 15)', // dark canvas
        }
      }
    }
  },
  plugins: []
}
