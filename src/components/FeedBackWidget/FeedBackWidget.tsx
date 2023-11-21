'use client';

import { Close, WhatsApp } from '@mui/icons-material';
import {
  Box,
  Button,
  Card, CardActions, CardContent, IconButton, Typography,
} from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCreateFeedback, useFeedback } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFeedbackValidation } from '@/validations/formValidations/feedbackValidations';
import { TextInput } from '../TextInput';
import { Loading } from '../Loading';

interface IFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const defaultValues: IFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function FeedBackWidget() {
  const [isVisible, setIsVisible] = React.useState(false);
  const formMethods = useForm<IFormValues>({
    defaultValues,
    resolver: zodResolver(createFeedbackValidation),
  });
  const { showMessage } = useFeedback();

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
    formMethods.reset();
  };

  const onCompleted = () => {
    showMessage({
      message: 'Feedback enviado com sucesso!',
      type: 'success',
    });
    handleClose();
  };

  const onError = () => {
    showMessage({
      message: 'Erro ao enviar feedback! Tente novamente mais tarde.',
      type: 'error',
    });
  };

  const { createFeedback, loading } = useCreateFeedback({
    variables: {
      input: {
        feedback: formMethods.getValues(),
      },
    },
    onCompleted,
    onError,
  });

  const onSubmit = formMethods.handleSubmit(async () => {
    await createFeedback();
  });
  return (
    <>
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 76,
          right: 16,
          zIndex: 9999,
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
        onClick={handleOpen}
      >
        <WhatsApp />
      </IconButton>
      {isVisible && (
      <Card
        sx={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '10px',
          width: '100%',
          maxWidth: 400,
          bottom: 140,
          right: 16,
          zIndex: 9999,
        }}

      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            color: 'white',
            padding: '1rem',
          }}
        >
          <Typography variant="h6" fontWeight={600}>Feedback</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <FormProvider {...formMethods}>
          {loading ? <Loading /> : (
            <CardContent>
              <Typography variant="body1" fontWeight={600}>O que está achando do DevPool?</Typography>
              <Typography variant="body2" color="text.secondary">
                Utilize esse espaço para enviar uma mensagem para os desenvolvedores
                responsáveis pelo projeto. Pode ser uma crítica, sugestão ou mesmo
                reportar um defeito.
              </Typography>
              <Box
                sx={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <TextInput
                  name="name"
                  label="Nome"
                  placeholder="Informe o seu nome"
                />
                <TextInput
                  name="email"
                  label="E-mail"
                  placeholder="Informe o seu e-mail"
                />
                <TextInput
                  name="phone"
                  label="Whatsapp"
                  placeholder="Informe o número do seu whatsapp"
                />
                <TextInput
                  name="message"
                  label="Mensagem"
                  placeholder="Digite sua mensagem"
                  multiline
                  rows={4}
                />
              </Box>
            </CardContent>
          )}
          <CardActions
            sx={{
              display: 'flex',
              gap: '1rem',
              width: '100%',
              padding: '1rem',
            }}
          >
            <Button variant="contained" color="primary" fullWidth onClick={onSubmit}>Enviar</Button>
            <Button variant="outlined" color="primary" fullWidth onClick={handleClose}>Cancelar</Button>
          </CardActions>
        </FormProvider>

      </Card>
      )}
    </>
  );
}
