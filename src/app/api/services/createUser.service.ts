import { hash } from 'bcrypt';
import { prisma } from '../database';
import { IUserInput } from '../types/UsersTypes';
import { AppError } from '../utils/appError';

export const createUserService = async (user: IUserInput) => {
  try {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError('Já existe um usuário inscrito com esse email', 400);
    }

    const encriptedPassword = await hash(user.password, 8);

    const userCreated = await prisma.user.create({
      data: {
        ...user,
        password: encriptedPassword,
      },
    });

    await prisma.social.create({
      data: {
        userId: userCreated.id,
        github_url: `https://github.com/${userCreated.username}`,
      },
    });

    return {
      status: 'success',
      message: 'Usuário cadastrado com sucesso',
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
      message: 'Erro ao cadastrar usuário',
    };
  }
};
