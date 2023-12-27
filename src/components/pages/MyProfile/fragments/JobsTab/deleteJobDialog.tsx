import { ConfirmationDialog } from '@/components/CopyIcon/ConfimationDialog';
import { useDeleteJob, useFeedback } from '@/hooks';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

interface IDeleteJobDialogProps {
  userId: string;
  jobId: string;
}

export function DeleteJobDialog({ jobId, userId }: IDeleteJobDialogProps) {
  const { showMessage } = useFeedback();
  const { deleteJob, loading } = useDeleteJob({
    variables: {
      input: {
        userId,
        jobId,
      },
    },
  });

  const handleDeleteJob = async () => {
    const { data } = await deleteJob();
    showMessage({
      message:
        data?.deleteJobUser?.message || 'Experiência removida com sucesso',
      type: data?.deleteJobUser?.status === 'success' ? 'success' : 'error',
    });
  };
  return (
    <ConfirmationDialog
      title="Remover experiência"
      description="Tem certeza que deseja remover essa experiência?"
      buttonLabel="Remover"
      type="danger"
      onConfirm={handleDeleteJob}
      elementAction={
        <IconButton>
          <Delete />
        </IconButton>
      }
      loading={loading}
    />
  );
}
