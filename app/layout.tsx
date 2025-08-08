// src/app/layout.tsx

import type { Metadata } from 'next';
import { clashDisplay } from '@/lib/fonts'; // <-- IMPORT FONTS
import './globals.css';

export const metadata: Metadata = {
  title: 'Agilitas Assignment',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // APPLY THE FONT VARIABLES TO THE HTML TAG
    <html lang="en" className={`${clashDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}