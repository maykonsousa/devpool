'use client';

import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { PageContainer, Subtitle, Title } from './UnderConstruction.styles';

export function UnderConstruction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <PageContainer>
      <Title>Calma gafanhoto!</Title>
      <Image
        src="/manWithTablet.svg"
        alt="Em construção"
        width={isMobile ? 250 : 300}
        height={isMobile ? 250 : 300}
      />
      <Subtitle>Ainda estamos trabalhando nessa feature</Subtitle>
    </PageContainer>
  );
}
