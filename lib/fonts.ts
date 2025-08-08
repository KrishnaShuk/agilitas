// src/lib/fonts.ts

import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
export const satoshi = localFont({
  src: '../assets/fonts/Satoshi-Variable.woff2',
  display: 'swap',
  variable: '--font-satoshi', // CSS variable name
});

export const clashDisplay = localFont({
  src: '../assets/fonts/ClashDisplay-Variable.woff2',
  display: 'swap',
  variable: '--font-clash-display', // CSS variable name
});