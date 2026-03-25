import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: "#e9ffff",
          200: "#81fbff",
          400: "#31d8ff",
          500: "#1cc7ff",
          700: "#0d65b7",
          900: "#04122e"
        }
      },
      boxShadow: {
        neon: "0 0 0.9rem rgba(20, 220, 255, 0.45)",
        panel: "0 0.8rem 2rem rgba(0, 10, 35, 0.5)"
      }
    }
  },
  plugins: []
};

export default config;
