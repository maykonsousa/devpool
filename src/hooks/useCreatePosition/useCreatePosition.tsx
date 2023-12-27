import { gql, useMutation } from '@apollo/client';

const CREATE_POSITION = gql`
  mutation CreatePosition($input: CreatePositionInput) {
    createPosition(input: $input) {
      message
      status
    }
  }
`;

interface IVariables {
  input: {
    city: string;
    company: string;
    description: string;
    email: string;
    is_resposible: boolean;
    language: string;
    language_level: string;
    model: string;
    role: string;
    seniority: string;
    state: string;
    techs: string[];
    type: string;
    url: string;
    userId: string;
  };
}

interface IResult {
  createPosition: {
    message: string;
    status: string;
  };
}

interface IUseCreatePosition {
  variables: IVariables;
}

export const useCreatePosition = ({ variables }: IUseCreatePosition) => {
  const [createPosition, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(CREATE_POSITION, {
    variables,
    refetchQueries: ['GetPositionsByUser'],
  });

  return { createPosition, data, loading, error };
};
