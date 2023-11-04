'use client';

import {
  ThemeProvider, AuthProvider, ApolloProvider, AppProvider,
} from '@/providers';
import React from 'react';

import { Snackbar } from '@components/Snackbar';
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
              <AppProvider>
                <PageContainer>
                  <Snackbar />
                  {children}
                </PageContainer>
              </AppProvider>
            </body>
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </html>
  );
}
