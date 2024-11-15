/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e1e1e',
          lighter: '#2d2d2d',
          darker: '#161616',
        },
        secondary: {
          DEFAULT: '#3b82f6',
          lighter: '#60a5fa',
          darker: '#2563eb',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          lighter: '#a78bfa',
          darker: '#7c3aed',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1e1e1e',
          darker: '#0a0a0a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

