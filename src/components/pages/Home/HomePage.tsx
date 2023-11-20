'use client';

import React from 'react';
import { useSession } from '@/hooks';
import { useRouter } from 'next/navigation';
import { Footer } from './fragments/Footer';
import { Container } from './HomePage.styles';
import { Header } from './fragments/Header';
import { Main } from './fragments/Main';

export function HomePage() {
  const { status } = useSession();
  const navigation = useRouter();
  const isAuth = status === 'authenticated';

  React.useEffect(() => {
    if (isAuth) {
      navigation.push('/community');
    }
  }, [isAuth, navigation]);
  return (
    <Container>
      <Header />
      <Main />
      <Footer />

    </Container>
  );
}
