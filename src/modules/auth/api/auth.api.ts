import type {
  LoginApiResponseSchema,
  LoginApiSuccessResponseSchema,
  LoginSchema,
} from './auth.schema';

import { http } from '#shared/services/http.service';

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

    // we also can use `parse` here. `parse` will throw if `resp.data` is not correct, and therefore can render `errorElement` if specified
    // const loginApiResponse = loginApiResponseSchema.parse(resp.data);

    return resp;
  },
} as const;
