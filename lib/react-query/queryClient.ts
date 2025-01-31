import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 30, // 30분
      staleTime: 1000 * 60 * 30, // 30분
      refetchOnWindowFocus: false,
    },
  },
});
