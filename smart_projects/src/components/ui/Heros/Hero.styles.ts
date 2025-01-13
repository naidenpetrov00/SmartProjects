import { SxProps, Theme } from '@mui/material';

interface HeroStyles {
  container: SxProps<Theme>;
  stack: SxProps<Theme>;
  titleWhite: (isSmallScreen: boolean) => SxProps<Theme>;
  titleBlack: (theme: Theme, isSmallScreen: boolean) => SxProps<Theme>;
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
  titleWhite: (isSmallScreen) => ({
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    fontSize: { xs: '32px', md: '64px' },
    fontWeight: isSmallScreen ? 'bold' : '',
  }),
  titleBlack: (theme, isSmallScreen) => ({
    color: 'primary.main',
    ...theme.applyStyles('dark', {
      color: 'primary.light',
    }),
    fontSize: { xs: '32px', md: '64px' },
    fontWeight: isSmallScreen ? 'bold' : '',
  }),
  description: {
    textAlign: 'justify',
    color: 'text.secondary',
    width: { sm: '100%', md: '100%' },
  },
};
