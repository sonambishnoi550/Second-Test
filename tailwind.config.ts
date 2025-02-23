import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        'light-black': "#010101",
        'sky': "#00B7FF",
        'pink': "#DF2BFF",
        'light-gray': "#fafafa",
        'light-blue':"#182646"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans- serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
