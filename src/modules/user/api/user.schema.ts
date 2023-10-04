import { z } from 'zod';

export const userApiSuccessResponseSchema = z.object({
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

export type UserApiSuccessResponseSchema = z.infer<typeof userApiSuccessResponseSchema>;
