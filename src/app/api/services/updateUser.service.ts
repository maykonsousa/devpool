import { hash } from 'bcrypt';
import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IAlterableData {
  name?: string
  email?: string
  password?: string
  avatar?: string
  bio?: string
  role?: string
}

interface IUpdateUser {
  id: string
  data: IAlterableData
}

export const updateUserService = async ({ id, data }:IUpdateUser) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const { password } = data;
    const encriptedPassword = password ? await hash(password, 8) : undefined;

    await prisma.user.update({
      where: { id },
      data: {
        ...data,
        password: encriptedPassword,
      },
    });
    return {
      status: 'success',
      message: 'User updated successfully',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        status: 'error',
        message: error.message,
      };
    }
    return {
      status: 'error',
      message: 'Internal server error',
    };
  }
};
