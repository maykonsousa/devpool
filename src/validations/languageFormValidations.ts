import { z } from 'zod';

export const languagesValidation = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  level: z.string().min(1, { message: 'Campo obrigatório' }),
});
