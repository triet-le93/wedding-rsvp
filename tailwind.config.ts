import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors for your wedding theme
        "wedding-primary": "#4C7DF0", // Blue
        "wedding-secondary": "#FF6B81", // Pink
        "wedding-accent": "#06D6A0", // Green
        "wedding-text": "#333333", // Dark text
        "wedding-bg": "#FDFDFD", // Light background
      },
      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
        dancing: ["Dancing Script", "cursive"],
      },
      fontSize: {
        "2xl": "1.75rem", // Increase default font sizes for headings
        "3xl": "2.25rem",
        "4xl": "3rem",
      },
      boxShadow: {
        "wedding": "0 0 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for elegance
      },
      borderRadius: {
        "lg": "0.75rem", // Use slightly rounded corners for a softer look
        "xl": "1rem",
      },
      spacing: {
        "80": "20rem", // Customize spacing according to your layout needs
        "96": "24rem",
      },
    },
  },
  plugins: [],
};
export default config;
