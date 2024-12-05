import { SxProps, Theme } from '@mui/material';

interface HeroStyles {
  container: SxProps<Theme>;
  stack: SxProps<Theme>;
  title: SxProps<Theme>;
  titleBlack: (theme: Theme) => SxProps<Theme>;
  description: SxProps<Theme>;
}

export const heroStyles: HeroStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    pt: { xs: 4, sm: 8 },
    pb: { xs: 4, sm: 8 },
  },
  stack: {
    alignItems: 'center',
    width: { xs: '100%', sm: '70%' },
  },
  title: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    fontSize: 'clamp(3rem, 10vw, 3.5rem)',
  },
  titleBlack: (theme: Theme) => ({
    fontSize: 'inherit',
    color: 'primary.main',
    ...theme.applyStyles('dark', {
      color: 'primary.light',
    }),
  }),
  description: {
    textAlign: 'center',
    color: 'text.secondary',
    width: { sm: '100%', md: '80%' },
  },
};
