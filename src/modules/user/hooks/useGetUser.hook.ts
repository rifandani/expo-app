import { QueryOptions, useQuery } from '@tanstack/react-query';
import { Except } from 'type-fest';

import { ErrorApiResponseSchema } from '#shared/api/error.schema';
import { userApi, userKeys } from '#user/api/user.api';
import { GetUserApiRequest, GetUserApiResponse } from '#user/api/user.schema';

/**
 * fetch single user
 */
export const useGetUser = (
  params: GetUserApiRequest,
  options?: Except<QueryOptions<GetUserApiResponse, ErrorApiResponseSchema>, 'queryKey' | 'queryFn'>
) => {
  const queryKey = userKeys.detail(params);
  const queryFn = () => userApi.getDetail(params);

  return useQuery({
    ...options,
    queryKey,
    queryFn,
  });
};
