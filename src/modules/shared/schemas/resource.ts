import { z } from 'zod';

export const resourceParamsApiRequestSchema = z.object({
  limit: z.number().optional(),
  skip: z.number().optional(),
  select: z.string().optional(),
});

export const resourceListApiRequestSchema = z.object({
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type ResourceParamsApiRequest = z.infer<typeof resourceParamsApiRequestSchema>;
export type ResourceListApiRequest = z.infer<typeof resourceListApiRequestSchema>;
