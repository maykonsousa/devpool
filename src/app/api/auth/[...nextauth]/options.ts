/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import { authenticateService } from '../../services/authenticate.service';
import { getUserByUsernameService } from '../../services/getUserByUsername.service';

export const options: NextAuthOptions = {
  providers: [
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
      authorize: async (credentials: Record<'username' | 'password', string> | undefined, req: any): Promise<any> => {
        const { data: user } = await authenticateService({
          username: credentials?.username as string,
          password: credentials?.password as string,
        });

        if (user) {
          const {
            username: name, email, avatar_url, id, password, ...rest
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
    async signIn({
      user, account,
    }) {
      if (account?.provider === 'github') {
        const username = user?.name as string;
        const { status } = await getUserByUsernameService({ username });
        if (status === 'success') {
          return true;
        }

        return `/auth/error?access_token=${account?.access_token}`;
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
