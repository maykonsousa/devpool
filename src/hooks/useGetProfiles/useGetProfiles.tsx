import { gql, useQuery } from '@apollo/client';

const GET_PROFILES = gql`
  query GetAllUsers {
    getAllUsers {
      users {
        username
        updatedAt
        type
        state
        seniority
        role
        name
        id
        email
        createdAt
        cover_url
        city
        bio
        avatar_url
        contacts {
          twitter_url
          linkedin_url
          personal_website
          instagram_url
          github_url
          cell_phone
        }
      }
      status
      message
    }
  }
`;

export const useGetProfiles = () => {
  const { data, loading, error, refetch } = useQuery(GET_PROFILES);

  return {
    data: data?.getAllUsers?.users,
    loading,
    error,
    refetch,
  };
};
