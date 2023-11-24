import { gql, useMutation } from '@apollo/client';

const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      status
      message
    }
  }
`;

export interface IVariables {
  input: {
    id: string;
    data: {
      name?: string;
      password?: string;
      avatar_url?: string;
      bio?: string;
      role?: string;
      seniority?: string;
      city?: string;
      state?: string;
    };
  };
}

interface IResult {
  updateUser: {
    status: string;
    message: string;
  };
}

export const useUpdateUser = (variables: IVariables) => {
  const [updateUser, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_USER, {
    variables,
  });

  return {
    updateUser,
    data,
    loading,
    error,
  };
};
