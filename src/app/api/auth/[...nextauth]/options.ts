/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import LinkedInProvider from 'next-auth/providers/linkedin';
import { authenticateService } from '../../services/authenticate.service';
import { getUserByUsernameService } from '../../services/getUserByUsername.service';
import { getUserByEmailService } from '../../services/getUserByEmail.service';

export const options: NextAuthOptions = {
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
      authorization: { params: { scope: 'profile email openid' } },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          firstname: profile.given_name,
          lastname: profile.family_name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile: (profile: any) => ({
        id: profile.id,
        name: profile.login,
        email: profile.email,
        image: profile.avatar_url,
      }),
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (
        credentials: Record<'username' | 'password', string> | undefined,
        req: any,
      ): Promise<any> => {
        const { data: user } = await authenticateService({
          username: credentials?.username as string,
          password: credentials?.password as string,
        });

        if (user) {
          const {
            username: name,
            email,
            avatar_url,
            id,
            password,
            ...rest
          } = user;
          return {
            id,
            name,
            email,
            image: avatar_url,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'github') {
        const username = user?.name as string;
        const { status } = await getUserByUsernameService({ username });
        if (status === 'success') {
          return true;
        }

        return `/auth/register?userType=developer&accessToken=${account?.access_token}`;
      }

      if (account?.provider === 'linkedin') {
        const email = user?.email as string;
        const { status } = await getUserByEmailService(email);
        if (status === 'success') {
          return true;
        }

        return `/auth/register?userType=recruiter&accessToken=${account?.access_token}`;
      }

      return true;
    },
  },

  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user',
  },
};
