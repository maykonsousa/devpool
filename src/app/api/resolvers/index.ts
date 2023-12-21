import { allResolvers } from './allResolvers';
import { languageResolvers } from './languageResolvers';
import { userResolvers } from './userResolvers';

export const resolvers = {
  Query: {
    ...allResolvers.Query,
    ...languageResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...allResolvers.Mutation,
    ...languageResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};
