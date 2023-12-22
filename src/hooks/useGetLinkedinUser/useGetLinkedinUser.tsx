import { gql, useQuery } from '@apollo/client';

const GET_LINKEDIN_USER = gql`
  query LinkedinUserData($input: GetLinkedinUserInput!) {
    getLinkedinUserByToken(input: $input) {
      linkedinUserData {
        email
        email_verified
        family_name
        given_name
        name
        picture
        sub
        locale {
          language
          country
        }
      }
      message
      status
    }
  }
`;

interface IVariables {
  input: {
    token: string;
  };
}

interface ILinkedinUserData {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string;
  picture: string;
  sub: string;
  locale: {
    language: string;
    country: string;
  };
}

interface IResult {
  getLinkedinUserByToken: {
    linkedinUserData: ILinkedinUserData;
    message: string;
    status: string;
  };
}

interface IUseGetLinkedinUser {
  variables: IVariables;
}

export const useGetLinkedinUser = ({ variables }: IUseGetLinkedinUser) => {
  const { data, loading, error } = useQuery<IResult, IVariables>(
    GET_LINKEDIN_USER,
    { variables },
  );

  return { data: data?.getLinkedinUserByToken, loading, error };
};
