import { z } from 'zod';

// company: string;
//   name: string;
//   startDate: string;
//   endDate: string;
//   isCurrent: boolean;
//   description: string;

export const createJobValidation = z.object({
  company: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(3, { message: 'Mínimo 3 caracteres para esse campo' })
    .max(50, { message: 'Máximo 50 caracteres para esse campo' }),
  name: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(3, { message: 'Mínimo 3 caracteres para esse campo' })
    .max(50, { message: 'Máximo 50 caracteres para esse campo' }),
  startDate: z.date(),
  endDate: z.date(),
  isCurrent: z.boolean(),
  description: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(10, { message: 'Mínimo 10 caracteres para esse campo' }),
});
