import { ConfirmationDialog } from '@/components/CopyIcon/ConfimationDialog';
import { useDeleteLanguage, useFeedback, useSession } from '@/hooks';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useMemo } from 'react';

interface IDeleteLanguageIconProps {
  languageId: string;
}

export function DeleteLanguageIcon({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  languageId,
}: IDeleteLanguageIconProps) {
  const { showMessage } = useFeedback();

  const { user } = useSession();
  const variables = useMemo(
    () => ({
      input: {
        languageId,
        userId: user?.id as string,
      },
    }),
    [user?.id, languageId],
  );
  const { deleteLanguage, loading } = useDeleteLanguage(variables);

  const onDelete = async () => {
    const { data } = await deleteLanguage();
    if (data?.deleteLanguage) {
      showMessage({
        message: data.deleteLanguage.message,
        type: data.deleteLanguage.status as 'success' | 'error',
      });
    } else {
      showMessage({
        message:
          'Ocorreu um erro ao deletar o idioma. Tente novamente mais tarde.',
        type: 'error',
      });
    }
  };

  return (
    <ConfirmationDialog
      title="Excluir Idioma"
      description="Tem certeza que deseja excluir esse Idioma?"
      type="danger"
      onConfirm={onDelete}
      loading={loading}
      elementAction={
        <IconButton>
          <Delete />
        </IconButton>
      }
    />
  );
}
