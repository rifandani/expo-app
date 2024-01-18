import type {
  LoginApiResponseSchema,
  LoginApiSuccessResponseSchema,
  LoginSchema,
} from '#auth/schemas/login';
import { http } from '#shared/services/http';

export const authApi = {
  login: async (creds: LoginSchema) => {
    const resp = await http
      .post(`auth/login`, {
        json: creds,
        hooks: {
          afterResponse: [
            async (request, _options, response) => {
              if (response.status === 200) {
                const data = (await response.json()) as LoginApiSuccessResponseSchema;
                // set 'Authorization' headers
                request.headers.set('Authorization', `Bearer ${data.token}`);
              }
            },
          ],
        },
      })
      .json<LoginApiResponseSchema>();

    // `parse` will throw if `resp.data` is not correct, and therefore can render expo-router `ErrorBoundaries` if specified
    // const loginApiResponse = loginApiResponseSchema.parse(resp.data);

    return resp;
  },
} as const;
