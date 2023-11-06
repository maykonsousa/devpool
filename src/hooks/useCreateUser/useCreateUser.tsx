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

type UserType = 'admin' | 'developer' | 'recruiter' ;

interface Ivariables {
  input: {
    name: string;
    email: string;
    type: UserType
    username: string
    avatar_url: string
    cover_url: string
    password: string

  };

}

type Status = 'success' | 'error'

interface IResponse {
  createUser: {
    status: Status;
    message: string;
  };
}

export const useCreateUser = (variables:Ivariables) => {
  const [createUser, { data, loading, error }] = useMutation<IResponse, Ivariables>(CREATE_USER, {
    variables,
  });

  return {
    createUser, data, loading, error,
  };
};
