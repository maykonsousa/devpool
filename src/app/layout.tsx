'use client';

import { ThemeProvider } from '@/providers'
import { PageContainer } from './layout.styles';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ThemeProvider>

      <PageContainer>
        {children}
      </PageContainer>
      </ThemeProvider>
    </html>
  )
}
