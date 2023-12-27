import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface ICreatePositionService {
  data: {
    city?: string;
    company: string;
    description: string;
    language?: string;
    language_level?: string;
    model: string;
    role: string;
    seniority: string;
    state?: string;
    type: string;
    userId: string;
    is_resposible: boolean;
    url?: string;
    email?: string;
    techs: string[];
  };
}

export const createPositionService = async ({
  data,
}: ICreatePositionService) => {
  try {
    if (!data.userId) {
      throw new AppError('User id is required', 400);
    }
    const userExists = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    });

    if (!userExists) {
      throw new AppError('User not found', 404);
    }

    const position = await prisma.position.create({
      data,
    });

    data.techs.forEach(async (element) => {
      const technologyExists = await prisma.technology.findFirst({
        where: {
          name: element,
        },
      });

      if (!technologyExists) {
        throw new AppError('Tecnologia não existe', 404);
      }

      await prisma.positionTechnology.create({
        data: {
          positionId: position.id,
          technologyId: technologyExists.id,
        },
      });
    });

    return {
      message: 'Vaga compartilhada com suscesso!',
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
      message: 'Falha ao compartilhar vaga. Tente novamente mais tarde.',
      status: 'error',
    };
  }
};
