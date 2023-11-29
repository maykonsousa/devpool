import { shuffleArray } from '@/utils/shuffleArray';
import { gql, useQuery } from '@apollo/client';

const GET_PROFILES = gql`
  query GetAllUsers {
    getAllUsers {
      users {
        username
        type
        state
        seniority
        role
        name
        id
        email
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
interface IUserData {
  username: string;
  type: string;
  state: string;
  seniority: string;
  role: string;
  name: string;
  id: string;
  email: string;
  cover_url: string;
  city: string;
  bio: string;
  avatar_url: string;
  contacts: {
    twitter_url: string;
    linkedin_url: string;
    personal_website: string;
    instagram_url: string;
    github_url: string;
    cell_phone: string;
  };
}

export const useGetProfiles = () => {
  const { data, loading, error, refetch } = useQuery(GET_PROFILES, {
    fetchPolicy: 'no-cache',
  });

  const randonusers = shuffleArray<IUserData>(data?.getAllUsers?.users)?.slice(
    0,
    15,
  );

  return {
    data: randonusers,
    loading,
    error,
    refetch,
  };
};
