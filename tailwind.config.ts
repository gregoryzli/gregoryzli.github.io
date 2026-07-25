import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0F12',
        surface: '#15181D',
        surfaceHover: '#1B1F26',
        border: '#262B33',
        ink: '#ECEAE4',
        muted: '#8B909A',
        // Was #5A5F68, which is 2.97:1 against the page background — below the
        // WCAG AA 4.5:1 floor, and it carries real text (statuses, stack tags).
        // #7A7F8A measures 4.7:1.
        faint: '#7A7F8A',
        fullstack: '#5B8DEF',
        security: '#E35B6B',
        gamedev: '#9B7EDE',
        research: '#E0A458',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
};

export default config;
