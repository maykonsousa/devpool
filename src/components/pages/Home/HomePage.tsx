'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Message } from './HomePage.styles';

export function HomePage() {
  return (
    <Container>
      <Image src="/logo.svg" alt="Vercel Logo" width={300} height={100} />
      <Message>
        Página em construção. Aguarde novidades em breve!
      </Message>
    </Container>
  );
}
