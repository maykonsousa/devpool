import { TextInput } from '@/components/TextInput';
import { Add, Check } from '@mui/icons-material';
import { Button, Card, Typography, CardActions, Box } from '@mui/material';
import React, { SyntheticEvent, useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  MappedRepository,
  getRepositoriesByUser,
} from '@/app/api/services/getRepositoriesByUser.service';
import {
  useCreateProject,
  useFeedback,
  useGetAllTechnologies,
  useGetProjectsByUser,
  useSession,
  useUpload,
} from '@/hooks';
import Image from 'next/image';
import { Select } from '@/components/Select';

import { Loading } from '@/components/Loading';
import { zodResolver } from '@hookform/resolvers/zod';
import { createProjectValidation } from '@/validations/formValidations';

import { AutoComplete } from '@/components/AutoComplete';
import {
  AvatarSession,
  ImageContainer,
  AvatarActionContainer,
} from './ProjectsTab.styles';

export interface IformValues {
  name: string;
  description: string;
  repository: string;
  main_language: string;
  userId: string;
  githubId: string;
  image_url: string;
  repo_url: string;
  dePloyed_url: string;
}

const defaultValues: IformValues = {
  name: '',
  description: '',
  repository: '',
  userId: '',
  githubId: '',
  image_url: '',
  repo_url: '',
  dePloyed_url: '',
  main_language: '',
} as IformValues;

export function ProjectForm() {
  const [showForm, setShowForm] = React.useState(false);
  const [technologies, setTechnologies] = React.useState<string[]>([]);
  const [repositories, setRepositories] = React.useState<MappedRepository[]>(
    [],
  );
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(createProjectValidation),
  });
  const { user } = useSession();
  const { showMessage } = useFeedback();
  const { refetch } = useGetProjectsByUser({
    variables: {
      input: {
        userId: user?.id,
      },
    },
  });
  const { url, openUpload, onResetAtavarOptions } = useUpload();
  const { onlyNames: technologiesOptions } = useGetAllTechnologies();
  const { createProject, loading } = useCreateProject({
    project: {
      name: methods.watch('name'),
      description: methods.watch('description'),
      deployed_url: methods.watch('dePloyed_url'),
      repo_url: methods.watch('repo_url'),
      image_url: methods.watch('image_url'),
      githubId: `${methods.watch('githubId')}`,
      user_id: user?.id as string,
    },
    technologies,
  });
  const githubId = methods.watch('githubId');

  const handleSelectChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string[],
  ) => {
    setTechnologies(newValue);
  };

  const setValues = useCallback(() => {
    const repository = repositories.find((repo) => repo.githubId === +githubId);
    if (repository) {
      methods.setValue('name', repository.name || '');
      methods.setValue('description', repository.description || '');
      methods.setValue('repo_url', repository.url || '');
      methods.setValue(
        'image_url',
        'https://firebasestorage.googleapis.com/v0/b/devpool-110a7.appspot.com/o/images%2Fcover_project_default.jpg?alt=media&token=97e03dab-8b65-4a56-8f1f-8f8451f0648d',
      );
    }
  }, [githubId, methods, repositories]);

  const getRepositories = useCallback(async () => {
    const data = await getRepositoriesByUser(user?.username as string);
    setRepositories(data);
    methods.setValue(
      'image_url',
      'https://firebasestorage.googleapis.com/v0/b/devpool-110a7.appspot.com/o/images%2Fcover_project_default.jpg?alt=media&token=97e03dab-8b65-4a56-8f1f-8f8451f0648d',
    );
  }, [user, methods]);

  const repositoryOptions =
    repositories?.map(
      (
        repository: MappedRepository,
      ): {
        label: string;
        value: number;
      } => ({
        label: repository.name,
        value: repository.githubId,
      }),
    ) || [];

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
    methods.reset();
  };

  const handleCreateProject = methods.handleSubmit(async () => {
    const { data } = await createProject();
    if (data?.createProject.status === 'success') {
      showMessage({
        message: 'Projeto criado com sucesso!',
        type: 'success',
      });
      refetch();
      handleHideForm();
      onResetAtavarOptions();
    } else {
      showMessage({
        message: 'Ocorreu um erro ao criar o projeto!',
        type: 'error',
      });
    }
  });

  useEffect(() => {
    getRepositories();
  }, [getRepositories]);

  useEffect(() => {
    setValues();
  }, [setValues]);

  useEffect(() => {
    if (url) {
      methods.setValue('image_url', url);
    }
  }, [methods, url]);
  return !showForm ? (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Add />}
      onClick={handleShowForm}
    >
      Adicionar projeto
    </Button>
  ) : (
    <FormProvider {...methods}>
      <Select
        name="githubId"
        label="Importar do Github"
        options={repositoryOptions}
        placeholder="Selecione um repositório"
      />
      {loading ? (
        <Loading />
      ) : (
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '10px',
          }}
        >
          <AvatarSession>
            <ImageContainer>
              <Image
                src={methods.watch('image_url') || '/fakeAvatar.png'}
                alt="avatar"
                autoCorrect="true"
                fill
                sizes="120px"
                priority
              />
            </ImageContainer>
            <AvatarActionContainer>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '1rem' }}
                onClick={openUpload}
              >
                Alterar imagem
              </Button>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Tamanho máximo: 2mb
              </Typography>
            </AvatarActionContainer>
          </AvatarSession>

          <TextInput
            name="name"
            label="Nome"
            placeholder="Nome do projeto"
            required
          />
          <TextInput
            name="description"
            label="Descrição"
            placeholder="Descrição do projeto"
            required
            multiline
            rows={4}
          />
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              gap: '1rem',
            }}
          >
            <TextInput
              name="repo_url"
              label="URL do repositório"
              placeholder="URL do repositório"
            />
            <TextInput
              name="dePloyed_url"
              label="Link da aplicação online"
              placeholder="Link da aplicação online"
            />
          </Box>

          <AutoComplete
            options={technologiesOptions || []}
            value={technologies}
            label="Tecnologias utilizadas"
            onChange={handleSelectChange}
          />
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Check />}
              onClick={handleCreateProject}
            >
              Salvar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleHideForm}
            >
              Cancelar
            </Button>
          </CardActions>
        </Card>
      )}
    </FormProvider>
  );
}
