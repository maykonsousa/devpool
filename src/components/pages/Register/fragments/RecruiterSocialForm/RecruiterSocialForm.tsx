import React from 'react';
import { Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useSession, useUpdateContacts } from '@/hooks';
import { Loading } from '@/components/Loading';
import { TextInput } from '@/components/TextInput';
import { IStepsBaseProps } from '../types';
import {
  StepContainer,
  StepTitle,
  ActionsContainer,
  StepContent,
  StepSubtitle,
} from '../styles';
import { GridContainer } from '../RecruiterAccountForm/RecruiterAccountForm.styles';

interface ISocialFormProps extends IStepsBaseProps {
  isVisible: boolean;
  onNext: () => void;
}

interface IFormValues {
  userId: string;
  linkedin_url: string;
  instagram_url: string;
  cell_phone: string;
  twitter_url?: string;
}

export function RecruiterSocialForm({
  isVisible,
  onNext,
  onPrevious,
}: ISocialFormProps) {
  const { user } = useSession();
  const isDeveloper = user && user.type === 'developer';
  const defaultValues: IFormValues = {
    userId: user?.id || '',
    linkedin_url: '',
    instagram_url: '',
    cell_phone: '',
    twitter_url: '',
  };

  const formMethods = useForm<IFormValues>({
    defaultValues,
  });

  const { updateContacts, loading } = useUpdateContacts({
    variables: {
      input: {
        userId: user?.id as string,
        data: {
          linkedin_url: formMethods.watch('linkedin_url'),
          instagram_url: formMethods.watch('instagram_url'),
          cell_phone: formMethods.watch('cell_phone'),
          twitter_url: formMethods.watch('twitter_url'),
          github_url: '',
          personal_website: '',
        },
      },
    },
  });

  const onSubmit = async () => {
    if (!formMethods.formState.dirtyFields) {
      await updateContacts();
    }
    onNext();
  };
  return isVisible ? (
    <StepContainer>
      <StepTitle>Redes sociais e contatos</StepTitle>
      <StepSubtitle>Deseja compartilhar suas Redes Sociais</StepSubtitle>
      <StepSubtitle>
        As informações incluídas aqui estarão visíveis no seu perfil e nas vagas
        que divulgar como recrutador responsável.
      </StepSubtitle>

      <StepContent>
        <FormProvider {...formMethods}>
          {loading ? (
            <Loading />
          ) : (
            <GridContainer>
              <TextInput
                name="linkedin_url"
                label="Linkedin"
                placeholder="https://www.linkedin.com/in/seu-perfil/"
              />
              <TextInput
                name="instagram_url"
                label="Instagram"
                placeholder="https://www.instagram.com/seu-perfil/"
              />
              {isDeveloper && (
                <TextInput
                  name="github_url"
                  label="Github"
                  placeholder="https://github.com/seu-perfil/"
                />
              )}
              <TextInput
                name="twitter_url"
                label="Twitter (X)"
                placeholder="https://twitter.com/seu-perfil/"
              />
              {isDeveloper && (
                <TextInput
                  name="personal_website"
                  label="Website"
                  placeholder="https://seu-site.com.br"
                />
              )}
              <TextInput
                name="cell_phone"
                label="Celular"
                placeholder="(99) 99999-9999"
              />
            </GridContainer>
          )}
        </FormProvider>
      </StepContent>
      <ActionsContainer>
        <Button
          fullWidth
          variant="outlined"
          onClick={onPrevious}
          color="primary"
        >
          Voltar
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          {!formMethods.formState.dirtyFields ? 'Finalizar' : 'Pular'}
        </Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
