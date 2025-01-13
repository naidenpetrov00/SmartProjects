import { SxProps, Theme } from '@mui/material';

interface AboutUsStyles {
  container: SxProps;
  contactsContainer: SxProps;
  divider: SxProps;
  aboutUsTextcontainer: (theme: Theme) => SxProps<Theme>;
  aboutUsText: React.CSSProperties;
}

export const aboutUsStyles: AboutUsStyles = {
  divider: { mt: 2, width: '100%' },
  container: { pl: 4, pr: 4 },
  contactsContainer: null,
  aboutUsTextcontainer: (theme) => ({
    ml: { md: 8 },
    mr: { md: 8 },
    p: 1.5,
    background: theme.palette.primary.main,
    borderRadius: '16px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.8)',
  }),
  aboutUsText: { textAlign: 'justify' },
};
