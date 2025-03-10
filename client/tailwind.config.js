/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        default: {
          light: '#F5F5F5',
          dark: '#0A0A0A',
        },
        primary: {
          DEFAULT: '#ea0909',
          light: '#f03939',
          dark: '#800000',
        },
        secondary: {
          DEFAULT: '#9333EA',
          light: '#C084FC',
          dark: '#7E22CE',
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
}
