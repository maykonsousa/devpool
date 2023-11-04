'use client';

import React from 'react';
import Image from 'next/image';
import {
  Stepper, Step, StepLabel, Typography,
} from '@mui/material';
import { HandymanSharp } from '@mui/icons-material';
import { PageContainer } from './RegisterPage.styles';

interface ISteps {
  sequence: number;
  label: string;
  component: React.ReactNode;
  isOptional?: boolean;
}

const steps:ISteps[] = [
  {
    sequence: 0,
    label: 'Inforções de usuário',
    component: <Typography>Aqui vai o form User</Typography>,
  },
  {
    sequence: 1,
    label: 'Projetos',
    component: <Typography>Aqui o usuário irá adicionar os projetos</Typography>,
    isOptional: true,
  },
  {
    sequence: 2,
    label: 'Experiências',
    component: <Typography>Aqui o usuário irá cadastrar suas experiências </Typography>,
    isOptional: true,
  },

  {
    sequence: 3,
    label: 'Habilidades',
    component: <Typography>Aqui o usuário irá cadastrar suas habilidades</Typography>,
    isOptional: true,
  },
  {
    sequence: 4,
    label: 'Contatos',
    component: (<Typography>Aqui o usuário incluirá seus contatos e links</Typography>),
  },
];

export function RegisterPage() {
  return (
    <PageContainer>
      <Image src="/logo.svg" alt="Vercel Logo" width={300} height={100} />

      <Stepper activeStep={0}>
        {steps.map((step) => (
          <Step key={step.sequence}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography
        variant="body1"
        sx={{
          marginTop: '20px',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          fontSize: '2.5rem',
          lineHeight: 1.5,

        }}
      >
        <HandymanSharp
          fontSize="large"
          sx={{
            color: '#f50057',
          }}
        />
        Feature em construção
      </Typography>

    </PageContainer>
  );
}
