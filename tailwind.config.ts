import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        santana: ['var(--font-santana)'],
        acumin: ['var(--font-acumin)'],
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)'],
        lato: ['var(--font-lato)'],
        raleway: ['var(--font-raleway)'],
      },
      screens: {
        '0xl': '1200px',
        '1xl': '1400px',
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '1300px',
      },
      colors: {
        'primary': '#278CB3',
        'zinc': {
          '950': '#1a1a1a',
        }
      },
      scale: {
        '115': '1.15',
      }
    },
  },
  plugins: [
    require('tailwindcss-gradient'),
  ],
};
export default config;
