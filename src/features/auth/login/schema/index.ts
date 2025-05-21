import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Must be a valid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password is required.' })
    .regex(/^[A-Za-z0-9!@#$%^&*()_+=\-`~,.<>?/;:'"\[\]{}|]+$/, {
      message: 'Password contains invalid characters.',
    }),
  rememberMe: z.boolean().default(false),
});
