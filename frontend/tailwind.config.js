/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        utopia: { 50:'#f6fff7', 100:'#e9fff0', 200:'#cbffe0', 300:'#a6f8cf' },
        dystopia: { 200:'#e9ecf4', 300:'#d6dbe8', 400:'#c1c8dc', 500:'#aab3cc' },
        neon: {
          mint:'#7ef9c9',
          violet:'#b69cff',
          fuchsia:'#ff6ad5',
          cyan:'#75f0ff',
          lemon:'#ffe87d'
        },
      },
      boxShadow: { glow: '0 0 80px 12px rgba(126,249,201,0.18)' },
    },
  },
  plugins: [],
};
