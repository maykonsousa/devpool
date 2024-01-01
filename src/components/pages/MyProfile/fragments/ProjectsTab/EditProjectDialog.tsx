import { Dialog } from '@/components/Dialog';
import { Edit } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { SyntheticEvent, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';
import { TextInput } from '@/components/TextInput';
import { AutoComplete } from '@/components/AutoComplete';
import {
  useFeedback,
  useGetAllTechnologies,
  useSession,
  useUpdateProject,
  useUpload,
} from '@/hooks';
import { ImageContainer } from './ProjectsTab.styles';

interface IFormValues {
  name: string;
  description: string;
  repository: string;
  userId: string;
  image_url: string;
  repo_url: string;
  dePloyed_url: string;
}

const defaultValues: IFormValues = {
  name: '',
  description: '',
  repository: '',
  userId: '',
  image_url: '',
  repo_url: '',
  dePloyed_url: '',
};

interface ITechnologies {
  id: string;
  name: string;
}

interface IProject {
  id: string;
  name: string;
  description: string;
  repo_url: string;
  deployed_url: string;
  image_url: string;
  technologies: ITechnologies[];
}

interface IEditProjectDialogProps {
  project: IProject;
}

export function EditProjectDialog({ project }: IEditProjectDialogProps) {
  const { onlyNames: technologiesOptions } = useGetAllTechnologies();
  const { url, openUpload } = useUpload();
  const { user } = useSession();
  const { showMessage } = useFeedback();
  const [technologies, setTechnologies] = React.useState<string[]>([]);

  const formMethods = useForm<IFormValues>({
    defaultValues,
  });

  const { updateProject, loading } = useUpdateProject({
    variables: {
      input: {
        projectId: project.id,
        userId: user?.id || '',
        name: formMethods.watch('name') || undefined,
        description: formMethods.watch('description') || undefined,
        image_url: formMethods.watch('image_url') || undefined,
        repo_url: formMethods.watch('repo_url') || undefined,
        deployed_url: formMethods.watch('dePloyed_url') || undefined,
        technologies,
      },
    },
  });

  const updateFormValues = useCallback(() => {
    const tecnologiesNames = project.technologies.map((tech) => tech.name);
    formMethods.reset({
      name: project.name,
      description: project.description,
      userId: project.id,
      image_url: url || project.image_url,
      repo_url: project.repo_url,
      dePloyed_url: project.deployed_url,
    });
    setTechnologies(tecnologiesNames);
  }, [formMethods, project, url]);

  const handleSelectChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string[],
  ) => {
    setTechnologies(newValue);
  };

  const handleUpdateProject = formMethods.handleSubmit(async () => {
    const { data, errors } = await updateProject();
    if (errors?.length) {
      showMessage({
        message: 'Erro ao atualizar projeto',
        type: 'error',
      });
    } else {
      showMessage({
        message:
          data?.updateProjectUser.message || 'Projeto atualizado com sucesso',
        type: data?.updateProjectUser.status as 'success' | 'error',
      });
      formMethods.reset();
    }
  });
  const onCancel = () => {
    formMethods.reset();
  };

  React.useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);

  return (
    <Dialog
      title="Editar projeto"
      loading={loading}
      onConfirm={handleUpdateProject}
      onDismiss={onCancel}
      elementAction={
        <IconButton>
          <Edit />
        </IconButton>
      }
    >
      <FormProvider {...formMethods}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            width: '100%',
          }}
        >
          <ImageContainer sx={{ cursor: 'pointer' }} onClick={openUpload}>
            <Image
              src={formMethods.watch('image_url') || '/fakeAvatar.png'}
              alt="avatar"
              autoCorrect="true"
              fill
              sizes="120px"
              priority
            />
          </ImageContainer>
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

          <TextInput
            name="repo_url"
            label="Repositório"
            placeholder="Repositório do projeto"
            required
          />

          <TextInput
            name="dePloyed_url"
            label="Deploy"
            placeholder="Deploy do projeto"
            required
          />

          <AutoComplete
            label="Tecnologias"
            options={technologiesOptions}
            value={technologies}
            onChange={handleSelectChange}
          />
        </Box>
      </FormProvider>
    </Dialog>
  );
}
