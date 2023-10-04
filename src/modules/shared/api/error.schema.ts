import { z } from 'zod';

export const errorApiResponseSchema = z.object({
  message: z.string(),
});

export type ErrorApiResponseSchema = z.infer<typeof errorApiResponseSchema>;
