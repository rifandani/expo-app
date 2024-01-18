import { z } from 'zod';

export const envSchema = z.object({
  EXPO_PUBLIC_APP_TITLE: z.string(),
  EXPO_PUBLIC_API_BASE_URL: z.string().url(),
});
