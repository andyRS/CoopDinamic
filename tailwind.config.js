/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coop-green': '#09a337',
        'coop-blue': '#4685fa',
        'coop-dark-green': '#07872d',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-bold': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 0px 5px #ccc',
        'custom-lg': '0px 0px 10px rgba(0,0,0,0.2)',
      },
      animation: {
        'loader': 'loader 1.5s infinite ease-in-out',
        'slide-in': 'slideIn 1s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        loader: {
          '0%, 80%, 100%': { boxShadow: '0 2.5em 0 -1.3em' },
          '40%': { boxShadow: '0 2.5em 0 0' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
