import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IUpdateLanguageProps {
  userId: string;
  languageId: string;
  newLevel: string;
}

export const UpdateLanguageService = async ({
  userId,
  newLevel,
  languageId,
}: IUpdateLanguageProps) => {
  try {
    if (!userId || !newLevel || !languageId) {
      throw new AppError('Fields is required');
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw new AppError('User not found!', 404);

    const language = await prisma.userLanguage.findUnique({
      where: {
        id: languageId,
        userId,
      },
    });

    if (!language)
      throw new AppError('Você não tem permissão para editar esse idioma');

    await prisma.userLanguage.update({
      where: {
        id: language.id,
      },
      data: {
        level: newLevel,
      },
    });

    return {
      status: 'success',
      message: 'Idioma atualizado com sucesso!',
    };
  } catch (error) {
    return {
      status: 'error',
      message:
        'falha ao atualizar idioma. Verifique as informações e tente novamente',
    };
  }
};
