import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#4F6FD4",
        accentLight: "#7B94E8",
        teal: {
          DEFAULT: "#0D9488",
          50: "#f0fdfa",
          500: "#14b8a6",
          600: "#0D9488",
          700: "#0f766e",
          800: "#115e59",
        },
        surface: "#EEF2FF",
        text: "#111827",
        muted: "#6B7280",
        border: "#C7D2FE",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
