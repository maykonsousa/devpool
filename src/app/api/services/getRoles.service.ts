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
    const roles = await prisma.roles.findMany();
    const rolesFormatted = roles.map(({ id, name }) => ({ id, name }));
    return {
      status: 'success',
      message: 'Roles fetched successfully',
      roles: rolesFormatted,
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
