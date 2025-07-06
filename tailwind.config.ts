import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Green theme colors
        primary: {
          DEFAULT: '#2d5016',
          light: '#4a7c59',
        },
        secondary: {
          DEFAULT: '#d4a574',
          light: '#e6c08c',
        },
        accent: {
          DEFAULT: '#8b4513',
          light: '#a0522d',
        },
        background: {
          primary: '#0a0f0a',
          secondary: '#1a1f1a',
          tertiary: '#2a2f2a',
          card: '#1a1f1a',
          glass: 'rgba(26, 31, 26, 0.8)',
        },
        text: {
          primary: '#f5f5dc',
          secondary: '#d4a574',
          muted: '#a0a0a0',
        },
        // Light theme colors
        'light-primary': '#e74c3c',
        'light-secondary': '#e67e22',
        'light-accent': '#3498db',
        'light-background': {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          tertiary: '#e9ecef',
          card: '#ffffff',
          glass: 'rgba(255, 255, 255, 0.9)',
        },
        'light-text': {
          primary: '#2c3e50',
          secondary: '#e74c3c',
          muted: '#7f8c8d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 80, 22, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(45, 80, 22, 0.6)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config 