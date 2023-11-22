import { TextInput } from '@/components/TextInput';
import { Check } from '@mui/icons-material';
import {
  Box,
  Button, Card, CardActions, CardContent, CircularProgress,
} from '@mui/material';
import React, { SyntheticEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DateInput } from '@/components/DateInput';
import {
  useCreateJob, useFeedback, useGetAllTechnologies, useSession,
} from '@/hooks';
import { AutoComplete } from '@/components/AutoComplete';
import { Checkbox } from '@/components/Checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { createJobValidation } from '@/validations/formValidations';
import { GridContainer } from './JobsTab.styles';

interface IFormValues {
  company: string;
  name: string;
  startDate: Date;
  endDate: Date;
  isCurrent: boolean;
  description: string;
}

const defaultValues: IFormValues = {
  company: '',
  name: '',
  isCurrent: true,
  startDate: new Date(),
  endDate: new Date(),
  description: '',
};

export function JobsForm() {
  const [showForm, setShowForm] = React.useState(false);
  const [technologies, setTechnologies] = React.useState<string[]>([]);
  const { onlyNames: technologiesOptions } = useGetAllTechnologies();
  const { showMessage } = useFeedback();
  const { user } = useSession();
  const formMethods = useForm<IFormValues>({
    defaultValues,
    resolver: zodResolver(createJobValidation),
  });

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  const handleSelectTechnologies = (event: SyntheticEvent<Element, Event>, newValue: string[]) => {
    setTechnologies(newValue);
  };

  const onCompleted = () => {
    showMessage({
      message: 'Experiência criada com sucesso',
      type: 'success',
    });
    handleHideForm();
    formMethods.reset();
    setTechnologies([]);
  };

  const onError = () => {
    showMessage({
      message: 'Erro ao criar experiência',
      type: 'error',
    });
  };

  const { createJob, loading } = useCreateJob({
    variables: {
      input: {
        data: {
          company: formMethods.watch('company'),
          name: formMethods.watch('name'),
          startDate: formMethods.watch('startDate'),
          endDate: formMethods.watch('endDate'),
          isCurrent: formMethods.watch('isCurrent'),
          description: formMethods.watch('description'),
        },
        technologies,
        userId: user?.id as string,
      },
    },
    onCompleted,
    onError,
  });

  const handleSubmit = formMethods.handleSubmit(() => {
    createJob();
  });

  return !showForm ? (
    <Button variant="contained" onClick={handleShowForm}>
      Adicionar
    </Button>
  ) : (
    <Card sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',

      }}
      >
        {loading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              padding: '1rem',
            }}
          >
            <CircularProgress size={92} />
          </Box>
        ) : (
          <FormProvider {...formMethods}>
            <GridContainer>
              <TextInput name="company" label="Empresa" />
              <TextInput name="name" label="Cargo" />
              <Box
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  width: '100%',
                }}
              >
                <DateInput name="startDate" label="Data de início" />
                {!formMethods.watch('isCurrent') && (
                <DateInput name="endDate" label="Data de término" />
                )}

              </Box>
              <Checkbox
                name="isCurrent"
                label="Emprego atual"
                value={formMethods.watch('isCurrent')}
                onChange={(e) => formMethods.setValue('isCurrent', e.target.checked)}
                checked={formMethods.watch('isCurrent')}
              />

            </GridContainer>

            <TextInput name="description" label="Descrição" multiline rows={4} />
            <AutoComplete
              options={technologiesOptions || []}
              value={technologies}
              label="Tecnologias utilizadas"
              onChange={handleSelectTechnologies}
            />
          </FormProvider>
        )}
      </CardContent>
      <CardActions sx={{ padding: '1rem' }}>

        <Button color="primary" startIcon={<Check />} variant="contained" onClick={handleSubmit}>Salvar</Button>
        <Button color="secondary" variant="outlined" onClick={handleHideForm}>Cancelar</Button>
      </CardActions>
    </Card>
  );
}
