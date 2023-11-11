import { TextInput } from '@/components/TextInput';
import { Add, Check } from '@mui/icons-material';
import {
  Button, Card, Typography, CardActions, SelectChangeEvent, Box,
} from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MappedRepository, getRepositoriesByUser } from '@/app/api/services/getRepositoriesByUser.service';
import { useSession, useUpload } from '@/hooks';
import Image from 'next/image';
import { Select } from '@/components/Select';
import { MultiSelect } from '@/components/MultiSelect';
import { AvatarSession, ImageContainer, AvatarActionContainer } from './ProjectsTab.styles';

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

const defaultValues:IformValues = {
  name: '',
  description: '',
  repository: '',
  userId: '',
  githubId: '',
  image_url: '',
  repo_url: '',
  dePloyed_url: '',
} as IformValues;

const TechnologiesOptions = [
  'React',
  'React Native',
  'Node',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'Java',
  'C#',
  'PHP',
  'Python',
  'Ruby',
  'C++',
];

export function ProjectForm() {
  const [showForm, setShowForm] = React.useState(false);
  const [technologies, setTechnologies] = React.useState<string[]>([]);
  const [repositories, setRepositories] = React.useState<MappedRepository[]>([]);
  const methods = useForm({
    defaultValues,
  });
  const { user } = useSession();
  const { url, openUpload } = useUpload();
  const githubId = methods.watch('githubId');

  const handleChangeTechnologies = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setTechnologies(

      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const setValues = useCallback(
    () => {
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
    },
    [githubId, methods, repositories],
  );

  const getRepositories = useCallback(async () => {
    const data = await getRepositoriesByUser(user?.username as string);
    setRepositories(data);
    methods.setValue(
      'image_url',
      'https://firebasestorage.googleapis.com/v0/b/devpool-110a7.appspot.com/o/images%2Fcover_project_default.jpg?alt=media&token=97e03dab-8b65-4a56-8f1f-8f8451f0648d',
    );
  }, [user, methods]);

  const repositoryOptions = repositories?.map((repository:MappedRepository):{
    label: string;
    value: number;
  } => ({
    label: repository.name,
    value: repository.githubId,
  })) || [];

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
    methods.reset();
  };

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
      <Card sx={{
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
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>Tamanho máximo: 2mb</Typography>
          </AvatarActionContainer>
        </AvatarSession>

        <TextInput
          name="name"
          label="Nome"
          placeholder="Nome do projeto"
        />
        <TextInput
          name="description"
          label="Descrição"
          placeholder="Descrição do projeto"
        />
        <Box sx={{
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
        <MultiSelect
          options={TechnologiesOptions}
          label="Tecnologias usadas"
          onChange={handleChangeTechnologies}
          value={technologies}
          fullWidth
        />
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Check />}
            onClick={handleHideForm}
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
    </FormProvider>

  );
}
