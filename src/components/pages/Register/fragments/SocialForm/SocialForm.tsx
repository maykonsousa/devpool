import React from 'react';
import { Button } from '@mui/material';
import { IStepsBaseProps } from '../types';
import {
  StepContainer, StepTitle, ActionsContainer, StepContent,
} from '../styles';

interface ISocialFormProps extends IStepsBaseProps {
  isVisible: boolean
}

export function SocialForm({ isVisible, onNext, onPrevious }:ISocialFormProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Redes sociais e contatos</StepTitle>
      <StepContent />
      <ActionsContainer>
        <Button fullWidth variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Finalizar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
