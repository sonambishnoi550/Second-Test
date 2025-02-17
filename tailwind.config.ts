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
      colors: {
        'light-black': "#010101",
        'sky': "#00B7FF",
        'pink': "#DF2BFF",
        'light-gray': "#fafafa",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans- serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
