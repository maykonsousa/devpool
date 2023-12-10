import { z } from 'zod';

export const emailValidation = z.object({
  name: z
    .string()
    .min(3, {
      message: 'campo obrigatório',
    })
    .max(50, {
      message: 'O nome deve ter no máximo 50 caracteres',
    }),
  email: z
    .string()
    .min(3, {
      message: 'campo obrigatório',
    })
    .email({
      message: 'email invalido',
    }),
  message: z
    .string()
    .min(3, {
      message: 'campo obrigatório',
    })
    .max(500, {
      message: 'A mensagem deve ter no máximo 500 caracteres',
    }),
  subject: z
    .string()
    .min(3, {
      message: 'campo obrigatório',
    })
    .max(50, {
      message: 'O assunto deve ter no máximo 50 caracteres',
    }),
});
