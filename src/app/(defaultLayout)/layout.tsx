import React from 'react';
import { Header } from '@/components/Header';
import { DefaultLayoutContainer } from './DefaultLayout.styles';

interface DefaultlayoutProps {
  children: React.ReactNode
}

function Defaultlayout({ children }: DefaultlayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Header />
      {children}
    </DefaultLayoutContainer>
  );
}

export default Defaultlayout;
