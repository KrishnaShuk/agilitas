// src/app/layout.tsx

import type { Metadata } from 'next';
import { SpaceGrotesk } from '@/lib/fonts'; // <-- IMPORT FONTS
import './globals.css';
import SmoothScroller from '@/components/SmoothScroller';

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
    <html lang="en" className={`${SpaceGrotesk.variable}`}>
      <body>
        <SmoothScroller>
        {children}
        </SmoothScroller>
      </body>
    </html>
  );
}