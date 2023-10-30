import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DefaultLayoutContainer } from './DefaultLayout.styles';

interface DefaultlayoutProps {
  children: React.ReactNode
}

function Defaultlayout({ children }: DefaultlayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Header />
      {children}
      <Footer />
    </DefaultLayoutContainer>
  );
}

export default Defaultlayout;
