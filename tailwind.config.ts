// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)'],
        display: ['var(--font-Space-Grotesk)'],
      },
      boxShadow: {
        'navbar-shadow': '0px 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        figma: '70px',
      },
      // --- ADD THESE NEW COLORS ---
      colors: {
        'brand-dark-teal': '#08282A', // The dark background for the angled section
        'brand-bright-blue': '#1024F6', // The vibrant blue accent color
      },
    },
  },
  plugins: [],
};
export default config;