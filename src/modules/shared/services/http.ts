import ky from 'ky';

import { envSchema } from '#shared/schemas/env';

// Set config defaults when creating the instance
export const http = ky.create({
  prefixUrl: (() => {
    const env = envSchema.parse(process.env);
    return env.EXPO_PUBLIC_API_BASE_URL;
  })(),
});
