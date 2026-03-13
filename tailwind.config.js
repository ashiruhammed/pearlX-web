/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#05050A',
        surface: '#10111A',
        foreground: '#FFFFFF',
        muted: '#8B8D98',
        neon: {
          cyan: '#00F0FF',
          purple: '#8A2BE2',
          blue: '#1D4ED8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl-card': '1.5rem',
        '3xl-card': '2.5rem',
      },
      animation: {
        'mesh': 'mesh 15s ease infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        mesh: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
