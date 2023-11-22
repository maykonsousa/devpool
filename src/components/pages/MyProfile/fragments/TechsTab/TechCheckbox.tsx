import { Checkbox } from '@/components/Checkbox';
import { useFeedback, useUpdateTechnology } from '@/hooks';
import React from 'react';

interface TechCheckboxProps {
  userId: string;
  techId: string;
  isChecked: boolean;
  techName: string;
  reset: () => void;
}

export function TechCheckbox({
  userId, techId, isChecked, techName, reset,
}:TechCheckboxProps) {
  const { showMessage } = useFeedback();
  const { updateTechnology, loading } = useUpdateTechnology({
    variables: {
      input: {
        technologyId: techId,
        userId,
      },
    },
  });

  const handleChange = async () => {
    const { data } = await updateTechnology();
    reset();
    showMessage({
      type: data?.addOrRemoveTechnologyUser?.status === 'success' ? 'success' : 'error',
      message: data?.addOrRemoveTechnologyUser?.message || 'Erro ao atualizar tecnologia',
    });
  };
  return (
    <Checkbox
      label={techName}
      checked={isChecked}
      onChange={handleChange}
      loading={loading}

    />
  );
}
