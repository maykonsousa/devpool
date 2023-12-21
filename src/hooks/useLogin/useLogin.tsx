/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { gql, useQuery } from '@apollo/client';
import { signIn, useSession } from 'next-auth/react';
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

export const useLogin = () => {
  const { data, status } = useSession();
  const isGithubAuthenticated = status === 'authenticated' && data?.user?.email;

  const variables = useMemo(
    () => ({
      input: {
        email: isGithubAuthenticated ? data?.user?.email : '',
      },
    }),
    [data, isGithubAuthenticated],
  );

  const { loading, error } = useQuery(GET_USER_BY_EMAIL, {
    variables,
  });

  const handleGithubLogin = async () => {
    await signIn('github');
  };

  const handleLinkedinLogin = async () => {
    await signIn('linkedin');
  };

  const handleCredentialsLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await signIn('credentials', {
      username,
      password,
    });
  };

  return {
    handleGithubLogin,
    handleCredentialsLogin,
    handleLinkedinLogin,
    loading,
    error,
  };
};
