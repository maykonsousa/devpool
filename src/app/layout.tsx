import {
  ThemeProvider, ApolloProvider, AppProvider, SessionProvider,
} from '@/providers';
import React from 'react';

import { Snackbar } from '@components/Snackbar';
import { getServerSession } from 'next-auth';
import { PageContainer } from './layout.styles';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="pt-BR">
      <SessionProvider session={session}>
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
      </SessionProvider>
    </html>
  );
}
