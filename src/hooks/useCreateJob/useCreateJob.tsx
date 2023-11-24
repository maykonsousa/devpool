import { JobInputData } from '@/app/api/types/JobTypes';
import { gql, useMutation } from '@apollo/client';

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
  const [createJob, { data, loading, error }] = useMutation<ICreateJobResult>(
    CREATE_JOB,
    {
      onCompleted,
      onError,
      variables,
      refetchQueries: ['GetJobsByUser'],
    },
  );

  return {
    createJob,
    data,
    loading,
    error,
  };
};
