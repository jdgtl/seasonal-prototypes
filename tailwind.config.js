/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        seasonal: {
          cream: '#f8f7f4',
          warm: '#fafaf9',
          dark: '#1c1917',
        },
      },
    },
  },
  plugins: [],
}
