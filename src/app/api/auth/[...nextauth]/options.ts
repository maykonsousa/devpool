/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider, { } from 'next-auth/providers/github';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile: (profile) => ({
        id: profile.id,
        name: profile.login,
        email: profile.email,
        image: profile.avatar_url,
      }),

    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { type: 'password', placeholder: '********' },
      },
      authorize: async (credentials) => {
        const user = {
          id: '1',
          username: 'teste',
          password: 'teste',
        };

        if (credentials?.username === user.username && credentials?.password === user.password) {
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user',
  },

};
