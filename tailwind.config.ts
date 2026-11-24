import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F5EFEB',
          300: '#EFE7DE',
          400: '#E5D8CC',
        },
        gold: {
          300: '#EAD9B8',
          400: '#D8C29D',
          500: '#C5A880',
          600: '#A6855B',
          700: '#876944',
        },
        rose: {
          300: '#E8C8C2',
          400: '#D6AEA7',
          500: '#C4928A',
          600: '#AA746B',
        },
        burgundy: {
          950: '#1A060C',
          900: '#2A0B14',
          850: '#3D131E',
          800: '#521B2A',
          700: '#6D2639',
          600: '#8E344B',
        },
        charcoal: {
          950: '#0E0C0D',
          900: '#171416',
          800: '#272225',
          700: '#3D363B',
          600: '#574E54',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(26, 6, 12, 0.25)',
        'gold-glow': '0 0 25px -5px rgba(197, 168, 128, 0.4)',
        'wine-glow': '0 10px 30px -10px rgba(61, 19, 30, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
