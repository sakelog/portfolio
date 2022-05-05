module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: 'var(--theme-color)',
          dark: 'var(--theme-color-dark)',
        },
        gray: {
          DEFAULT: 'var(--gray-color)',
          light: 'var(--gray-color-light)',
          dark: 'var(--gray-color-dark)',
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
