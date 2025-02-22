// apps/web/app/layout.tsx
import * as React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Spanish Rentals</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
