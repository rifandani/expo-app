import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

import { queryClient } from '#bootstrap/providers/query/query-client';

export function AppQueryProvider({ children }: PropsWithChildren) {
  useReactQueryDevTools(queryClient);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
