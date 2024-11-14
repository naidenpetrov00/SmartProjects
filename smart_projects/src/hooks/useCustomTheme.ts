import { useMemo } from 'react';

import { createTheme, Theme } from '@mui/material';

export const useCustomTheme = (): Theme => {
  return useMemo(() => {
    return createTheme({ palette: { primary: { main: '#cd751e' } } });
  }, []);
};

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme()`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }
