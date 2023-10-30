import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./elements/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {},
  plugins: [],
};
export default config;
