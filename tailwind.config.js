/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1C1917',
          800: '#2B2622',
          700: '#3A332D',
        },
        ember: {
          DEFAULT: '#E8590C',
          light: '#FF7A2E',
          dark: '#C2410C',
        },
        maiz: '#F5B700',
        brasa: '#B91C1C',
        cream: '#FAF6EE',
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
}
