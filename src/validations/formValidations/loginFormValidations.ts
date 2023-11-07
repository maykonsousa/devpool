import z from 'zod';

export const loginFormValidations = z.object({
  username: z.string().min(1, { message: 'Campo obrigatório' }),
  password: z.string().min(1, { message: 'Campo obrigatório' }),
});
