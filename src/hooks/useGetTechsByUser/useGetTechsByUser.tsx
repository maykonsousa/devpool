import { gql, useQuery } from '@apollo/client';

const GET_TECHS_BY_USER = gql`
  query GetTechsByUser($input: GetTechsByUserInput) {
    getTechsByUser(input: $input) {
      techs {
        techId
        name
        id
      }
      status
      message
    }
  }
`;

interface ITechnologies {
  id: string;
  techId: string;
  name: string;
}

interface IVariables {
  input: {
    userId: string;
  };
}

interface IResult {
  getTechsByUser: {
    techs: ITechnologies[];
    status: string;
    message: string;
  };
}

interface IUseGetTechsByUser {
  variables: IVariables;
}

export const useGetTechsByUser = ({ variables }: IUseGetTechsByUser) => {
  const { data, loading, error, refetch } = useQuery<IResult, IVariables>(
    GET_TECHS_BY_USER,
    {
      variables,
    },
  );

  return {
    data: data?.getTechsByUser,
    loading,
    error,
    refetch,
  };
};
