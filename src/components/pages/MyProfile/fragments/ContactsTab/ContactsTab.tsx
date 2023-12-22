import React, { useCallback, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useGetContacts, useSession, useUpdateContacts } from '@/hooks';
import { TextInput } from '@/components/TextInput';
import { Loading } from '@/components/Loading';
import {
  ActionsContainer,
  GridContainer,
  TabContainer,
} from './ContactsTab.styles';

interface IFormValues {
  userId: string;
  linkedin_url: string;
  instagram_url: string;
  github_url: string;
  personal_website: string;
  cell_phone: string;
  twitter_url?: string;
}

export function ContactsTab() {
  const { user } = useSession();
  const isDeveloper = user && user.type === 'developer';
  const { data: getContactsData, loading: getLoading } = useGetContacts({
    variables: {
      input: {
        userId: user?.id,
      },
    },
  });

  const defaultValues: IFormValues = {
    userId: user?.id || '',
    linkedin_url: '',
    instagram_url: '',
    github_url: '',
    personal_website: '',
    cell_phone: '',
    twitter_url: '',
  };
  const formMethods = useForm<IFormValues>({
    defaultValues,
  });

  const getContacts = useCallback(() => {
    formMethods.reset(getContactsData?.contacts);
  }, [getContactsData, formMethods]);

  const { updateContacts, loading: updateLoading } = useUpdateContacts({
    variables: {
      input: {
        userId: user?.id as string,
        data: {
          linkedin_url: formMethods.watch('linkedin_url'),
          instagram_url: formMethods.watch('instagram_url'),
          github_url: formMethods.watch('github_url'),
          personal_website: formMethods.watch('personal_website'),
          cell_phone: formMethods.watch('cell_phone'),
          twitter_url: formMethods.watch('twitter_url'),
        },
      },
    },
  });

  const isLoading = getLoading || updateLoading;

  const onSubmit = formMethods.handleSubmit(async () => {
    await updateContacts();
  });

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <TabContainer>
      <Typography variant="h6" fontWeight={600}>
        Redes Sociais & Contatos
      </Typography>
      <FormProvider {...formMethods}>
        {isLoading ? (
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
        <ActionsContainer>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={onSubmit}
            disabled={isLoading}
          >
            Salvar
          </Button>
        </ActionsContainer>
      </FormProvider>
    </TabContainer>
  );
}
