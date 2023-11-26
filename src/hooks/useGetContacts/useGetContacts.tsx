import { gql, useQuery } from '@apollo/client';

const GET_CONTACTS = gql`
  query GetContacts($input: GetContactsInput) {
    getContacts(input: $input) {
      status
      message
      contacts {
        id
        userId
        twitter_url
        personal_website
        linkedin_url
        instagram_url
        github_url
        cell_phone
      }
    }
  }
`;

export interface IContacts {
  id: string;
  userId: string;
  twitter_url: string;
  personal_website: string;
  linkedin_url: string;
  instagram_url: string;
  github_url: string;
  cell_phone: string;
}

interface IVariables {
  input: {
    userId?: string;
    username?: string;
  };
}

interface IResult {
  getContacts: {
    status: string;
    message: string;
    contacts: IContacts;
  };
}

interface IUseGetContacts {
  variables: IVariables;
}

export const useGetContacts = ({ variables }: IUseGetContacts) => {
  const { data, loading, error, refetch } = useQuery<IResult, IVariables>(
    GET_CONTACTS,
    {
      variables,
    },
  );

  return {
    data: data?.getContacts,
    loading,
    error,
    refetch,
  };
};
