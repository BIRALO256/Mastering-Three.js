/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Include Preline's JS files to scan for classes
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Add Preline's plugin to Tailwind CSS
    require('preline/plugin'),
  ],
}
