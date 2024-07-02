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
      }
    }
  },
  plugins: [],
}

