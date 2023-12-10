import { gql, useQuery } from '@apollo/client';

const GET_LANGUAGES_BY_USER = gql`
  query GetLanguagesByUser($input: getLanguagesByUserInput) {
    getLanguagesByUser(input: $input) {
      status
      message
      languages {
        userId
        name
        level
        id
      }
    }
  }
`;

interface ILanguage {
  userId: string;
  name: string;
  level: string;
  id: string;
}

interface IVariables {
  input: {
    userId?: string;
    username?: string;
  };
}

interface IResult {
  getLanguagesByUser: {
    status: string;
    message: string;
    languages: ILanguage[];
  };
}

interface IGetLanguagesByUser {
  variables: IVariables;
}

export const useGetLanguagesByUser = ({ variables }: IGetLanguagesByUser) => {
  const { data, loading, error } = useQuery<IResult, IVariables>(
    GET_LANGUAGES_BY_USER,
    {
      variables,
    },
  );

  return {
    data: data?.getLanguagesByUser,
    loading,
    error,
  };
};
