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
        'blue': "#7E68FF",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans- serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
