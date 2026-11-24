import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          subtle: "var(--color-bg-subtle)",
          dark: "var(--color-dark-bg)",
        },
        ink: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          light: "var(--color-text-on-dark)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      borderRadius: {
        card: "var(--radius-card)",
        btn: "var(--radius-btn)",
      },
    },
  },
  plugins: [],
};

export default config;
