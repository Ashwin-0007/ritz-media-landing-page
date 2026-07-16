/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-header': '#0d1334',
        'navy-dark': '#0e1125',
        'quote-red': '#631c09',
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(180deg, #eda021 0%, #875b13 100%)',
      },
      maxWidth: {
        design: '1440px',
      },
    },
  },
  plugins: [],
}
