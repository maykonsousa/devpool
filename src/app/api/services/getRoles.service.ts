/* eslint-disable no-console */
import { prisma } from '../database';
import { IRoles } from '../types/RoleTypes';

interface IGetRolesResponse {
  status: string;
  message: string;
  roles: IRoles[];
}

export const getRolesService = async ():Promise<IGetRolesResponse> => {
  try {
    const roles = await prisma.role.findMany({
      orderBy: {
        name: 'asc',
      },
      select: {
        name: true,
        id: true,
      },

    });

    return {
      status: 'success',
      message: 'Roles fetched successfully',
      roles,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: 'Internal server error',
      roles: [],
    };
  }
};
