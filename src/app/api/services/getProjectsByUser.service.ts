import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IGetProjectsByUserService {
  userId?: string;
  username?: string;
}

export const getProjectsByUserService = async ({ userId, username }:IGetProjectsByUserService) => {
  try {
    if (!userId && !username) throw new AppError('Requisição inválida', 400);
    const userExists = await prisma.user.findFirst({
      where: {
        OR: [
          {
            id: userId,
          },
          {
            username,
          },
        ],
      },

    });

    if (!userExists) throw new AppError('User not found', 404);

    const projects = await prisma.project.findMany({
      orderBy: {
        name: 'asc',
      },

      where: {
        userId: userExists.id,
      },

      include: {
        ProjectTechnology: {
          select: {
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

    const projectsFormatted = projects.map((project) => ({
      ...project,
      technologies: project.ProjectTechnology.map((tecnology) => ({
        id: tecnology.Technology.id,
        name: tecnology.Technology.name,
      })),
    }));

    return {
      status: 'success',
      message: 'Projects found',
      projects: projectsFormatted,
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        status: 'error',
        message: error.message,
        projects: null,
      };
    }
  }

  return {
    status: 'error',
    message: 'Internal server error',
    projects: null,
  };
};
