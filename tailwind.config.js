/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        tealTheme: {
          deep: '#388087',
          medium: '#6FB3B8',
          ice: '#BADFE7',
          mint: '#C2EDCE',
          bg: '#F6F6F2',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
