import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IGetTechsByUserService {
  userId: string;
}

export const getTechsByUserService = async ({
  userId,
}: IGetTechsByUserService) => {
  try {
    if (!userId) throw new AppError('ID do usuário não informado', 400);

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) throw new AppError('Usuário não encontrado', 404);

    const techs = await prisma.userTechnology.findMany({
      where: {
        userId,
      },
      include: {
        Technology: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    const techsFormatted = techs.map((tech) => ({
      id: tech.id,
      techId: tech.technologyId,
      name: tech.Technology.name,
    }));

    return {
      status: 'success',
      message: 'Tecnologias encontradas',
      techs: techsFormatted,
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        status: 'error',
        message: error.message,
        techs: null,
      };
    }

    return {
      status: 'error',
      message: 'Erro ao buscar tecnologias',
      techs: null,
    };
  }
};
