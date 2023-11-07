'use client';

import { gql, useQuery } from '@apollo/client';
import { useMemo } from 'react';

const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($input: GetUserByEmailInput!) {
    getUserByEmail(input: $input) {
    user {
      username
      updatedAt
      type
      name
      id
      email
      createdAt
      cover_url
      avatar_url
    }
    status
    message
  }
  }
`;

interface IVariables {
  input: {
    email: string;
  };
}

interface IResult {
  getUserByEmail: {
    user: {
      username: string;
      updatedAt: string;
      type: string;
      name: string;
      id: string;
      email: string;
      createdAt: string;
      cover_url: string;
      avatar_url: string;
    };
    status: string;
    message: string;
  };
}

export const useGetUserByEmail = (email:string) => {
  const variables:IVariables = useMemo(() => ({
    input: {
      email,
    },
  }), [email]);

  const { data, loading, error } = useQuery<IResult, IVariables>(GET_USER_BY_EMAIL, {
    variables,
  });

  return {
    data: data?.getUserByEmail?.user,
    loading,
    error,
  };
};
