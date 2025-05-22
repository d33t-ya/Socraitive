import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Must be a valid email address' }),
    password: z
      .string()
      .min(1, { message: 'Password is required.' })
      .regex(/^[A-Za-z0-9!@#$%^&*()_+=\-`~,.<>?/;:'"\[\]{}|]+$/, {
        message: 'Password contains invalid characters.',
      }),
    confirmPassword: z.string().min(1, { message: 'Confirm your password' }),
    agreeToTerms: z.boolean().refine((value) => value === true, {
      message: 'You must agree to the terms and privacy policy',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
