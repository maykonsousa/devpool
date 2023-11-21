import { AppError } from '../utils/appError';
import { prisma } from '../database';

interface IGetProfileService {
  username: string
}

export const getProfileService = async ({ username }:IGetProfileService) => {
  try {
    if (!username) throw new AppError('Requisição inválida', 400);
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        Course: true,
        Job: true,
        Project: true,
        Social: true,
        UserTechnology: {
          include: {
            Technology: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },

      },
    });
    if (!user) throw new AppError('Usuário não encontrado', 404);

    const userFormatted = {
      ...user,
      technologies: user.UserTechnology.map((tecnology) => ({
        id: tecnology.Technology.id,
        name: tecnology.Technology.name,
      })),
      projects: user.Project.map((project) => project),
      jobs: user.Job.map((job) => job),
      courses: user.Course.map((course) => course),
      contacts: user.Social.map((social) => social),

    };

    return {
      user: userFormatted,
      status: 'success',
      message: 'Usuário encontrado',
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
