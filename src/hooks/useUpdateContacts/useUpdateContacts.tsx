import { gql, useMutation } from '@apollo/client';

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
  const [updateContacts, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_CONTACTS, {
    refetchQueries: ['GetContacts'],
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
