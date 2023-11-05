import React from 'react';
import { Button } from '@mui/material';
import { IStepsBaseProps } from '../types';
import {
  StepContainer, StepTitle, ActionsContainer, StepContent,
} from '../styles';

interface ISkillsFormProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function SkillsForm({ isVisible, onNext, onPrevious }:ISkillsFormProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Habilidades Técnicas</StepTitle>
      <StepContent />
      <ActionsContainer>
        <Button fullWidth variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
