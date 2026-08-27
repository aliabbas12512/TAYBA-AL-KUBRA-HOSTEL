import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#141210",
          light: "#1c1916",
          lighter: "#26221d",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E6C766",
          dark: "#9c7d1c",
        },
        beige: {
          DEFAULT: "#EFE6D3",
          dark: "#D9C9A3",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
        arDisplay: ["var(--font-amiri)", "serif"],
        arBody: ["var(--font-tajawal)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E6C766 0%, #C9A227 50%, #9c7d1c 100%)",
        "charcoal-gradient": "linear-gradient(180deg, #141210 0%, #1c1916 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        shimmer: "shimmer 3s linear infinite",
        floatSlow: "floatSlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
