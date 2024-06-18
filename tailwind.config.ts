import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      sm: '0.8rem', // Small
      base: '1rem', // Default (base) size
      xl: '1.5rem', // Extra large
      lg:'1.5rem',
      '2xl': '2rem', // Custom size
      // Add more custom sizes as needed
    },
  },
  plugins: [],
};
export default config;
