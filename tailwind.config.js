/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        editors: ["EditorsNote", "sans-serif"],
        aeonik: ['aeonik', 'sans-serif'], // Fallback to sans-serif
        // 'editors': ['editorsnote', 'sans-serif'] // Fallback to sans-serif
      },
      colors: {
        'fosfo-green': '#C7E98C',
      },
      backgroundImage: {
        'product-image': "url('/pared-blanca.jpg'), mix-blend-mode: multiply",
        'custom-gradient': 'radial-gradient(circle at top left, rgba(255, 245, 248, 1), rgba(255, 245, 248, 0) 50%), radial-gradient(circle at bottom right, rgba(255, 245, 248, 1), rgba(255, 245, 248, 0) 50%), linear-gradient(to bottom, rgba(255, 240, 245, 1), rgba(255, 245, 248, 1))',
      },
    }
  },
  plugins: [],
}

