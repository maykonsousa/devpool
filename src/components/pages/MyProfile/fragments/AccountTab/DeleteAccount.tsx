import { ConfirmationDialog } from '@/components/ConfimationDialog';
import { useDeleteAccount, useFeedback, useSession } from '@/hooks';
import React, { useCallback } from 'react';

export function DeleteAccount() {
  const { deleteAccount, loading } = useDeleteAccount();
  const { showMessage } = useFeedback();
  const { signOut } = useSession();
  const handleDeleteAccount = useCallback(async () => {
    const { data } = await deleteAccount();

    if (data?.deleteUser?.status === 'success') {
      showMessage({ message: data.deleteUser.message, type: data.deleteUser.status });
      setTimeout(() => {
        signOut();
      }, 3000);
    } else {
      showMessage({
        message: data?.deleteUser?.message || 'Falha ao excluir conta. Tente novamente mais tarde',
        type: 'error',
      });
    }
  }, [deleteAccount, showMessage, signOut]);
  return (
    <ConfirmationDialog
      buttonLabel="Excluir conta"
      description="Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita."
      title="Excluir conta"
      type="danger"
      onConfirm={handleDeleteAccount}
      loading={loading}

    />
  );
}
