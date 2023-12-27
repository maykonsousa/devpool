import { allResolvers } from './allResolvers';
import { languageResolvers } from './languageResolvers';
import { userResolvers } from './userResolvers';
import { positionResolvers } from './positionResolvers';
import { jobsResolvers } from './jobsResolvers';

export const resolvers = {
  Query: {
    ...allResolvers.Query,
    ...languageResolvers.Query,
    ...userResolvers.Query,
    ...positionResolvers.Query,
    ...jobsResolvers.Query,
  },
  Mutation: {
    ...allResolvers.Mutation,
    ...languageResolvers.Mutation,
    ...userResolvers.Mutation,
    ...positionResolvers.Mutation,
    ...jobsResolvers.Mutation,
  },
};
