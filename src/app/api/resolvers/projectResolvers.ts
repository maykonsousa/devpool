/* eslint-disable @typescript-eslint/no-explicit-any */
import { createProjectService } from '../services/createProject.service';
import { deleteProjectUserService } from '../services/deleteProjectUser.service';
import { getProjectsByUserService } from '../services/getProjectsByUser.service';
import { updateProjectService } from '../services/updateProject.service';
import {
  ICreateProjectInput,
  IDeleteProjectInput,
  IGetProjectsByUserInput,
  IUpdateProjectInput,
} from '../types/ProjectTypes';

export const projectResolvers = {
  Query: {
    getProjectsByUser: async (_: any, args: IGetProjectsByUserInput) =>
      getProjectsByUserService(args.input),
  },
  Mutation: {
    createProject: async (_: any, args: ICreateProjectInput) =>
      createProjectService(args.input),
    deleteProjectUser: async (_: any, args: IDeleteProjectInput) =>
      deleteProjectUserService(args.input),
    updateProjectUser: async (_: any, args: IUpdateProjectInput) =>
      updateProjectService(args.input),
  },
};
