import { prisma } from '../database';

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return {
        user: null,
        status: 'error',
        message: 'User not found',
      };
    }
    return {
      user,
      status: 'success',
      message: 'User found',
    };
  } catch {
    return {
      user: null,
      status: 'error',
      message: 'Error getting user',
    };
  }
};
