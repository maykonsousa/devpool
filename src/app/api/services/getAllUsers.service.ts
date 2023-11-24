import { prisma } from '../database';

export const getAllUsersService = async () => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
      include: {
        Social: true,
      },
    });

    const usersFormatted = users.map((user) => {
      const { Social, ...rest } = user;

      return {
        ...rest,
        contacts: Social,
      };
    });

    return {
      users: usersFormatted,
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
