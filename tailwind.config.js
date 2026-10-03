/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          forest: '#1B3624',
          'forest-dark': '#12261A',
          'forest-deep': '#0E1F14',
          'forest-light': '#274B34',
          'forest-muted': '#33583E',
          caramel: '#C87A3E',
          'caramel-hover': '#B7692F',
          'caramel-light': '#E89F67',
          'caramel-soft': '#FDF5EE',
          gold: '#D48D55',
          cream: '#F4F0E8',
          'cream-50': '#FAF7F2',
          'cream-100': '#F5F1EA',
          'cream-200': '#ECE5DA',
          'cream-300': '#DFD6C7',
          espresso: '#221814',
          roast: '#3A271E',
          mocha: '#5C4234',
          latte: '#8F7868',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'cozy': '0 12px 30px -8px rgba(34, 24, 20, 0.08)',
        'cozy-lg': '0 20px 45px -12px rgba(34, 24, 20, 0.12)',
        'caramel-glow': '0 8px 25px -4px rgba(200, 122, 62, 0.35)',
        'forest-glow': '0 8px 30px -6px rgba(27, 54, 36, 0.45)',
      }
    },
  },
  plugins: [],
}
