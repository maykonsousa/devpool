import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';

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

export const useCreateUser = (variables:Ivariables) => {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;

  const newVariables = {
    ...variables,
    input: {
      ...variables.input,
      name,
      email,
    },
  };

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    variables: newVariables,
  });

  return {
    createUser, data, loading, error,
  };
};
