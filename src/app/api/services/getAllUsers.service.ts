import { prisma } from '../database';

export const getAllUsersService = async () => {
  try {
    const users = await prisma.user.findMany();

    return {
      users,
      status: 'success',
      message: 'Users found',
    };
  } catch (error) {
    return {
      users: null,
      status: 'error',
      message: 'Error getting users',
    };
  }
};
