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
      bio
      role
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

interface IUser {
  username: string;
  updatedAt: string;
  type: 'developer' | 'recruiter';
  name: string;
  id: string;
  bio: string;
  email: string;
  createdAt: string;
  cover_url: string;
  avatar_url: string;
}

interface IResult {
  getUserByEmail: {
    user: IUser;
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
    data: data?.getUserByEmail?.user || null,
    loading,
    error,
  };
};
