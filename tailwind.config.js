/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          text: '#712010',
          heading: '#95240F',
          sub: '#DE671E',
          btn: '#E3BC6F',
          btnHover: '#C9A04F',
          soft: '#FBF6EC',
          line: '#E8D5A8',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
