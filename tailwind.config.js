/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index/html', './src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {}
  },
  plugins: [['prettier-plugin-tailwindcss'], require('autoprefixer')]
}
