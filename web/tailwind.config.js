module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        gruppo: ['Gruppo', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['valentine'],
  },
}
