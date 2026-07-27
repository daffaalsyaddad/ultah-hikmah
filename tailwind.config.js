/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#DB2777',
        'on-primary': '#FFFFFF',
        secondary: '#F472B6',
        accent: '#A16207',
        background: '#FDF2F8',
        foreground: '#831843',
        muted: '#F0EDF4',
        border: '#FBCFE8',
        destructive: '#DC2626',
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        serif: ['Cormorant Infant', 'Georgia', 'serif'],
        sans: ['Cormorant Infant', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
