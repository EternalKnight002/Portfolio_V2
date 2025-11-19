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
        sans: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'], // Added Serif
      },
      colors: {
        background: '#0f1319', // The dark background from image
        accent: '#b7594f',     // The reddish-brown accent color
        panel: '#1a1f26',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}