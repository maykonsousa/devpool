import { Button } from '@mui/material';
import React from 'react';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepTitle,
} from '../styles';

interface IOrientationProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function RecruiterOrientation({ isVisible, onNext }:IOrientationProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Seja bem-vindo(a)!</StepTitle>
      <StepContent />
      <ActionsContainer>
        <Button fullWidth disabled variant="outlined" color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
