'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PageContainer } from './CommunityPage.styles';

export function CommunityPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);
  return (
    <PageContainer>CommunityPage</PageContainer>
  );
}
