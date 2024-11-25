import { useMemo } from 'react';

import { createTheme, Theme } from '@mui/material';

const minCharcoal = '#73787C';
const minGray = '#C5C6C7';
const minPaleBlue = '#D7E5F0';
const minBeige = '#C9AD93';

export const useCustomTheme = (): Theme => {
  return useMemo(() => {
    return createTheme({
      palette: {
        primary: { main: minGray },
        secondary: { main: minCharcoal },
      },
    });
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
