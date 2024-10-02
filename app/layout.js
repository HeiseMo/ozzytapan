// app/layout.js
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
