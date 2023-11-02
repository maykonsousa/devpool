'use client';

import { ThemeProvider } from '@/providers';
import React from 'react';
import { AuthProvider } from '@/providers/AuthProvider';
import { PageContainer } from './layout.styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <AuthProvider>
        <ThemeProvider>
          <body>
            <PageContainer>
              {children}
            </PageContainer>
          </body>
        </ThemeProvider>
      </AuthProvider>
    </html>
  );
}
