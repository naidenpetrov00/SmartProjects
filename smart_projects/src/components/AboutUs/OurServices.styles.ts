import { darken, SxProps, Theme } from '@mui/material';

interface OurServicesStyles {
  container: SxProps;
  logoContainer: SxProps;
  accordion: (theme: Theme) => SxProps;
  accordionDetails: (theme: Theme) => SxProps;
}

export const ourServicesStyles: OurServicesStyles = {
  container: { borderBottomLeftRadius: 16 },
  accordion: (theme) => ({
    mt: 0.5,
    marginLeft: {
      md: 32,
    },
    marginRight: {
      md: 32,
    },
    backgroundColor: darken(theme.palette.primary.light, 0.1),
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.8)',
  }),
  accordionDetails: (theme) => ({
    backgroundColor: theme.palette.primary.light,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }),
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 8,
  },
};
