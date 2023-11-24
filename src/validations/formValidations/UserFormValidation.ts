import z from 'zod';

export const creteDeveloperValidation = z
  .object({
    name: z.string().min(1, { message: 'Campo obrigatório' }),
    email: z
      .string()
      .min(1, { message: 'Campo obrigatório' })
      .email({ message: 'Email inválido' }),
    password: z
      .string()
      .min(6, { message: 'Campo obrigatório (6 caracteres)' }),
    confirmPassword: z.string().min(6, { message: 'Campo obrigatório' }),
    username: z.string().min(1, { message: 'Campo obrigatório' }),
    avatar_url: z.string().min(1, { message: 'Campo obrigatório' }),
    role: z.string().min(1, { message: 'Campo obrigatório' }),
    seniority: z.string().min(1, { message: 'Campo obrigatório' }),
    city: z.string().min(1, { message: 'Campo obrigatório' }),
    state: z.string().min(1, { message: 'Campo obrigatório' }),
    bio: z.string().min(1, { message: 'Campo obrigatório' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });

export const updateDeveloperValidation = z
  .object({
    name: z.string().min(1, { message: 'Campo obrigatório' }),
    email: z.string().min(1, { message: 'Campo obrigatório' }),
    username: z.string().min(1, { message: 'Campo obrigatório' }),
    password: z.string(),
    confirmPassword: z.string(),
    avatar_url: z.string().min(1, { message: 'Campo obrigatório' }),
    role: z.string().min(1, { message: 'Campo obrigatório' }),
    seniority: z.string().min(1, { message: 'Campo obrigatório' }),
    city: z.string().min(1, { message: 'Campo obrigatório' }),
    state: z.string().min(1, { message: 'Campo obrigatório' }),
    bio: z.string().min(1, { message: 'Campo obrigatório' }),
  })
  .refine(
    (data) => {
      if (data.password) {
        return data.password.length >= 6;
      }
      return true;
    },
    {
      message: 'A senha deve ter no mínimo 6 caracteres',
      path: ['password'],
    },
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  });
