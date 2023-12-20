import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IDeleteLanguageUserService {
  userId: string;
  languageId: string;
}

export const deleteLanguageUserService = async ({
  userId,
  languageId,
}: IDeleteLanguageUserService) => {
  try {
    if (!userId || !languageId) throw new AppError('Missing params');
    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) throw new AppError('Usuário não encontrado', 404);

    const languageExists = await prisma.userLanguage.findUnique({
      where: {
        id: languageId,
      },
    });

    if (!languageExists) throw new AppError('Idioma não encontrado', 404);

    const userIsOwner = languageExists.userId === userId;

    if (!userIsOwner)
      throw new AppError('Você não tem permissão para isso', 403);

    await prisma.userLanguage.delete({
      where: {
        id: languageId,
      },
    });

    return {
      message: 'Idioma deletado com sucesso',
      status: 'success',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        message: error.message,
        status: 'error',
      };
    }
    return {
      message: 'Falha ao deletar idioma. Tente novamente mais tarde ',
      status: 'error',
    };
  }
};
