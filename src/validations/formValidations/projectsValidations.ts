import z from 'zod';

export const createProjectValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(3, { message: 'Mínimo 3 caracteres para esse campo' })
    .max(50, { message: 'Máximo 50 caracteres para esse campo' }),
  description: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(10, { message: 'Mínimo 10 caracteres para esse campo' }),
});
