import { Loading } from '@/components/Loading';
import { TextInput } from '@/components/TextInput';
import { Add, Check } from '@mui/icons-material';
import { Button, Card, CardActions } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Select } from '@/components/Select';
import { typeCousesOptions } from '@/mock/coursesMock';
import {
  useCreateCourse, useFeedback, useGetCoursesByUser, useSession,
} from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { createCourseValidation } from '@/validations/formValidations';
import { GridContainer } from './CoursesTab.styles';

export interface IformValues {
  name: string;
  description: string;
  school: string;
  type: string;
  progress: number;
  duration: number;
  courseUrl: string;

}

const defaultValues: IformValues = {
  name: '',
  description: '',
  school: '',
  type: '',
  progress: 0,
  duration: 0,
  courseUrl: '',

};

export function CoursesForm() {
  const [showForm, setShowForm] = React.useState(false);
  const { user } = useSession();
  const { refetch } = useGetCoursesByUser(user?.id || '');
  const { showMessage } = useFeedback();

  const methods = useForm({
    defaultValues,
    resolver: zodResolver(createCourseValidation),

  });

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
    methods.reset();
  };

  const onCompleted = () => {
    showMessage({
      message: 'Curso adicionado com sucesso!',
      type: 'success',
    });
    handleHideForm();
    refetch();
  };
  const onError = () => {
    showMessage({
      message: 'Erro ao adicionar curso!',
      type: 'error',
    });
  };

  const { createCourse, loading } = useCreateCourse({
    variables: {
      input: {
        userId: `${user?.id || ''}`,
        data: {
          name: methods.watch('name'),
          description: methods.watch('description'),
          school: methods.watch('school'),
          type: methods.watch('type'),
          progress: +methods.watch('progress'),
          duration: +methods.watch('duration'),
          courseUrl: methods.watch('courseUrl'),
        },
      },
    },

    onCompleted,
    onError,
  });

  const onSubmit = methods.handleSubmit(() => {
    createCourse();
  });

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
              required
            />
            <TextInput
              name="school"
              label="Instiuição de ensino"
              placeholder="Digite o nome da instituição de ensino"
              required
            />

            <Select
              name="type"
              label="Tipo de curso"
              options={typeCousesOptions}
              required
            />
            <TextInput
              name="progress"
              label="Progresso de conclusão %"
              placeholder="Digite o progresso de conclusão do curso"
              type="number"
              required
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
              required
            />
            <TextInput
              name="courseUrl"
              label="URL do curso"
              placeholder="Digite a URL do curso"
            />
          </GridContainer>
          <TextInput
            name="description"
            label="Descrição do curso"
            placeholder="Digite uma descrição para o seu curso"
            multiline
            rows={4}
            required
          />

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Check />}
              onClick={onSubmit}
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
