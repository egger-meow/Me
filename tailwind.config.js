/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        sans: ['Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Noto Sans TC"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 28px rgba(16, 185, 129, 0.22)',
        'glow-purple': '0 0 28px rgba(168, 85, 247, 0.22)',
        'glow-amber': '0 0 28px rgba(245, 158, 11, 0.22)',
        'glow-blue': '0 0 28px rgba(59, 130, 246, 0.22)',
        'card-hover': '0 20px 45px -12px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -18px) scale(1.06)' },
          '66%': { transform: 'translate(-18px, 14px) scale(0.97)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.4s linear infinite',
        'pulse-ring': 'pulse-ring 4s ease-in-out infinite',
        aurora: 'aurora 16s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
