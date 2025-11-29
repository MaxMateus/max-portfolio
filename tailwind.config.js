/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Segoe UI',
          'SF Pro Text',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      colors: {
        body: '#0f172a',
      },
    },
  },
  plugins: [],
}
