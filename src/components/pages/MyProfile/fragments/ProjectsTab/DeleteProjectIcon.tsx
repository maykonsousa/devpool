/* eslint-disable no-console */
import { ConfirmationDialog } from '@/components/ConfimationDialog';
import {
  useDeleteProject,
  useFeedback,
  useGetProjectsByUser,
  useSession,
} from '@/hooks';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useCallback } from 'react';

interface IDeleteProjectIconProps {
  projectId: string;
}

export function DeleteProjectIcon({ projectId }: IDeleteProjectIconProps) {
  const { deleteProject, loading } = useDeleteProject(projectId);
  const { user } = useSession();
  const { refetch } = useGetProjectsByUser({
    variables: {
      input: {
        userId: user?.id,
      },
    },
  });
  const { showMessage } = useFeedback();

  const handleDeleteProject = useCallback(async () => {
    const { data } = await deleteProject();

    if (data?.deleteProjectUser?.status === 'success') {
      showMessage({
        message: data.deleteProjectUser.message,
        type: data.deleteProjectUser.status,
      });
      refetch();
    } else {
      showMessage({
        message:
          data?.deleteProjectUser?.message ||
          'Falha ao excluir projeto. Tente novamente mais tarde',
        type: 'error',
      });
    }
  }, [deleteProject, showMessage, refetch]);
  return (
    <ConfirmationDialog
      description="Tem certeza que deseja excluir esse projeto?"
      title="Excluir projeto"
      type="danger"
      onConfirm={handleDeleteProject}
      elementAction={
        <IconButton>
          <Delete />
        </IconButton>
      }
      loading={loading}
    />
  );
}
