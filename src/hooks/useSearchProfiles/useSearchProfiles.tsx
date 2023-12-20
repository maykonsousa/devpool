import { gql, useQuery } from '@apollo/client';

const SEARCH_PROFILES = gql`
  query GetusersByFilter($input: GetUsersByFilterInput) {
    getusersByFilter(input: $input) {
      status
      message
      users {
        name
        role
        seniority
        id
        username
        city
        state
        avatar_url
      }
    }
  }
`;

interface IUser {
  name: string;
  role: string;
  seniority: string;
  id: string;
  username: string;
  city: string;
  state: string;
}

interface IResult {
  getusersByFilter: {
    status: string;
    message: string;
    users: IUser[];
  };
}

interface IVariables {
  input: {
    filters: {
      roles: string[] | null;
      seniorities: string[] | null;
      states: string[] | null;
      technologies: string[] | null;
      language: string | null;
      level: string | null;
    };
  };
}

interface IUseSearchProfiles {
  variables: IVariables;
}

export const useSearchProfiles = ({ variables }: IUseSearchProfiles) => {
  const { data, loading, error } = useQuery<IResult, IVariables>(
    SEARCH_PROFILES,
    {
      variables,
    },
  );

  return {
    data: data?.getusersByFilter,
    loading,
    error,
  };
};
