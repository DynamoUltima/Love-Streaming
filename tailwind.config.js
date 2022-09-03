// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        mattblack:'#202020',
        grayblack:'#242424',
        blacklist:'#1d1d1d'
      },
    },
  },
  plugins: [],
}
