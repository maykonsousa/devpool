import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IProjectData {
  projectId: string;
  userId: string;
  name?: string;
  description?: string;
  image_url?: string;
  repo_url?: string;
  deployed_url?: string;
  technologies: string[];
}

export const updateProjectService = async (data: IProjectData) => {
  try {
    if (!data.projectId || !data.userId) {
      throw new AppError('Falha ao atualizar projeto. Requisição inválida');
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
    });

    if (!userExists) {
      throw new AppError('Falha ao atualizar projeto');
    }

    const projectExists = await prisma.project.findUnique({
      where: {
        id: data.projectId,
      },
    });

    if (!projectExists) {
      throw new AppError('Falha ao atualizar projeto. Projeto não encontrado');
    }

    if (projectExists.userId !== data.userId) {
      throw new AppError('Você não tem permissão para editar este projeto');
    }

    await prisma.project.update({
      where: {
        id: data.projectId,
      },
      data: {
        name: data.name,
        description: data.description,
        image_url: data.image_url,
        repo_url: data.repo_url,
        deployed_url: data.deployed_url,
      },
    });

    // remove all technologies from project

    await prisma.projectTechnology.deleteMany({
      where: {
        projectId: data.projectId,
      },
    });

    // add all technologies to project
    data.technologies.forEach(async (element) => {
      const technologyExists = await prisma.technology.findFirst({
        where: {
          name: element,
        },
      });

      if (technologyExists) {
        await prisma.projectTechnology.create({
          data: {
            projectId: data.projectId,
            technologyId: technologyExists.id,
          },
        });
      }
    });

    return {
      message: 'Projeto atualizado com sucesso',
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
      message: 'Falha ao atualizar projeto',
      status: 'error',
    };
  }
};
