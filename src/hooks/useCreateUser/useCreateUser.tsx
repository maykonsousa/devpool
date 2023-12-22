'use client';

import { gql, useMutation } from '@apollo/client';

const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      status
      message
    }
  }
`;

type UserType = 'admin' | 'developer' | 'recruiter';

interface Ivariables {
  input: {
    name: string;
    email: string;
    type: UserType;
    username: string;
    current_company?: string;
    avatar_url: string;
    cover_url: string;
    password: string;
    role: string;
    seniority: string;
    city: string;
    state: string;
    bio: string;
    pcd: boolean;
  };
}

type Status = 'success' | 'error';

interface IResponse {
  createUser: {
    status: Status;
    message: string;
  };
}

export const useCreateUser = (variables: Ivariables) => {
  const [createUser, { data, loading, error }] = useMutation<
    IResponse,
    Ivariables
  >(CREATE_USER, {
    variables,
    fetchPolicy: 'no-cache',
  });

  return {
    createUser,
    data,
    loading,
    error,
  };
};
