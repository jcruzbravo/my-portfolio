/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {
        'max': '640px',
      },
      'md': {
        'max': '768px',
      },
      'lg': {
        'max': '1024px',
      },
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/hero.jpg')",
      }
    },
  },
  plugins: [],
}

