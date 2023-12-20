import { Dialog } from '@/components/Dialog';
import { Select } from '@/components/Select';
import { useFeedback, useUpdateLanguage } from '@/hooks';
import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface ILanguage {
  id: string;
  name: string;
  level: string;
  userId: string;
}

interface IEditLanguageIconProps {
  language: ILanguage;
}

interface IFormValues {
  languageId: string;
  newLevel: string;
  userId: string;
}

const defaultValues: IFormValues = {
  languageId: '',
  newLevel: '',
  userId: '',
};

export function EditLanguageIcon({ language }: IEditLanguageIconProps) {
  const { showMessage } = useFeedback();
  const formMethods = useForm({
    defaultValues,
  });
  const variables = {
    input: {
      languageId: formMethods.getValues('languageId'),
      newLevel: formMethods.watch('newLevel'),
      userId: formMethods.getValues('userId'),
    },
  };

  const { updateLanguage, loading } = useUpdateLanguage(variables);
  const levelOptions = [
    { value: 'A1', label: 'A1 - Básico' },
    { value: 'A2', label: 'A2 - Básico' },
    { value: 'B1', label: 'B1 - Intermediário' },
    { value: 'B2', label: 'B2 - Intermediário' },
    { value: 'C1', label: 'C1 - Avançado' },
    { value: 'C2', label: 'C2 - Avançado' },
  ];

  const updateFormValues = useCallback(() => {
    formMethods.reset({
      languageId: language.id,
      newLevel: language.level,
      userId: language.userId,
    });
  }, [language, formMethods]);

  const onUpdateLanguage = formMethods.handleSubmit(async () => {
    const { data } = await updateLanguage();
    if (data?.updateLanguage) {
      showMessage({
        message: data.updateLanguage.message,
        type: data.updateLanguage.status as 'success' | 'error',
      });
    } else {
      showMessage({
        message: 'Erro ao atualizar idioma',
        type: 'error',
      });
    }
  });

  React.useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);
  return (
    <Dialog
      title={`Editar idioma ${language.name}`}
      confirmText="Salvar"
      dismissText="Cancelar"
      loading={loading}
      onConfirm={onUpdateLanguage}
      disabled={formMethods.watch('newLevel') === language.level}
      elementAction={
        <IconButton>
          <Edit />
        </IconButton>
      }
    >
      <FormProvider {...formMethods}>
        <Select name="newLevel" label="Nível" options={levelOptions} />
      </FormProvider>
    </Dialog>
  );
}
