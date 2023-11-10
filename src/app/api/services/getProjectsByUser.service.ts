import { prisma } from '../database';
import { AppError } from '../utils/appError';

export const getProjectsByUser = async (userId:string) => {
  try {
    if (!userId) throw new AppError('User id is required', 400);
    const userExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },

    });

    if (!userExists) throw new AppError('User not found', 404);

    const projects = await prisma.project.findMany({
      orderBy: {
        name: 'asc',
      },

      where: {
        userId,
      },

      include: {
        ProjectTechnology: {
          select: {
            Technology: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const projectsFormatted = projects.map((project) => ({
      ...project,
      technologies: project.ProjectTechnology.map((tecnology) => tecnology.Technology.name),
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
