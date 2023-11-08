export interface IGitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  email: string;
}
export const getGitHubUserByToken = async (token:string):Promise<IGitHubUser | null> => {
  try {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.status !== 200) {
      return null;
    }
    return {
      login: data.login,
      name: data.name,
      avatar_url: data.avatar_url,
      bio: data.bio,
      email: data.email,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};
