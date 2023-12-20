import { ConfirmationDialog } from '@/components/ConfimationDialog';
import { useFeedback } from '@/hooks';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

interface IDeleteLanguageIconProps {
  languageId: string;
}

export function DeleteLanguageIcon({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  languageId,
}: IDeleteLanguageIconProps) {
  const { showMessage } = useFeedback();

  return (
    <ConfirmationDialog
      title="Excluir Idioma"
      description="Tem certeza que deseja excluir esse Idioma?"
      type="danger"
      onConfirm={() => {
        showMessage({
          message: 'Feature ainda não implementada!',
          type: 'error',
        });
      }}
      loading={false}
      elementAction={
        <IconButton>
          <Delete />
        </IconButton>
      }
    />
  );
}
