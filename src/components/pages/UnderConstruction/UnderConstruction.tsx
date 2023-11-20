import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { PageContainer } from './UnderConstruction.styles';

export function UnderConstruction() {
  return (
    <PageContainer>
      <Typography variant="h1">Calma gafanhoto!</Typography>
      <Image
        src="/manWithTablet.svg"
        alt="Em construção"
        width={500}
        height={500}
      />
      <Typography variant="h2">Ainda estamos trabalhando nessa feature</Typography>
    </PageContainer>
  );
}
