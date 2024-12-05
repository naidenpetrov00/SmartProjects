import { SxProps, Theme } from '@mui/material';

interface PageLayoutStyles {
  container: SxProps<Theme>;
  content: SxProps<Theme>;
}

export const pageLayoutStyles: PageLayoutStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: { flexGrow: 1 },
};
