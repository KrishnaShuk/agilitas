// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  // This tells Tailwind to scan all these files for class names.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // This is where we customize Tailwind's design system.
  theme: {
    extend: {
      // Here is where we add our custom fonts.
      fontFamily: {
        sans: ['var(--font-satoshi)'],
        display: ['var(--font-clash-display)'],
      },
      // You can also extend other properties like colors, spacing, etc. here.
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // --- ADD THESE CUSTOM VALUES ---
      boxShadow: {
        'navbar-shadow': '0px 4px 30px rgba(0, 0, 0, 0.1)', // Custom shadow from Figma
      },
      backdropBlur: {
        'figma': '70px', // Custom background blur from Figma
      },
    },
  },
  // This is for adding official Tailwind plugins.
  plugins: [],
}
export default config