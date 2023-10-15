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
        'hero-pattern': "url('https://res.cloudinary.com/dubztfhgv/image/upload/v1697405826/hero_ji8vd9.jpg')",
      }
    },
  },
  plugins: [],
}

