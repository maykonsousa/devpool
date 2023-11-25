import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DefaultLayoutContainer, Main } from './DefaultLayout.styles';

interface DefaultlayoutProps {
  children: React.ReactNode;
}

function Defaultlayout({ children }: DefaultlayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </DefaultLayoutContainer>
  );
}

export default Defaultlayout;
