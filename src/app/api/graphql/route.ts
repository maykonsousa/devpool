import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../schemas';
import { resolvers } from '../resolvers';

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req:NextApiRequest, res:NextApiResponse) => ({ req, res }),
});

export { handler as GET, handler as POST };
