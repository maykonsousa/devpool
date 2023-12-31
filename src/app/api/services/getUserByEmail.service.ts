/* eslint-disable no-console */
import { prisma } from '../database';

export const getUserByEmailService = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        type: true,
        role: true,
        bio: true,
        seniority: true,
        city: true,
        state: true,
        username: true,
        avatar_url: true,
        cover_url: true,
        createdAt: true,
        updatedAt: true,
        current_company: true,
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
  } catch (error) {
    console.log(error);
    return {
      user: null,
      status: 'error',
      message: 'Error getting user',
    };
  }
};
