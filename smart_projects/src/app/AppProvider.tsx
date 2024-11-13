import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { queryConfig } from '../lib/reactQuery';
import { ErrorBoundary } from 'react-error-boundary';
import { MainErrorFallback } from '../components/errors/MainErrorFallback';

import { CssBaseline } from '@mui/material';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig }),
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        {children}
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
