/* eslint-disable no-console */

interface ILocale {
  country: string;
  language: string;
}
interface ILinkedinUser {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: ILocale;
  email: string;
  email_verified: boolean;
}

interface IGetLinkedinUserByTokenService {
  token: string;
}

export const getLinkedinUserByTokenService = async ({
  token,
}: IGetLinkedinUserByTokenService) => {
  try {
    const response = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    return {
      linkedinUserData: data as ILinkedinUser,
      message: 'User data fetched successfully',
      status: 'success',
    };
  } catch (error) {
    console.error(error);
    return {
      linkedinUserData: null,
      message: 'Error fetching user data',
      status: 'error',
    };
  }
};
