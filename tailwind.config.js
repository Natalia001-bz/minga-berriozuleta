/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: { orange: '#F97316',}
        
      },
  },
  
  variants: {},
  plugins: []
}
