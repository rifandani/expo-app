import { z } from 'zod';

export const resourceParamsSchema = z.object({
  limit: z.number().optional(),
  skip: z.number().optional(),
  select: z.string().optional(),
});

export const resourceListSchema = z.object({
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type ResourceParamsSchema = z.infer<typeof resourceParamsSchema>;
export type ResourceListSchema = z.infer<typeof resourceListSchema>;
