/* THIS CONTROLS THE SITE THEME */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      colors: {
        primary: {
          100: '#ffffff',
          300: '#E2CCFF',
          500: '#A966FF',
          700: '#000000', /*list for sale button */
          900: '#430099',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-radix')(),
    require('@ramosdiego/reservoir')({
      buttons: {
        animate: true,
      },
    }),
  ],
}
