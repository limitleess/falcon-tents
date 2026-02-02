/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // Warm gray
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // Terracotta
        background: "var(--color-background)", // Warm sand
        foreground: "var(--color-foreground)", // gray-800
        primary: {
          DEFAULT: "var(--color-primary)", // Terracotta
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // Deep navy
          foreground: "var(--color-secondary-foreground)", // white
        },
        accent: {
          DEFAULT: "var(--color-accent)", // Light terracotta
          foreground: "var(--color-accent-foreground)", // gray-800
        },
        muted: {
          DEFAULT: "var(--color-muted)", // Light beige
          foreground: "var(--color-muted-foreground)", // gray-600
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // gray-800
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // gray-800
        },
        success: {
          DEFAULT: "var(--color-success)", // green-800
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // orange-700
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-800
          foreground: "var(--color-error-foreground)", // white
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Crimson Text', 'serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        cinematicEntrance: {
          '0%': { transform: 'scale(1.1)', filter: 'blur(10px)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'scale(1)', filter: 'blur(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        drawLine: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'slide-right': 'slideInRight 0.8s ease-out forwards',
        'slide-left': 'slideInLeft 0.8s ease-out forwards',
        'cinematic': 'cinematicEntrance 2s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'draw-line': 'drawLine 1s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-rtl")],
}