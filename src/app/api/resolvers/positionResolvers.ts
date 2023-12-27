/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { createPositionService } from '../services/createPosition.service';
import { ICreatePositionInput } from '../types/positionTypes';

/* eslint-disable @typescript-eslint/no-empty-function */
export const positionResolvers = {
  Query: {
    // getAllPositions: async () => {},
    // getPositionById: async (_: any, args: any) => {},
    // getPositionsByUser: async (_: any, args: any) => {},
  },
  Mutation: {
    createPosition: async (_: any, args: ICreatePositionInput) => {
      return createPositionService({ data: args.input });
    },
    // updatePosition: async (_: any, args: any) => {},
    // deletePosition: async (_: any, args: any) => {},
  },
};
