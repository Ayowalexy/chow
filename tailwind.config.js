const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['apps/waitlist/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#2C2C2C",
          200: "#000000"
        },
        chow: 'rgba(53, 53, 53, 1)',
        brand: {
          100: '#009F79',
          200: '#353542'
        },
        white: '#fff'
      },
      fontSize: {
        '10xl': '10rem'
      },
      rotate: {
        '09': '-90deg'
      },
      fontFamily: {
        'sans': ['Sofia Sans', 'sans-serif'],
        "pangram-bold": ['pangram-bold', 'sans-serif'],
        "pangram-medium": ['pangram-medium', 'sans-serif'],
        "pangram-regular": ['pangram-regular', 'sans-serif'],
        "pangram-light": ['pangram-light', 'sans-serif'],
        'courgette': ['courgette-regular', 'san-serif']
      },
      fontWeight: {
        "semi-bold": "600",
        "semi": "500",
        black: "700",
        light: "200",
        regular: "400"
      }
    },
  },
  plugins: [],
};
