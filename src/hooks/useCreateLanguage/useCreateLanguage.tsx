import { gql, useMutation } from '@apollo/client';

const CREATE_LANGUAGE = gql`
  mutation Mutation($input: LanguageInput) {
    createLanguage(input: $input) {
      status
      message
    }
  }
`;

interface IVariables {
  input: {
    name: string;
    level: string;
    userId: string;
  };
}

interface IResult {
  createLanguage: {
    status: string;
    message: string;
  };
}

interface IUseCreateLanguage {
  variables: IVariables;
}

export const useCreateLanguage = ({ variables }: IUseCreateLanguage) => {
  const [createLanguage, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(CREATE_LANGUAGE, {
    variables,
    refetchQueries: ['GetLanguagesByUser', 'GetProfile'],
  });

  return {
    createLanguage,
    data,
    loading,
    error,
  };
};
