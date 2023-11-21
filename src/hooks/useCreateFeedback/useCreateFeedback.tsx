import { gql, useMutation } from '@apollo/client';

const CREATE_FEEDBACK = gql`
  mutation CreateFeedback($input: CreateFeedbackInput) {
  createFeedback(input: $input) {
    status
    message
  }
}
`;

interface Ifeedback {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface IVariables {
  input: {
    feedback: Ifeedback;
  }
}

interface IResult {
  createFeedback: {
    status: string;
    message: string;
  }
}

interface IUseCreateFeedback {
  variables: IVariables;
  onCompleted: () => void;
  onError: () => void;
}

export const useCreateFeedback = ({ variables, onCompleted, onError }:IUseCreateFeedback) => {
  const [createFeedback, {
    data,
    loading,
    error,
  }] = useMutation<IResult, IVariables>(CREATE_FEEDBACK, {
    variables,
    onCompleted,
    onError,
  });

  return {
    createFeedback,
    data,
    loading,
    error,
  };
};
