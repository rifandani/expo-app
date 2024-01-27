import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { Except } from 'type-fest';

import { ErrorApiResponseSchema } from '#shared/schemas/error';
import { userApi, userKeys } from '#user/api/user';
import { GetUserApiRequest, GetUserApiResponse } from '#user/schemas/user';

/**
 * fetch single user
 */
export const useGetUser = (
  params: GetUserApiRequest,
  options?: Except<
    UseQueryOptions<GetUserApiResponse, ErrorApiResponseSchema>,
    'queryKey' | 'queryFn'
  >
) => {
  const queryKey = userKeys.detail(params);
  const queryFn = () => userApi.getDetail(params);

  return useQuery({
    ...options,
    queryKey,
    queryFn,
  });
};
