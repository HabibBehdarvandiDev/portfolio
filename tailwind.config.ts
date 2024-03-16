import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headline_light: "#2D2E32",
        headline_dark: "#F9F9F9",
        paragraph_light: "#555555",
        paragraph_dark: "#6E6E6E",
        background_light: "#F9F9F9",
        background_dark: "#2D2E32",
        primary_light: "#007ACC",
      },
    },
  },
  plugins: [],
};
export default config;
