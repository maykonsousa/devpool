import { gql, useMutation } from '@apollo/client';

const UPDATE_LANGUAGE = gql`
  mutation UpdateLanguage($input: UpdateLanguageInput) {
    updateLanguage(input: $input) {
      message
      status
    }
  }
`;

interface IResult {
  updateLanguage: {
    message: string;
    status: string;
  };
}

interface IVariables {
  input: {
    languageId: string;
    userId: string;
    newLevel: string;
  };
}

export const useUpdateLanguage = (variables: IVariables) => {
  const [updateLanguage, { data, error, loading }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_LANGUAGE, {
    variables,
    refetchQueries: ['GetLanguagesByUser'],
  });

  return { updateLanguage, data, error, loading };
};
