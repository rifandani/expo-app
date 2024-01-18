import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  maidenName: z.string(),
  age: z.number(),
  gender: z.union([z.literal('male'), z.literal('female')]),
  email: z.string().email(),
  phone: z.string(),
  username: z.string(),
  password: z.string(),
  birthDate: z.string(),
  image: z.string().url(),
  bloodGroup: z.string(),
  height: z.number(),
  weight: z.number(),
  eyeColor: z.string(),
  // ... and a lot more
});

export const getUserApiRequestSchema = z.object({
  id: z.number(),
});
export const getUserApiResponseSchema = userSchema;

export type User = z.infer<typeof userSchema>;
export type GetUserApiRequest = z.infer<typeof getUserApiRequestSchema>;
export type GetUserApiResponse = z.infer<typeof getUserApiResponseSchema>;
