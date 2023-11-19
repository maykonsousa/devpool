/* eslint-disable @typescript-eslint/no-explicit-any */
import { createCourseService } from '../services/createCourse.service';
import { createJobService } from '../services/createJob.service';
import { createProjectService } from '../services/createProject.service';
import { createUserService } from '../services/createUser.service';
import { deleteCourseUserService } from '../services/deleteCourseUser.service';
import { deleteJobUserService } from '../services/deleteJobUser.service';
import { deleteProjectUserService } from '../services/deleteProjectUser.service';
import { deleteUserService } from '../services/deleteUser.service';
import { getAllTechnologiesService } from '../services/getAllTechnologies.service';
import { getAllUsersService } from '../services/getAllUsers.service';
import { getCoursesByUserService } from '../services/getCoursesByUser.service';
import { getJobsByUserService } from '../services/getJobsByUser.service';
import { getProjectsByUserService } from '../services/getProjectsByUser.service';
import { getRolesService } from '../services/getRoles.service';
import { getUserByEmailService } from '../services/getUserByEmail.service';
import { updateCourseService } from '../services/updateCourse.service';
import { updateUserService } from '../services/updateUser.service';
import { ICreateCourseInput, IDeleteCourseInput, IUpdateCourseInput } from '../types/CousersTypes';
import { ICreateJobInput, IDeleteJobInput, IGetJobsByUserInput } from '../types/JobTypes';
import { ICreateProjectInput, IDeleteProjectInput, IGetProjectsByUserInput } from '../types/ProjectTypes';
import {
  IDeleteUserInput, IGetUserByEmailInput, IUpdateUserInput, IcreateUserInput,
} from '../types/UsersTypes';

export const resolvers = {

  Query: {
    // USERS
    getAllUsers: async () => getAllUsersService(),
    getUserByEmail: async (
      _:any,
      args: IGetUserByEmailInput,
    ) => getUserByEmailService(args.input.email),

    // ROLES
    getRoles: async () => getRolesService(),

    // TECHNOLOGIES
    getTechnologies: async () => getAllTechnologiesService(),

    // PROJECTS
    getProjectsByUser: async (
      _:any,
      args: IGetProjectsByUserInput,
    ) => getProjectsByUserService(args.input.userId),

    // COURSES
    getCoursesByUser: async (
      _:any,
      args: IGetProjectsByUserInput,
    ) => getCoursesByUserService(args.input.userId),

    // JOBS
    getJobsByUser: async (
      _:any,
      args: IGetJobsByUserInput,
    ) => getJobsByUserService(args.input),

  },

  Mutation: {
    // USERS
    createUser: async (_:any, args: IcreateUserInput) => createUserService(args.input),
    updateUser: async (_:any, args:IUpdateUserInput) => updateUserService(args.input),

    deleteUser: async (_:any, args: IDeleteUserInput) => deleteUserService(args.input.userId),

    // COURSES
    createCourse: async (_:any, args: ICreateCourseInput) => createCourseService(args.input),
    deleteCourseUser: async (
      _:any,
      args: IDeleteCourseInput,
    ) => deleteCourseUserService(args.input),
    updateCourseUser: async (_:any, args:IUpdateCourseInput) => updateCourseService(args.input),

    // PROJECTS
    createProject: async (_:any, args:ICreateProjectInput) => createProjectService(args.input),
    deleteProjectUser: async (
      _:any,
      args:IDeleteProjectInput,
    ) => deleteProjectUserService(args.input),

    // JOBS
    createJob: async (_:any, args:ICreateJobInput) => createJobService(args.input),
    deleteJobUser: async (_:any, args:IDeleteJobInput) => deleteJobUserService(args.input),
  },

};
