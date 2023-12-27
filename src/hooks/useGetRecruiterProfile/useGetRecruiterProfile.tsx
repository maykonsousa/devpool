import { gql, useQuery } from '@apollo/client';

const GET_RECRUITER_PROFILE = gql`
  query GetRecruiterById($input: GetRecruiterByIdInput!) {
    getRecruiterById(input: $input) {
      message
      status
      recruiter {
        avatar_url
        company
        contacts {
          github_url
          cell_phone
          createdAt
          email
          id
          instagram_url
          linkedin_url
          personal_website
          twitter_url
          updatedAt
          userId
        }
        email
        id
        name
        role
        seniority
      }
    }
  }
`;

interface IVariables {
  input: {
    id: string;
    userId: string;
  };
}

interface IRecruiter {
  avatar_url: string;
  company: string;
  contacts: {
    github_url: string;
    cell_phone: string;
    createdAt: string;
    email: string;
    id: string;
    instagram_url: string;
    linkedin_url: string;
    personal_website: string;
    twitter_url: string;
    updatedAt: string;
    userId: string;
  };
  email: string;
  id: string;
  name: string;
  role: string;
  seniority: string;
}

interface IResult {
  getRecruiterById: {
    message: string;
    status: string;
    recruiter: IRecruiter;
  };
}

interface IUseGetRecruiterProfile {
  variables: IVariables;
}

export const useGetRecruiterProfile = ({
  variables,
}: IUseGetRecruiterProfile) => {
  const { data, loading, error, refetch } = useQuery<IResult, IVariables>(
    GET_RECRUITER_PROFILE,
    {
      variables,
      skip: !variables.input.userId,
    },
  );

  return {
    data: data?.getRecruiterById,
    loading,
    error,
    refetch,
  };
};
