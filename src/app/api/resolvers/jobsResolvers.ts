/* eslint-disable @typescript-eslint/no-explicit-any */
import { createJobService } from '../services/createJob.service';
import { deleteJobUserService } from '../services/deleteJobUser.service';
import { getJobsByUserService } from '../services/getJobsByUser.service';
import { updateJobService } from '../services/updateJob.service';
import {
  ICreateJobInput,
  IDeleteJobInput,
  IGetJobsByUserInput,
  IUpdateJobInput,
} from '../types/JobTypes';

export const jobsResolvers = {
  Query: {
    getJobsByUser: async (_: any, args: IGetJobsByUserInput) =>
      getJobsByUserService(args.input),
  },
  Mutation: {
    createJob: async (_: any, args: ICreateJobInput) =>
      createJobService(args.input),
    deleteJobUser: async (_: any, args: IDeleteJobInput) =>
      deleteJobUserService(args.input),
    updateJobUser: async (_: any, args: IUpdateJobInput) =>
      updateJobService(args.input),
  },
};
