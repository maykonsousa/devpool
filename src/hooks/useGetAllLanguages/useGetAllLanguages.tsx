import { gql, useQuery } from '@apollo/client';

export const GET_ALL_LANGUAGES = gql`
  query GetAllLanguages {
    getAllLanguages {
      status
      message
      languages {
        name
        id
      }
    }
  }
`;

interface IResult {
  getAllLanguages: {
    status: 'success' | 'error';
    message: string;
    languages: {
      name: string;
      id: string;
    }[];
  };
}

export const useGetAllLanguages = () => {
  const { data, loading, error } = useQuery<IResult>(GET_ALL_LANGUAGES);

  return { data: data?.getAllLanguages, loading, error };
};
