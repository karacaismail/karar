import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    join(root, 'index.html'),
    join(root, 'src/**/*.{ts,tsx}'),
    join(root, 'node_modules/flowbite/**/*.js'),
  ],
  theme: {
    // Mobile-first: base styles target 320px (iPhone 4). Everything scales UP from there.
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        brand: {
          50: '#fff3ef',
          100: '#ffe0d6',
          200: '#ffc0ad',
          300: '#ff9a7d',
          400: '#ff6f4d',
          500: '#f95428',
          600: '#e03e14',
          700: '#b52f0f',
          800: '#8f2812',
          900: '#742513',
        },
        ink: {
          50: '#f6f7f8',
          100: '#e9ecee',
          200: '#d3d9dd',
          300: '#aeb9c0',
          400: '#82929c',
          500: '#637481',
          600: '#4f5e6a',
          700: '#414d57',
          800: '#39424a',
          900: '#333a40',
        },
      },
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
