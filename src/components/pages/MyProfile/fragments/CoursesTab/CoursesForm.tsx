import { Loading } from '@/components/Loading';
import { TextInput } from '@/components/TextInput';
import { Add, Check } from '@mui/icons-material';
import { Button, Card, CardActions } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Select } from '@/components/Select';
import { typeCousesOptions } from '@/mock/coursesMock';
import { GridContainer } from './CoursesTab.styles';

export interface IformValues {
  name: string;
  description: string;
  school: string;
  type: string;
  progress: number;
  duration: number;
  courseUrl: string;
  userId: string;
}

const defaultValues: IformValues = {
  name: '',
  description: '',
  school: '',
  type: '',
  progress: 0,
  duration: 0,
  courseUrl: '',
  userId: '',
};

export function CoursesForm() {
  const [showForm, setShowForm] = React.useState(false);
  const [loading] = React.useState(false);
  const methods = useForm({
    defaultValues,

  });

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
    methods.reset();
  };

  return !showForm ? (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Add />}
      onClick={handleShowForm}
    >
      Adicionar curso
    </Button>
  ) : (

    <FormProvider {...methods}>

      {loading ? <Loading /> : (
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'flex-start',
          gap: '1rem',
          padding: '10px',
        }}
        >
          <GridContainer>

            <TextInput
              name="name"
              label="Nome do curso"
              placeholder="Digite o nome comercial do seu curso"

            />
            <TextInput
              name="description"
              label="Descrição do curso"
              placeholder="Digite uma descrição para o seu curso"
            />

            <Select
              name="type"
              label="Tipo de curso"
              options={typeCousesOptions}
            />
            <TextInput
              name="progress"
              label="Progresso de conclusão %"
              placeholder="Digite o progresso de conclusão do curso"
              type="number"
              inputProps={{
                min: 0,
                max: 100,
              }}
            />
            <TextInput
              name="duration"
              label="Duração do curso (em horas)"
              placeholder="Digite a duração do curso"
              type="number"
            />
            <TextInput
              name="courseUrl"
              label="URL do curso"
              placeholder="Digite a URL do curso"
            />
          </GridContainer>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Check />}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onClick={() => {}}
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
