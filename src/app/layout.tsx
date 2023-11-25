import {
  ThemeProvider,
  ApolloProvider,
  AppProvider,
  SessionProvider,
} from '@/providers';
import React from 'react';

import { Snackbar } from '@components/Snackbar';
import { FeedBackWidget } from '@components/FeedBackWidget';
import { getServerSession } from 'next-auth';
import { UploadDialog } from '@components/UploadDialog';
import { Metadata } from 'next';
import { PageContainer } from './layout.styles';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_URL ?? ''),
  title: 'DevPool',
  description:
    'DevPool é uma plataforma para conectar desenvolvedores e empresas.',
  openGraph: {
    title: 'DevPool',
    description:
      'DevPool é uma plataforma para conectar desenvolvedores e empresas.',
    images: [
      {
        url: '/metadataImage.png',
        width: 150,
        height: 150,
        alt: 'DevPool',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
                  <FeedBackWidget />
                  <UploadDialog />
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
