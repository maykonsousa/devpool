import { z } from 'zod';

export const createCourseValidation = z.object({
  name: z.string()
    .min(1, { message: 'Campo obrigatório' })
    .min(3, { message: 'Mínimo 3 caracteres para esse campo' })
    .max(50, { message: 'Máximo 50 caracteres para esse campo' }),
  description: z.string().min(1, { message: 'Campo obrigatório' }),
  school: z.string().min(1, { message: 'Campo obrigatório' }),
  type: z.string().min(1, { message: 'Campo obrigatório' }),
  progress: z.string().min(1, { message: 'Campo obrigatório' }),
  duration: z.string().min(1, { message: 'Campo obrigatório' }),

});
