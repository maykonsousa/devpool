import { gql, useQuery } from '@apollo/client';

export const GET_PROFILE = gql`
  query GetProfile($input: GetProfileInput!) {
    getProfile(input: $input) {
      user {
        id
        name
        username
        role
        seniority
        city
        state
        bio
        pcd
        avatar_url
        cover_url
        technologies {
          name
          id
        }
        courses {
          name
          school
          type
          progress
          id
        }
        contacts {
          twitter_url
          personal_website
          linkedin_url
          instagram_url
          github_url
          cell_phone
        }
        languages {
          id
          name
          level
        }
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

interface IUseGetProfile {
  variables: IVariables;
}

interface ITechnology {
  name: string;
  id: string;
}

interface ICourse {
  name: string;
  school: string;
  type:
    | 'BOOTCAMP'
    | 'FREECOURSE'
    | 'DOCTORATE'
    | 'GRADUATION'
    | 'MASTER'
    | 'POSTGRADUATE'
    | 'TECHNICAL'
    | 'TECHNOLOGIST'
    | 'OTHER';
  progress: number;
  id: string;
}

interface IContact {
  twitter_url: string;
  personal_website: string;
  linkedin_url: string;
  instagram_url: string;
  github_url: string;
  cell_phone: string;
}

interface ILanguage {
  id: string;
  name: string;
  level: string;
}

interface IUser {
  id: string;
  name: string;
  username: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
  bio: string;
  pcd: boolean;
  avatar_url: string;
  cover_url: string;
  technologies: ITechnology[];
  courses: ICourse[];
  languages: ILanguage[];
  contacts: IContact;
}

interface IResult {
  getProfile: {
    user: IUser;
    status: string;
    message: string;
  };
}

export const useGetProfile = ({ variables }: IUseGetProfile) => {
  const { data, loading, error, refetch } = useQuery<IResult, IVariables>(
    GET_PROFILE,
    {
      variables,
    },
  );

  return {
    data: data?.getProfile,
    loading,
    error,
    refetch,
  };
};
