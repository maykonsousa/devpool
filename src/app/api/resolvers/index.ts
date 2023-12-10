import { allResolvers } from './allResolvers';
import { languageResolvers } from './languageResolvers';

export const resolvers = {
  Query: {
    ...allResolvers.Query,
    ...languageResolvers.Query,
  },
  Mutation: { ...allResolvers.Mutation, ...languageResolvers.Mutation },
};
