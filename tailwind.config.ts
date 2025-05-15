import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
          DEFAULT: "#017489",
          50: "#e6f7fa",
          100: "#cceff5",
          200: "#99dfeb",
          300: "#66cfe1",
          400: "#33bfd7",
          500: "#00afcd",
          600: "#008ca4",
          700: "#00697b",
          800: "#004652",
          900: "#002329",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#006955",
          50: "#e6f5f2",
          100: "#ccebe5",
          200: "#99d7cb",
          300: "#66c3b1",
          400: "#33af97",
          500: "#009b7d",
          600: "#007c64",
          700: "#005d4b",
          800: "#003e32",
          900: "#001f19",
          foreground: "hsl(var(--secondary-foreground))",
        },
        header: {
          DEFAULT: "#02609E",
          50: "#e6f0f9",
          100: "#cce1f3",
          200: "#99c3e7",
          300: "#66a5db",
          400: "#3387cf",
          500: "#0069c3",
          600: "#00549c",
          700: "#003f75",
          800: "#002a4e",
          900: "#001527",
        },
        accent: {
          DEFAULT: "#013A87",
          50: "#e6edf7",
          100: "#ccdbef",
          200: "#99b7df",
          300: "#6693cf",
          400: "#336fbf",
          500: "#004baf",
          600: "#003c8c",
          700: "#002d69",
          800: "#001e46",
          900: "#000f23",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
