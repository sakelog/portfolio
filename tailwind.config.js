module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: '#3675a9',
          light: '#cce8ff',
        },
      },
      fontFamily: {
        sans: [
          'Roboto',
          '"Noto Sans JP"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          '"ヒラギノ角ゴ ProN W3"',
          'Arial',
          'メイリオ',
          'Meiryo',
          'sans-serif',
        ],
        logo: ['Comfortaa', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
