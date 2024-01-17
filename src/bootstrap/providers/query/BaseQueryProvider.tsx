import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

import { queryClient } from '#bootstrap/providers/query/queryClient';

export function BaseQueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
