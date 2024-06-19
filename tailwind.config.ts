import type { Config } from 'tailwindcss'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        light: 'rgba(255, 255, 255, 0.87)',
        dark: '#242424',
        primary: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
        background: {
          light: '#ffffff',
          dark: '#242424',
        },
        text: {
          dark: '#ffffff',
        },
      },
      borderRadius: {
        md: '8px',
        '25p': '25%',
      },
      spacing: {
        sm: '0.6em',
        md: '1.2em',
        lg: '2em',
        '1.25': '5px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
      transitionDuration: {
        fast: '250ms',
        DEFAULT: '300ms',
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
    },
  },
  darkMode: 'media', // or 'class' if you prefer to toggle dark mode manually
  plugins: [],
} satisfies Config
