'use client';

import { Close, WhatsApp } from '@mui/icons-material';
import {
  Box,
  Button,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useCreateFeedback, useFeedback } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFeedbackValidation } from '@/validations/formValidations/feedbackValidations';
import { TextInput } from '../TextInput';
import { Loading } from '../Loading';
import {
  CardContainer,
  CardHeader,
  ActionButton,
} from './FeedBackWidget.styles';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const formMethods = useForm<IFormValues>({
    defaultValues,
    resolver: zodResolver(createFeedbackValidation),
  });
  const { showMessage } = useFeedback();

  const handleOpen = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    formMethods.reset();
  }, [formMethods]);

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

  const actionClick = useCallback(() => {
    if (isVisible) {
      handleClose();
    } else {
      handleOpen();
    }
  }, [isVisible, handleClose, handleOpen]);

  const { createFeedback, loading } = useCreateFeedback({
    variables: {
      input: {
        feedback: {
          name: formMethods.watch('name'),
          email: formMethods.watch('email'),
          phone: formMethods.watch('phone'),
          message: formMethods.watch('message'),
        },
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
      <ActionButton onClick={actionClick}>
        {isVisible ? <Close /> : <WhatsApp />}
      </ActionButton>
      {isVisible && (
        <CardContainer>
          <CardHeader>
            <Typography variant="h6" fontWeight={600}>
              Feedback
            </Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </CardHeader>
          <FormProvider {...formMethods}>
            {loading ? (
              <Loading />
            ) : (
              <CardContent>
                <Typography variant="body1" fontWeight={600}>
                  O que está achando do DevPool?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Utilize esse espaço para enviar uma mensagem para os
                  desenvolvedores responsáveis pelo projeto. Pode ser uma
                  crítica, sugestão ou mesmo reportar um defeito.
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
                    rows={isMobile ? 2 : 4}
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={onSubmit}
              >
                Enviar
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </CardActions>
          </FormProvider>
        </CardContainer>
      )}
    </>
  );
}
