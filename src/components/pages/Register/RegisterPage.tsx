/* eslint-disable no-unsafe-optional-chaining */

'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import {
  Stepper, Step, StepLabel, Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import nookies from 'nookies';
import { Footer } from '@/components/Footer';
import { PageContainer, StepList } from './RegisterPage.styles';
import {
  AccountForm,
  ExperiencesForm,
  Orientation,
  ProjectsForm,
  RecruiterAccountForm,
  RecruiterOrientation,
  RecruiterSocialForm,
  SkillsForm,
  SocialForm,
} from './fragments';
import { ActionsContainer, StepTitle } from './fragments/styles';

interface ISteps {
  sequence: number;
  label: string;
  name?: string;
}

const developerSteps:ISteps[] = [
  {
    sequence: 0,
    label: 'Orientações',
    name: 'orientation',
  },
  {
    sequence: 1,
    label: 'Inforções de usuário',
    name: 'account',
  },
  {
    sequence: 2,
    label: 'Projetos',
    name: 'projects',
  },
  {
    sequence: 3,
    label: 'Experiências',
    name: 'experiences',
  },

  {
    sequence: 4,
    label: 'Habilidades',
    name: 'skills',
  },
  {
    sequence: 5,
    label: 'Contatos',
    name: 'contacts',
  },
];

const recruiterSteps:ISteps[] = [
  {
    sequence: 0,
    label: 'Orientações',
    name: 'recruiterOrientation',
  },
  {
    sequence: 1,
    label: 'Inforções de usuário',
    name: 'recruiterAccount',
  },
  {
    sequence: 2,
    label: 'Contatos',
    name: 'recruiterContacts',
  },
];

export function RegisterPage() {
  const [steps, setSteps] = React.useState<ISteps[]>([] as ISteps[]);
  const [activeStep, setActiveStep] = React.useState<ISteps>(steps[0]);
  const [typeUser, setTypeUser] = React.useState<string>('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // get cookie typeUser
  const { typeUser: cookieTypeUser } = nookies.get(null, 'typeUser');
  const isDeveloper = cookieTypeUser === 'developer' || typeUser === 'developer';
  const isRecruiter = cookieTypeUser === 'recruiter' || typeUser === 'recruiter';

  const handleNextStep = () => {
    const nextStep = steps.find((step) => step?.sequence === activeStep?.sequence + 1);
    if (nextStep) {
      setActiveStep(nextStep);
    }
  };

  const handleBackStep = () => {
    const backStep = steps.find((step) => step?.sequence === activeStep?.sequence - 1);
    if (backStep) {
      setActiveStep(backStep);
    }
  };

  const onSelectedTypeUser = (type:string) => {
    setTypeUser(type);

    nookies.set(null, 'typeUser', type, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  };

  useEffect(() => {
    if (isDeveloper) {
      setSteps(developerSteps);
      setActiveStep(developerSteps[0]);
    }
    if (isRecruiter) {
      setSteps(recruiterSteps);
      setActiveStep(recruiterSteps[0]);
    }
  }, [isDeveloper, isRecruiter]);

  return (
    <PageContainer>
      <Image src="/logo.svg" alt="Vercel Logo" width={300} height={100} />
      <StepTitle>Cadastro de usuário</StepTitle>
      <ActionsContainer>
        <Button
          fullWidth
          variant={isDeveloper ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => onSelectedTypeUser('developer')}
        >
          Sou dev
        </Button>
        <Button
          fullWidth
          variant={isRecruiter ? 'contained' : 'outlined'}
          onClick={() => onSelectedTypeUser('recruiter')}
          color="primary"
        >
          Sou Recruiter
        </Button>
      </ActionsContainer>

      {!isMobile && (
      <Stepper activeStep={activeStep?.sequence}>
        {steps.map((step) => (
          <Step key={step?.sequence}>
            <StepLabel>{step?.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      )}

      <StepList>
        <Orientation
          isVisible={activeStep?.name === 'orientation'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />
        <AccountForm
          isVisible={activeStep?.name === 'account'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />

        <ProjectsForm
          isVisible={activeStep?.name === 'projects'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />

        <ExperiencesForm
          isVisible={activeStep?.name === 'experiences'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />

        <SkillsForm
          isVisible={activeStep?.name === 'skills'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />

        <SocialForm
          isVisible={activeStep?.name === 'contacts'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />
        <RecruiterOrientation
          isVisible={activeStep?.name === 'recruiterOrientation'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />
        <RecruiterAccountForm
          isVisible={activeStep?.name === 'recruiterAccount'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />

        <RecruiterSocialForm
          isVisible={activeStep?.name === 'recruiterContacts'}
          onNext={handleNextStep}
          onPrevious={handleBackStep}
        />

      </StepList>
      <Footer />
    </PageContainer>
  );
}
