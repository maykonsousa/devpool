import { JobInputData } from '@/app/api/types/JobTypes';
import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { GET_PROFILE } from '../useGetProfile/useGetProfile';

const CREATE_JOB = gql`
  mutation CreateJob($input: CreateJobInput!) {
    createJob(input: $input) {
      status
      message
      id
    }
  }
`;

interface ICreateJobResult {
  createJob: {
    status: string;
    message: string;
    jobId: string;
  };
}

interface IVariables {
  input: {
    userId: string;
    data: JobInputData;
    technologies: string[];
  };
}

interface IUseCreateJob {
  variables: IVariables;
  onCompleted: () => void;
  onError: () => void;
}

export const useCreateJob = ({
  onCompleted,
  onError,
  variables,
}: IUseCreateJob) => {
  const { data: session } = useSession();
  const [createJob, { data, loading, error }] = useMutation<ICreateJobResult>(
    CREATE_JOB,
    {
      onCompleted,
      onError,
      variables,
      refetchQueries: [
        'GetJobsByUser',
        {
          query: GET_PROFILE,
          variables: {
            input: {
              username: session?.user.name,
            },
          },
        },
      ],
    },
  );

  return {
    createJob,
    data,
    loading,
    error,
  };
};
