/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserService } from '../services/createUser.service';
import { getAllUsersService } from '../services/getAllUsers.service';
import { getRolesService } from '../services/getRoles.service';
import { getUserByEmail } from '../services/getUserByEmail.service';
import { IGetUserByEmailInput, IcreateUserInput } from '../types/UsersTypes';

export const resolvers = {

  Query: {
    hello: async () => ({ message: 'Hello World!' }),
    getAllUsers: async () => getAllUsersService(),
    getUserByEmail: async (_:any, args: IGetUserByEmailInput) => getUserByEmail(args.input.email),
    getRoles: async () => getRolesService(),

  },

  Mutation: {
    createUser: async (_:any, args: IcreateUserInput) => createUserService(args.input),

  },

};
