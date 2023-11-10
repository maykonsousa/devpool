/* eslint-disable no-console */
import { prisma } from '../database';

export const getAllTechnologies = async () => {
  try {
    const technologies = await prisma.technology.findMany({
      orderBy: {
        name: 'asc',
      },
      select: {
        id: true,
        name: true,
      },

    });

    return {
      status: 'success',
      message: 'Technologies found',
      technologies,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: 'Error getting technologies',
      technologies: null,
    };
  }
};
