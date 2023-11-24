'use client';

import { gql, useQuery } from '@apollo/client';

const GET_USER_BY_EMAIL = gql`
  query GetUserByUsername($input: GetUserByUsernameInput!) {
    getUserByUsername(input: $input) {
      user {
        username
        updatedAt
        type
        name
        id
        bio
        role
        seniority
        city
        state
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
    username: string;
  };
}

interface IUser {
  username: string;
  updatedAt: string;
  type: 'developer' | 'recruiter';
  name: string;
  id: string;
  bio: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
  email: string;
  createdAt: string;
  cover_url: string;
  avatar_url: string;
}

interface IResult {
  getUserByUsername: {
    user: IUser;
    status: string;
    message: string;
  };
}

interface IUseGetUserByUsername {
  variables: IVariables;
}

export const useGetUserByUsername = ({ variables }: IUseGetUserByUsername) => {
  const { data, loading, error, refetch } = useQuery<IResult, IVariables>(
    GET_USER_BY_EMAIL,
    {
      variables,
    },
  );

  return {
    data: data?.getUserByUsername?.user || null,
    loading,
    error,
    refetch,
  };
};
