/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.{html,erb}",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.{js,css}" // ← ajout de .css ici
  ],
  theme: {
    extend: {
      colors: {
        violetLorenzo: "#6B3FA0"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'underline-grow': 'underlineGrow 0.3s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      transitionProperty: {
        'width': 'width'
      }
    }
  },
  plugins: []
}
