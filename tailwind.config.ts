import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        craftNavy: "#0F172A",
        craftSteel: "#94A3B8",
        craftOrange: "#F97316"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;

