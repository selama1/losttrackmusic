import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        utopia: {
          50: '#f2fff5',
          200: '#bff7cc',
          400: '#8beea6',
        },
        dystopia: {
          600: '#1c2129',
          700: '#14181f',
          900: '#0c0f14',
        },
        accent: {
          good: '#A7F3D0',
          bad: '#FF6B6B',
        },
      },
      boxShadow: {
        glow: '0 0 60px 10px rgba(135, 255, 195, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
