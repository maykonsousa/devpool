import { hash } from 'bcrypt';
import { prisma } from '../database';
import { IUserInput } from '../types/UsersTypes';
import { AppError } from '../utils/appError';

export const createUserService = async (user:IUserInput) => {
  try {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError('User already exists', 400);
    }

    const encriptedPassword = await hash(user.password, 8);

    const createdUser = await prisma.user.create({
      data: {
        ...user,
        password: encriptedPassword,

      },
    });

    return {
      userId: createdUser.id,
      status: 'success',
      message: 'User created successfully',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        userId: null,
        status: 'error',
        message: error.message,
      };
    }
    return {
      userId: null,
      status: 'error',
      message: 'Internal server error',
    };
  }
};
