/* eslint-disable @typescript-eslint/no-explicit-any */
import { createProjectService } from '../services/createProject.service';
import { createUserService } from '../services/createUser.service';
import { getAllTechnologies } from '../services/getAllTechnologies.service';
import { getAllUsersService } from '../services/getAllUsers.service';
import { getProjectsByUser } from '../services/getProjectsByUser.service';
import { getRolesService } from '../services/getRoles.service';
import { getUserByEmail } from '../services/getUserByEmail.service';
import { updateUserService } from '../services/updateUser.service';
import { ICreateProjectInput, IGetProjectsByUserInput } from '../types/ProjectTypes';
import { IGetUserByEmailInput, IUpdateUserInput, IcreateUserInput } from '../types/UsersTypes';

export const resolvers = {

  Query: {
    getAllUsers: async () => getAllUsersService(),
    getUserByEmail: async (_:any, args: IGetUserByEmailInput) => getUserByEmail(args.input.email),
    getRoles: async () => getRolesService(),
    getTechnologies: async () => getAllTechnologies(),
    getProjectsByUser: async (
      _:any,
      args: IGetProjectsByUserInput,
    ) => getProjectsByUser(args.input.userId),

  },

  Mutation: {
    createUser: async (_:any, args: IcreateUserInput) => createUserService(args.input),
    createProject: async (_:any, args:ICreateProjectInput) => createProjectService(args.input),
    updateUser: async (_:any, args:IUpdateUserInput) => updateUserService(args.input),
  },

};
