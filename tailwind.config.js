module.exports = {
  mode: 'jit',
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xss: '.6rem',
      },
      spacing: {
        45: '11.25rem',
        54: '13.5rem',
      },
      colors: {
        primary: '#202226',
        secondary: '#E1E1E6',
        tertiary: '#3E3E40',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
