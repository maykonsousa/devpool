'use client';

import React from 'react';
import { Footer } from './fragments/Footer';
import { Container } from './HomePage.styles';
import { Header } from './fragments/Header';
import { Main } from './fragments/Main';

export function HomePage() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />

    </Container>
  );
}
