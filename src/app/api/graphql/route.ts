import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from '../schemas';
import { prisma } from '../database';
import { resolvers } from '../resolvers';

export type Context = {
token: string;
prisma: PrismaClient
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req:NextApiRequest, res:NextApiResponse) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
