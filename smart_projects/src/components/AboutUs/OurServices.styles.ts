import { SxProps, Theme } from '@mui/material';

interface OurServicesStyles {
  container: SxProps;
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
    backgroundColor: theme.palette.secondary.main,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  }),
  accordionDetails: (theme) => ({
    backgroundColor: theme.palette.secondary.light,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  }),
};
