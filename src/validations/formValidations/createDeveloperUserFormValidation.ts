import z from 'zod';

export const creteDeveloperValidation = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  email: z.string().min(1, { message: 'Campo obrigatório' }),
  password: z.string().min(6, { message: 'Campo obrigatório (6 caracteres)' }),
  confirmPassword: z.string().min(6, { message: 'Campo obrigatório' }),
  username: z.string().min(1, { message: 'Campo obrigatório' }),
  avatar_url: z.string().min(1, { message: 'Campo obrigatório' }),
  role: z.string().min(1, { message: 'Campo obrigatório' }),
  seniority: z.string().min(1, { message: 'Campo obrigatório' }),
  city: z.string().min(1, { message: 'Campo obrigatório' }),
  state: z.string().min(1, { message: 'Campo obrigatório' }),
  bio: z.string().min(1, { message: 'Campo obrigatório' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Senhas não conferem',
  path: ['confirmPassword'],
});
