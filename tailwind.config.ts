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
      
      colors: {
        'brand-dark-teal': '#08282A', 
        'brand-bright-blue': '#1024F6', 
      },
    },
  },
  plugins: [],
};
export default config;