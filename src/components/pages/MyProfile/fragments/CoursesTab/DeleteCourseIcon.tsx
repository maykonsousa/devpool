import { ConfirmationDialog } from '@/components/ConfimationDialog';
import { useDeleteCourse, useFeedback, useGetCoursesByUser } from '@/hooks';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

interface IDeleteCourseIconProps {
  courseId: string;
  userId: string;
}

export function DeleteCourseIcon({ courseId, userId }: IDeleteCourseIconProps) {
  const { showMessage } = useFeedback();
  const { refetch } = useGetCoursesByUser(userId);
  const onCompleted = () => {
    showMessage({
      type: 'success',
      message: 'Curso excluído com sucesso',
    });
    refetch();
  };
  const onError = () => {
    showMessage({
      type: 'error',
      message: 'Erro ao excluir curso',
    });
  };
  const { deleteCourse, loading } = useDeleteCourse({
    variables: {
      input: {
        courseId,
        userId,
      },
    },
    onCompleted,
    onError,
  });

  const onDelete = async () => {
    await deleteCourse();
  };
  return (
    <ConfirmationDialog
      title="Excluir curso"
      description="Tem certeza que deseja excluir esse curso?"
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
