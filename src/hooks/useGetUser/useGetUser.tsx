'use client';

import { gql, useQuery } from '@apollo/client';

const GET_USER_BY_USERNAME = gql`
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
        current_company
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

const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($input: GetUserByEmailInput!) {
    getUserByEmail(input: $input) {
      message
      status
      user {
        avatar_url
        current_company
        bio
        city
        cover_url
        createdAt
        email
        id
        name
        pcd
        role
        seniority
        state
        type
        updatedAt
        username
      }
    }
  }
`;

interface IUsernameVariables {
  input: {
    username: string;
  };
}

interface IEmailVariables {
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
  role: string;
  seniority: string;
  current_company: string;
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

interface IUseGetUser {
  usernameVariables?: IUsernameVariables;
  emailVariables?: IEmailVariables;
}

export const useGetUser = ({
  usernameVariables,
  emailVariables,
}: IUseGetUser) => {
  const {
    data: userNameData,
    loading: usernameLoading,
    error: usernameError,
    refetch: userNameRefetch,
  } = useQuery<IResult, IUsernameVariables>(GET_USER_BY_USERNAME, {
    variables: usernameVariables,
    skip: !usernameVariables?.input?.username,
  });

  const {
    data: emailData,
    loading: emailLoading,
    error: emailError,
    refetch: emailRefetch,
  } = useQuery(GET_USER_BY_EMAIL, {
    variables: emailVariables,
    skip: !emailVariables?.input?.email,
  });

  return {
    data:
      userNameData?.getUserByUsername?.user ||
      emailData?.getUserByEmail?.user ||
      null,
    loading: usernameLoading || emailLoading,
    error: usernameError || emailError,
    refetch: userNameRefetch || emailRefetch,
  };
};
