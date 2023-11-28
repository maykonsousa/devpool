import React, { useMemo } from 'react';
import { Email, Phone } from '@mui/icons-material';
import { Box, Button, CardActions } from '@mui/material';
import { SocialIcon } from '@/components/SocialIcon';
import { FormProvider, useForm } from 'react-hook-form';
import { TextInput } from '@/components/TextInput';
import { Select } from '@/components/Select';
import {
  useFeedback,
  useGetContacts,
  useGetUserByUsername,
  useSendEmail,
} from '@/hooks';
import { IContacts } from '@/hooks/useGetContacts/useGetContacts';
import { CopyIcon } from '@/components/CopyIcon';
import { Loading } from '@/components/Loading';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailValidation } from '@/validations/formValidations/emailValidations';
import {
  FormContainer,
  InformationCard,
  InformationTitle,
  InformationsContainer,
  Main,
  TabContainer,
  FormTitle,
  Title,
} from './TabContacts.styles';

interface TabContactsProps {
  username: string;
}

interface IFormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const defaultValues: IFormInputs = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function TabContacts({ username }: TabContactsProps) {
  const formMethods = useForm({
    defaultValues,
    resolver: zodResolver(emailValidation),
  });
  const { showMessage } = useFeedback();
  const variables = useMemo(() => ({ input: { username } }), [username]);
  const { data: userData } = useGetUserByUsername({
    variables,
  });

  const { data } = useGetContacts({
    variables,
  });

  const { sendMail, loading } = useSendEmail({
    variables: {
      input: {
        toName: userData?.name || '',
        toEmail: userData?.email || '',
        subject: formMethods.watch('subject'),
        name: formMethods.watch('name'),
        message: formMethods.watch('message'),
        email: formMethods.watch('email'),
      },
    },
  });

  const handleSendEmail = formMethods.handleSubmit(async () => {
    const { data: result } = await sendMail();
    if (result?.sendMail?.status === 'success') {
      showMessage({
        message: 'Mensagem enviada com sucesso!',
        type: 'success',
      });
      formMethods.reset();
    } else {
      showMessage({
        message: 'Ocorreu um erro ao enviar a mensagem!',
        type: 'error',
      });
    }
  });

  const contacts = data ? (data.contacts as IContacts) : ({} as IContacts);

  return (
    <TabContainer>
      <Title>Contatos & Redes sociais</Title>

      <Main>
        <InformationsContainer>
          <InformationCard>
            <InformationTitle>Contatos</InformationTitle>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
              }}
            >
              <Email />
              {contacts?.email}
              <CopyIcon text={contacts?.email} />
            </Box>
            {contacts.cell_phone && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '10px',
                }}
              >
                <Phone />
                {contacts.cell_phone}
                <CopyIcon text={contacts.cell_phone} />
              </Box>
            )}
          </InformationCard>
          <InformationCard>
            <InformationTitle>Redes sociais</InformationTitle>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {contacts.github_url && (
                <SocialIcon
                  variant="rounded"
                  type="github_url"
                  url={contacts.github_url}
                />
              )}
              {contacts.linkedin_url && (
                <SocialIcon
                  variant="rounded"
                  type="linkedin_url"
                  url={contacts.linkedin_url}
                />
              )}
              {contacts.twitter_url && (
                <SocialIcon
                  variant="rounded"
                  type="twitter_url"
                  url={contacts.twitter_url}
                />
              )}
              {contacts.instagram_url && (
                <SocialIcon
                  variant="rounded"
                  type="instagram_url"
                  url={contacts.instagram_url}
                />
              )}
              {contacts.cell_phone && (
                <SocialIcon
                  variant="rounded"
                  type="cell_phone"
                  url={contacts.cell_phone}
                />
              )}
              {contacts.personal_website && (
                <SocialIcon
                  variant="rounded"
                  type="personal_website"
                  url={contacts.personal_website}
                />
              )}
            </Box>
          </InformationCard>
        </InformationsContainer>
        {loading ? (
          <Loading />
        ) : (
          <FormContainer>
            <FormTitle>Enviar mensagem</FormTitle>

            <FormProvider {...formMethods}>
              <TextInput
                name="name"
                label="Nome"
                placeholder="Digite seu nome"
                required
              />
              <TextInput
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                required
              />
              <Select
                name="subject"
                label="Assunto"
                placeholder="Selecione um assunto"
                required
                options={[
                  { value: 'Processo seletivo', label: 'Processo seletivo' },
                  { value: 'Elogios', label: 'Elogios' },
                  { value: 'FeedBack', label: 'Feedback' },
                ]}
              />
              <TextInput
                name="message"
                label="Mensagem"
                placeholder="Digite sua mensagem"
                required
                multiline
                rows={4}
              />
            </FormProvider>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendEmail}
              >
                Enviar
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => formMethods.reset()}
              >
                Limpar
              </Button>
            </CardActions>
          </FormContainer>
        )}
      </Main>
    </TabContainer>
  );
}
