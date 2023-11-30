import { gql, useQuery } from '@apollo/client';

export const GET_JOBS_BY_USER = gql`
  query GetJobsByUser($input: GetJobsByUserInput!) {
    getJobsByUser(input: $input) {
      status
      message
      jobs {
        id
        company
        name
        description
        startDate
        endDate
        isCurrent
        userId
        technologies {
          id
          name
        }
      }
    }
  }
`;

export interface ITech {
  id: string;
  name: string;
}

export interface IJob {
  userId: string;
  updatedAt: string;
  startDate: string;
  name: string;
  isCurrent: boolean;
  id: string;
  description: string;
  endDate: string;
  company: string;
  technologies: ITech[];
}

interface IVariables {
  input: {
    userId?: string;
    username?: string;
  };
}

interface IResult {
  getJobsByUser: {
    status: string;
    message: string;
    jobs: IJob[];
  };
}

interface IUseGetJobsByUser {
  userId?: string;
  username?: string;
}

export const useGetJobsByUser = ({ userId, username }: IUseGetJobsByUser) => {
  const { data, loading, error } = useQuery<IResult, IVariables>(
    GET_JOBS_BY_USER,
    {
      variables: {
        input: {
          userId,
          username,
        },
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  return {
    data: data?.getJobsByUser,
    loading,
    error,
  };
};
