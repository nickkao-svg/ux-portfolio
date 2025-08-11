import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      colors: {
        // Apple-inspired dark theme colors
        charcoal: {
          DEFAULT: "#0B0B0C",
          50: "#1A1A1C",
          100: "#2A2A2D",
          200: "#3A3A3E",
          300: "#4A4A4F",
          400: "#5A5A60",
          500: "#6A6A71",
          600: "#7A7A82",
          700: "#8A8A93",
          800: "#9A9AA4",
          900: "#AAAAAF",
        },
        accent: {
          blue: "#7AB8FF",
          purple: "#9B8CFF",
          blueDark: "#5A9BFF",
          purpleDark: "#7A6CFF",
        },
        text: {
          primary: "#E8EAED",
          secondary: "#B8BABC",
          tertiary: "#8A8A93",
          muted: "#6A6A71",
        },
        brand: {
          DEFAULT: "#7AB8FF",
          50: "#EDF6FF",
          100: "#D7EBFF",
          200: "#ADD5FF",
          300: "#84BFFF",
          400: "#5AA9FF",
          500: "#7AB8FF",
          600: "#5A9BFF",
          700: "#4A8BFF",
          800: "#3A7BFF",
          900: "#2A6BFF",
        },
      },
      borderRadius: {
        xs: "0.25rem",
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.06), 0 1px 1px rgba(0,0,0,0.04)",
        apple: "0 4px 24px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
        appleHover: "0 8px 32px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.12)",
        glass: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        apple: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        "magnetic": "magnetic 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        magnetic: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
