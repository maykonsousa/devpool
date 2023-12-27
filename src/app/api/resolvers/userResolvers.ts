/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUserService } from '../services/createUser.service';
import { deleteUserService } from '../services/deleteUser.service';
import { getAllUsersService } from '../services/getAllUsers.service';
import { getLinkedinUserByTokenService } from '../services/getLinkedinUserByToken.service';
import { getProfileService } from '../services/getProfile.service';
import { getRecruiterByIdService } from '../services/getRecruiterById.service';
import { getUserByEmailService } from '../services/getUserByEmail.service';
import { getUserByUsernameService } from '../services/getUserByUsername.service';
import { getUsersByFilterService } from '../services/getUsersByFilter.service';
import { updateUserService } from '../services/updateUser.service';
import {
  IUpdateUserInput,
  IDeleteUserInput,
  IgetUserByUsernameInput,
  IGetProfileInput,
  IGetUserByEmailInput,
  IGetUsersByFilterInput,
  IcreateUserInput,
  IGetLinkedinUserInput,
  IGetRecruiterByIdInput,
} from '../types/UsersTypes';

export const userResolvers = {
  Query: {
    getAllUsers: async () => getAllUsersService(),
    getUserByEmail: async (_: any, args: IGetUserByEmailInput) =>
      getUserByEmailService(args.input.email),
    getProfile: async (_: any, args: IGetProfileInput) =>
      getProfileService(args.input),
    getUserByUsername: async (_: any, args: IgetUserByUsernameInput) =>
      getUserByUsernameService(args.input),
    getusersByFilter: async (_: any, args: IGetUsersByFilterInput) => {
      return getUsersByFilterService(args.input);
    },
    getLinkedinUserByToken: async (_: any, args: IGetLinkedinUserInput) =>
      getLinkedinUserByTokenService(args.input),
    getRecruiterById: async (_: any, args: IGetRecruiterByIdInput) =>
      getRecruiterByIdService(args.input),
  },

  Mutation: {
    createUser: async (_: any, args: IcreateUserInput) =>
      createUserService(args.input),
    updateUser: async (_: any, args: IUpdateUserInput) =>
      updateUserService(args.input),
    deleteUser: async (_: any, args: IDeleteUserInput) =>
      deleteUserService(args.input.userId),
  },
};
