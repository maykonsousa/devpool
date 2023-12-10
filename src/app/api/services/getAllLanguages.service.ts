import { prisma } from '../database';

export const getAllLanguagesService = async () => {
  try {
    const languages = await prisma.language.findMany();
    return {
      status: 'success',
      message: 'Languages fetched successfully',
      languages,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Error fetching languages',
      languages: [],
    };
  }
};
