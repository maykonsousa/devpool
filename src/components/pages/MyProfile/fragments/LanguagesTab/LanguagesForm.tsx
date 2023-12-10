import { Add } from '@mui/icons-material';
import { Button, Card, CardActions, CircularProgress } from '@mui/material';
import React, { useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Select } from '@/components/Select';

import {
  useCreateLanguage,
  useFeedback,
  useGetAllLanguages,
  useSession,
} from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { languagesValidation } from '@/validations/formValidations';
import { GridContainer } from './LanguagesTab.styles';

export interface IformValues {
  name: string;
  level: string;
}

const defaultValues: IformValues = {
  name: '',
  level: '',
};

export function LanguagesForm() {
  const [showForm, setShowForm] = React.useState(false);
  const { user } = useSession();
  const { showMessage } = useFeedback();
  const { data: AllLanguagesData } = useGetAllLanguages();

  const languagesOptions = useMemo(() => {
    if (!AllLanguagesData) return [];
    return AllLanguagesData.languages.map((language) => ({
      value: language.name,
      label: language.name,
    }));
  }, [AllLanguagesData]);

  const levelOptions = [
    { value: 'A1', label: 'A1 - Básico' },
    { value: 'A2', label: 'A2 - Básico' },
    { value: 'B1', label: 'B1 - Intermediário' },
    { value: 'B2', label: 'B2 - Intermediário' },
    { value: 'C1', label: 'C1 - Avançado' },
    { value: 'C2', label: 'C2 - Avançado' },
  ];
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(languagesValidation),
  });

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
    methods.reset();
  };

  const { createLanguage, loading } = useCreateLanguage({
    variables: {
      input: {
        name: methods.watch('name'),
        level: methods.watch('level'),
        userId: user?.id || '',
      },
    },
  });

  const onSubmit = methods.handleSubmit(async () => {
    const { data } = await createLanguage();
    showMessage({
      message: data?.createLanguage.message || '',
      type: data?.createLanguage.status as 'success' | 'error',
    });
  });

  return !showForm ? (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Add />}
      onClick={handleShowForm}
    >
      Adicionar idioma
    </Button>
  ) : (
    <FormProvider {...methods}>
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
        <GridContainer>
          <Select
            name="name"
            label="Idioma"
            options={languagesOptions}
            required
          />
          <Select name="level" label="Nível" options={levelOptions} />
        </GridContainer>

        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={loading ? <CircularProgress size={20} /> : <Add />}
            onClick={onSubmit}
            disabled={loading}
          >
            {loading ? 'Salvando...' : 'Adicionar'}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleHideForm}>
            Cancelar
          </Button>
        </CardActions>
      </Card>
    </FormProvider>
  );
}
