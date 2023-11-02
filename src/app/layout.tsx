'use client';

import { ThemeProvider, AuthProvider, ApolloProvider } from '@/providers';
import React from 'react';

import { PageContainer } from './layout.styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <AuthProvider>
        <ApolloProvider>
          <ThemeProvider>
            <body>
              <PageContainer>
                {children}
              </PageContainer>
            </body>
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </html>
  );
}
