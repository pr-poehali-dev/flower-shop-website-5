import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#bb70a7",
          foreground: "#ffffff",
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#bb70a7",
          600: "#a855a3",
          700: "#92318a",
          800: "#7e2868",
          900: "#701a75",
        },
        cocktail: {
          pink: "#e1babf",
          rose: "#c4a0a4",
          black: "#000000",
          lavender: "#e9d9e6",
          mauve: "#d2aac4",
          purple: "#bb70a7",
          dark: "#1e1e1e",
          gray: "#4d4647",
          white: "#ffffff",
          green: "#1f4c1b",
          darkGreen: "#202b21",
        },
        secondary: {
          DEFAULT: "#e1babf",
          foreground: "#1e1e1e",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#e9d9e6",
          foreground: "#4d4647",
        },
        accent: {
          DEFAULT: "#d2aac4",
          foreground: "#1e1e1e",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#1e1e1e",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1e1e1e",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
