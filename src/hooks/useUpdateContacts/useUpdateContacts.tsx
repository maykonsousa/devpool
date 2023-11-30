import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { GET_PROFILE } from '../useGetProfile/useGetProfile';

const UPDATE_CONTACTS = gql`
  mutation UpdateContacts($input: UpdateContactsInput) {
    updateContacts(input: $input) {
      status
      message
    }
  }
`;

interface IData {
  linkedin_url: string;
  instagram_url: string;
  github_url: string;
  personal_website: string;
  cell_phone: string;
  twitter_url?: string;
}

interface IVariables {
  input: {
    userId: string;
    data: IData;
  };
}

interface IResult {
  updateContacts: {
    status: string;
    message: string;
  };
}

interface IUseUpdateContacts {
  variables: IVariables;
  onCompleted?: () => void;
  onError?: () => void;
}

export const useUpdateContacts = ({
  variables,
  onCompleted,
  onError,
}: IUseUpdateContacts) => {
  const { data: session } = useSession();
  const [updateContacts, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_CONTACTS, {
    refetchQueries: [
      'GetContacts',
      {
        query: GET_PROFILE,
        variables: {
          input: {
            username: session?.user.name,
          },
        },
      },
    ],
    variables,
    onCompleted,
    onError,
  });

  return {
    updateContacts,
    data: data?.updateContacts,
    loading,
    error,
  };
};
