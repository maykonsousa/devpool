import { gql, useMutation } from '@apollo/client';
import { useSession } from '../useSession';

const DELETE_PROJECT = gql`
  mutation DeleteProjectUser($input: DeleteProjectInput!) {
    deleteProjectUser(input: $input) {
      status
      message
    }
  }
`;

interface IVariables {
  input: {
    userId: string;
    projectId: string;
  };
}

interface IResult {
  deleteProjectUser: {
    status: string;
    message: string;
  };
}

export const useDeleteProject = (projectId:string) => {
  const { user } = useSession();
  const [
    deleteProject,
    { data, loading, error },
  ] = useMutation<IResult, IVariables >(DELETE_PROJECT, {
    variables: {
      input: {
        userId: user?.id || '',
        projectId,
      },
    },
  });

  return {
    deleteProject,
    data,
    loading,
    error,
  };
};
