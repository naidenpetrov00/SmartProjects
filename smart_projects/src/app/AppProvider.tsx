import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { queryConfig } from "../lib/reactQuery";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: queryConfig })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
