import { prisma } from '../database';
import { IContactsDataInput } from '../types/contactsType';
import { AppError } from '../utils/appError';

interface IUpdateContactsService {
  userId: string;
  data: IContactsDataInput;
}
export const updateContactsService = async ({
  data,
  userId,
}: IUpdateContactsService) => {
  try {
    if (!userId) {
      throw new AppError('Requisição inválida');
    }

    const userExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const contacts = await prisma.social.findFirst({
      where: {
        userId,
      },
    });

    await prisma.social.update({
      where: {
        id: contacts?.id,
      },
      data: {
        ...data,
        userId,
      },
    });

    return {
      status: 'success',
      message: 'Contatos atualizados com sucesso',
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
      message: 'Erro interno do servidor',
    };
  }
};
