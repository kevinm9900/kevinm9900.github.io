import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shell: '#09090b',
        frame: '#18181b',
        paper: '#fffaf5',
        ink: '#111111',
        sand: '#f2e7da',
        rose: '#d97768',
        plum: '#54455f',
        mist: '#efe6de',
        line: '#e7d9cf',
      },
      boxShadow: {
        phone: '0 40px 100px rgba(15, 23, 42, 0.28)',
        float: '0 12px 40px rgba(17, 17, 17, 0.12)',
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(217, 119, 104, 0.18), transparent 36%), radial-gradient(circle at 20% 80%, rgba(84, 69, 95, 0.16), transparent 24%)',
      },
      animation: {
        rise: 'rise 400ms ease-out both',
        fade: 'fade 240ms ease-out both',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['"SF Pro Display"', '"Helvetica Neue"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config;
