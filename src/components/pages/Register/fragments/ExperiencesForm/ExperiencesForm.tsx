import React from 'react';
import { Button } from '@mui/material';
import { IStepsBaseProps } from '../types';
import {
  StepContainer, StepTitle, ActionsContainer, StepContent,
} from '../styles';

interface IExperiencesFormProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function ExperiencesForm({ isVisible, onNext, onPrevious }:IExperiencesFormProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Experiências</StepTitle>
      <StepContent />
      <ActionsContainer>
        <Button fullWidth variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
