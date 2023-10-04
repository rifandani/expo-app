import { z } from 'zod';

import { errorApiResponseSchema } from '#shared/api/error.schema';

// #region SCHEMAS
export const loginSchema = z.object({
  username: z.string().min(3, 'username must contain at least 3 characters'),
  password: z.string().min(6, 'password must contain at least 6 characters'),
  expiresInMins: z.number().optional(),
});

export const loginApiSuccessResponseSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.union([z.literal('male'), z.literal('female')]),
  image: z.string().url(),
  token: z.string(),
});

export const loginApiResponseSchema = loginApiSuccessResponseSchema.or(errorApiResponseSchema);
// #endregion

export type LoginSchema = z.infer<typeof loginSchema>;
export type LoginApiSuccessResponseSchema = z.infer<typeof loginApiSuccessResponseSchema>;
export type LoginApiResponseSchema = z.infer<typeof loginApiResponseSchema>;
