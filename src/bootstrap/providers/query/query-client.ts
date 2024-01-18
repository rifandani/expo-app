import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // gcTime: 1_000 * 60 * 5, // 5 mins. Defaults to 5 mins
      staleTime: 1_000 * 30, // 30 secs. Defaults to 0
      networkMode: 'offlineFirst',
    },
  },
});
