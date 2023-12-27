import { gql, useMutation } from '@apollo/client';

const UPDATE_JOB = gql`
  mutation UpdateJobUser($input: UpdateJobInput) {
    updateJobUser(input: $input) {
      message
      status
    }
  }
`;

interface IVariables {
  input: {
    data: {
      company?: string;
      description?: string;
      endDate?: Date;
      id: string;
      isCurrent?: boolean;
      name?: string;
      startDate?: Date;
      userId: string;
      technologies?: string[];
    };
  };
}

interface IResult {
  updateJobUser: {
    message: string;
    status: string;
  };
}

interface IUseUpdateJob {
  variables: IVariables;
}

export const useUpdateJob = ({ variables }: IUseUpdateJob) => {
  const [updateJob, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_JOB, {
    variables,
    refetchQueries: ['GetJobsByUser', 'GetProfile'],
  });

  return { updateJob, data, loading, error };
};
