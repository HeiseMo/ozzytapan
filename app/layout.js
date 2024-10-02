// app/layout.js
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '../styles/globals.css';
import localFont from 'next/font/local';

const poppins = localFont({ 
  src: [
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-poppins'
});

const glancyrNeue = localFont({ 
  src: './fonts/glancyr-glancyr-regular-400.ttf',
  variable: '--font-glancyr-neue'
});

const glancyrNeueBold = localFont({ 
  src: './fonts/glancyr-glancyr-bold-700.ttf',
  variable: '--font-glancyr-neue-bold'
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${glancyrNeue.variable} ${glancyrNeueBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
