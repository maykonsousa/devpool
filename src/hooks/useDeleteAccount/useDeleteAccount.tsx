import { gql, useMutation } from '@apollo/client';
import { useSession } from '../useSession';

const DELETE_ACCOUNT = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      status
      message
    }
  }
`;

interface IVariables {
  input: {
    userId: string;
  };
}

interface IResponse {
  deleteUser: {
    status: 'success' | 'error';
    message: string;
  };
}

export const useDeleteAccount = () => {
  const { user } = useSession();

  const [
    deleteAccount,
    {
      data,
      loading,
      error,
    },
  ] = useMutation<IResponse, IVariables>(DELETE_ACCOUNT, {
    variables: {
      input: {
        userId: user?.id || '',
      },
    },
  });

  return {
    deleteAccount,
    data,
    loading,
    error,
  };
};
