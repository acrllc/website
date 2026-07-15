/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020818',
          900: '#050f24',
          800: '#0a1a3a',
          700: '#0d2150',
          600: '#102860',
        },
        cyber: {
          blue: '#00d4ff',
          teal: '#00f5c8',
          silver: '#c8d8e8',
          steel: '#8faabb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,100,200,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(0,212,255,0.12) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'glow-border': 'linear-gradient(135deg, rgba(0,212,255,0.5), rgba(0,100,200,0.3), rgba(0,212,255,0.1))',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0,212,255,0.2)',
        'glow-md': '0 0 30px rgba(0,212,255,0.25)',
        'glow-lg': '0 0 60px rgba(0,212,255,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
