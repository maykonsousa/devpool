/* eslint-disable @typescript-eslint/no-explicit-any */
import { addOrRemoveTechnologyUserService } from '../services/addTechnologyUser.service';
import { createCourseService } from '../services/createCourse.service';
import { createFeedbackService } from '../services/createFeedback.service';
import { deleteCourseUserService } from '../services/deleteCourseUser.service';
import { getAllTechnologiesService } from '../services/getAllTechnologies.service';
import { getContactsService } from '../services/getContacts.service';
import { getCoursesByUserService } from '../services/getCoursesByUser.service';
import { getRolesService } from '../services/getRoles.service';
import { getTechsByUserService } from '../services/getTechsByUser.service';
import { sendMailService } from '../services/sendMail.Service';
import { updateContactsService } from '../services/updateContacts.service';
import { updateCourseService } from '../services/updateCourse.service';
import {
  ICreateCourseInput,
  IDeleteCourseInput,
  IGetCoursesByUserInput,
  IUpdateCourseInput,
} from '../types/CousersTypes';

import {
  IAddOrRemoveTechnologyInput,
  IGetTechsByUserInput,
} from '../types/TechsTypes';

import {
  IGetContactsInput,
  ISendMailInput,
  IUpdateContactsInput,
} from '../types/contactsType';
import { ICreateFeedbackInput } from '../types/feedbackTypes';

export const allResolvers = {
  Query: {
    // ROLES
    getRoles: async () => getRolesService(),

    // TECHNOLOGIES
    getTechnologies: async () => getAllTechnologiesService(),

    // COURSES
    getCoursesByUser: async (_: any, args: IGetCoursesByUserInput) =>
      getCoursesByUserService(args.input.userId),

    // TECHNOLOGIES
    getTechsByUser: async (_: any, args: IGetTechsByUserInput) =>
      getTechsByUserService(args.input),

    // CONTACTS
    getContacts: async (_: any, args: IGetContactsInput) =>
      getContactsService(args.input),
  },

  Mutation: {
    // COURSES
    createCourse: async (_: any, args: ICreateCourseInput) =>
      createCourseService(args.input),
    deleteCourseUser: async (_: any, args: IDeleteCourseInput) =>
      deleteCourseUserService(args.input),
    updateCourseUser: async (_: any, args: IUpdateCourseInput) =>
      updateCourseService(args.input),

    // TECHNOLOGIES
    addOrRemoveTechnologyUser: async (
      _: any,
      args: IAddOrRemoveTechnologyInput,
    ) => addOrRemoveTechnologyUserService(args.input),

    // CONTACTS
    updateContacts: async (_: any, args: IUpdateContactsInput) =>
      updateContactsService(args.input),
    sendMail: async (_: any, args: ISendMailInput) =>
      sendMailService(args.input),

    // FEEDBACK
    createFeedback: async (_: any, args: ICreateFeedbackInput) =>
      createFeedbackService(args.input),
  },
};
