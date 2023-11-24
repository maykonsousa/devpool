import { ICourseData } from '@/app/api/types/CousersTypes';
import { Dialog } from '@/components/Dialog';
import { TextInput } from '@/components/TextInput';
import { useFeedback, useUpdateCourse } from '@/hooks';
import { createCourseValidation } from '@/validations/formValidations';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface IUpdateCourseDialogProps {
  userId: string;
  course: ICourseData;
}

export function UpdateCourseDialog({
  course,
  userId,
}: IUpdateCourseDialogProps) {
  const formMethods = useForm({
    defaultValues: {
      ...course,
      progress: course.progress.toString(),
      duration: course.duration.toString(),
    },
    resolver: zodResolver(createCourseValidation),
  });
  const { showMessage } = useFeedback();

  const formValues = formMethods.watch();

  const variables = useMemo(
    () => ({
      input: {
        userId,
        courseId: course.id,
        data: {
          name: formValues.name,
          school: formValues.school,
          courseUrl: formValues.courseUrl,
          progress: +formValues.progress,
          duration: +formValues.duration,
          description: formValues.description,
        },
      },
    }),
    [course, userId, formValues],
  );

  const onCompleted = () => {
    showMessage({
      message: 'Curso atualizado com sucesso!',
      type: 'success',
    });
    formMethods.reset();
  };

  const onError = () => {
    showMessage({
      message: 'Erro ao atualizar o curso!',
      type: 'error',
    });
  };

  useEffect(() => {
    formMethods.reset({
      ...course,
      progress: course.progress.toString(),
      duration: course.duration.toString(),
    });
  }, [course, formMethods]);

  const { updateCourse, loading } = useUpdateCourse({
    variables,
    onCompleted,
    onError,
  });

  const handleSubmit = formMethods.handleSubmit(() => updateCourse());

  return (
    <Dialog
      elementAction={
        <IconButton>
          <Edit />
        </IconButton>
      }
      title="Editar curso"
      confirmText="Salvar"
      onConfirm={handleSubmit}
      onDismiss={() => formMethods.reset()}
      loading={loading}
    >
      <FormProvider {...formMethods}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            padding: '1rem',
          }}
        >
          <TextInput name="name" label="Nome" />
          <TextInput name="school" label="Instituição" />
          <TextInput name="courseUrl" label="Url do Curso" />
          <Box
            sx={{
              flexDirection: 'row',
              display: 'flex',
              gap: '1rem',
            }}
          >
            <TextInput name="progress" label="Progresso" />
            <TextInput name="duration" label="Duração" />
          </Box>
          <TextInput name="description" label="Descrição" multiline rows={4} />
        </Box>
      </FormProvider>
    </Dialog>
  );
}
