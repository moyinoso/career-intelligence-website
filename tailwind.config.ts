import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#dce6f3",
          200: "#c2d3e8",
          700: "#16324f",
          800: "#10253d",
          900: "#0b1a2e",
          950: "#071221",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        ink: "#0f172a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 26, 46, 0.06), 0 8px 24px rgba(11, 26, 46, 0.06)",
        lift: "0 12px 40px rgba(11, 26, 46, 0.12)",
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
