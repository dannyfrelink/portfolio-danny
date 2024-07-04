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
        textColor: "#EAE7E7",
        secondary: "#E9C079",
        background: "#2A343D",
        backgroundSec: "#3D4751",
      },
    },
  },
  plugins: [],
};
export default config;
