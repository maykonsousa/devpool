'use client';

import { ThemeProvider } from '@/providers';
import React from 'react';
import { PageContainer } from './layout.styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ThemeProvider>
        <body>
          <PageContainer>
            {children}
          </PageContainer>
        </body>
      </ThemeProvider>
    </html>
  );
}
