/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserService } from '../services/createUser.service';
import { getAllUsersService } from '../services/getAllUsers.service';
import { IcreateUserInput } from '../types/UsersTypes';

export const resolvers = {

  Query: {
    hello: async () => ({ message: 'Hello World!' }),
    getAllUsers: async () => getAllUsersService(),

  },

  Mutation: {
    createUser: async (_:any, args: IcreateUserInput) => createUserService(args.input),

  },

};
