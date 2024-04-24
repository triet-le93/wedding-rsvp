import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "wedding-primary": "#4C7DF0", // Blue
        "wedding-secondary": "#FF6B81", // Pink
        "wedding-accent": "#06D6A0", // Green
        "wedding-text": "#333333", // Dark text
        "wedding-bg": "#F4E2E2", // Light background
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        platypi: ["Platypi", "serif"],
      },
      fontSize: {
        "2xl": "1.75rem", // Increase default font sizes for headings
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "3.5rem",
      },
      boxShadow: {
        "wedding": "0 0 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow for elegance
        "outline": "0 0 20px rgba(255, 255, 255, 0.9)",
      },
      borderRadius: {
        "lg": "0.75rem", // Use slightly rounded corners for a softer look
        "xl": "1rem",
      },
      spacing: {
        "80": "20rem", // Customize spacing according to your layout needs
        "96": "24rem",
      },
      backdropFilter: {
        "none": "none",
        "blur": "blur(20px)",
      },
      backgroundColor: {
        "glass": "rgba(255, 255, 255, 0.4)",
      },
      backgroundImage: {
        "left-countdown-bg": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/left_countdown.jpg)`,
        "right-countdown-bg": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/right_countdown.jpg)`,
        "countdown-bg": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/countdown-bg.jpg)`,
        "home-bg": `url(${process.env.NEXT_PUBLIC_BASE_PATH}/images/main_picture.JPG)`,
      }
    },
  },
  plugins: [],
};
export default config;
