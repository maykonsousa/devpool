import { gql, useMutation } from '@apollo/client';

const DELETE_LANGUAGE = gql`
  mutation DeleteLanguage($input: DeleteLanguageInput) {
    deleteLanguage(input: $input) {
      message
      status
    }
  }
`;

interface IResult {
  deleteLanguage: {
    message: string;
    status: string;
  };
}

interface IVariables {
  input: {
    languageId: string;
    userId: string;
  };
}

export const useDeleteLanguage = (variables: IVariables) => {
  const [deleteLanguage, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(DELETE_LANGUAGE, {
    variables,
    refetchQueries: ['GetLanguagesByUser', 'GetProfile'],
  });

  return {
    deleteLanguage,
    data: data?.deleteLanguage,
    loading,
    error,
  };
};
