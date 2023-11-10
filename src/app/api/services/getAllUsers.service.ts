import { prisma } from '../database';

export const getAllUsersService = async () => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });

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
