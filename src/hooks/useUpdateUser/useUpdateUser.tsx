import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { GET_PROFILE } from '../useGetProfile/useGetProfile';

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
      current_company?: string;
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
  const { data: session } = useSession();
  const [updateUser, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_USER, {
    variables,
    refetchQueries: [
      {
        query: GET_PROFILE,
        variables: {
          input: {
            username: session?.user.name,
          },
        },
      },
    ],
  });

  return {
    updateUser,
    data,
    loading,
    error,
  };
};
