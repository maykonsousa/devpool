import { prisma } from '../database';

export const getAllUsersService = async () => prisma.user.findMany();
