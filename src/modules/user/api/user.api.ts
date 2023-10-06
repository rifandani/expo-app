import { type GetUserApiRequest, type GetUserApiResponse } from './user.schema';

import { ResourceParamsApiRequest } from '#shared/api/resource.schema';
import { http } from '#shared/services/http.service';

export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (params: ResourceParamsApiRequest) => [...userKeys.lists(), params] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (params: GetUserApiRequest) => [...userKeys.details(), params] as const,
};

export const userApi = {
  getDetail: async (params: GetUserApiRequest) => {
    const json = await http.get(`users/${params.id}`).json<GetUserApiResponse>();

    // we also can use `parse` here. `parse` will throw if `json` is not correct
    // const response = getUserApiResponseSchema.parse(json);

    return json;
  },
} as const;
