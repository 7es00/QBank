import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#AF0936",
        muted: {
          foreground: "#6B7280",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #AF0936, #d1426b)",
        "gradient-hero": "linear-gradient(to bottom right, #AF0936, #F3729F)",
      },
    },
  },
  plugins: [],
};

export default config;
