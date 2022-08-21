const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '0.625rem',
        sm: '0.75rem',
        base: '0.875rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      lineHeight: {
        normal: 1.45,
      },
      colors: {
        primary: '#527fb8',
        'primary-dark': '#3b5ea7',
        secondary: '#5391b0',
        'light-grey': '#efefef',
        'lightest-blue': '#b7c3db',
        'darkest-blue': '#192744',
      },
    },
  },
  plugins: [],
};
