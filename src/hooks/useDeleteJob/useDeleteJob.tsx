import { gql, useMutation } from '@apollo/client';

const DELETE_JOB = gql`
  mutation DeleteJobUser($input: DeleteJobInput) {
    deleteJobUser(input: $input) {
      status
      message
    }
  }
`;

interface IVariables {
  input: {
    userId: string;
    jobId: string;
  };
}

interface IDeleteJobInput {
  variables: IVariables;
  onCompleted?: () => void;
  onError?: () => void;
}

interface IResult {
  deleteJobUser: {
    status: string;
    message: string;
  };
}

export function useDeleteJob({
  variables,
  onCompleted,
  onError,
}: IDeleteJobInput) {
  const [deleteJob, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(DELETE_JOB, {
    variables,
    onCompleted,
    onError,
    refetchQueries: ['GetJobsByUser'],
  });

  return {
    deleteJob,
    data: data?.deleteJobUser,
    loading,
    error,
  };
}
