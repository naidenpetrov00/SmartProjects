import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { queryConfig } from '../lib/reactQuery';
import { ErrorBoundary } from 'react-error-boundary';
import { MainErrorFallback } from '../components/errors/MainErrorFallback';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useCustomTheme } from '../hooks/useCustomTheme';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig }),
  );
  const theme = useCustomTheme();

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
