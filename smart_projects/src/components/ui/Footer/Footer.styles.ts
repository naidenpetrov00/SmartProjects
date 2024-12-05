import { SxProps } from '@mui/material';

interface FooterStyles {
  footer: SxProps;
  container: SxProps;
  boxContainer: SxProps;
  boxContent: SxProps;
  boxSocial: SxProps;
  boxItems: SxProps;
  navigation: SxProps;
  iconButton: SxProps;
  copyright: SxProps;
}

export const footerStyles: FooterStyles = {
  footer: {
    bgcolor: 'primary.main',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    '& a': { color: 'secondary.main' },
    boxShadow:
      '0px -2px 4px -1px rgba(0, 0, 0, 0.2), 0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: { xs: 4, sm: 8 },
    py: { xs: 8, sm: 10 },
    textAlign: { sm: 'center', md: 'left' },
  },
  boxContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    width: '100%',
    justifyContent: 'space-between',
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    minWidth: { xs: '100%', sm: '60%' },
  },
  boxSocial: {
    display: 'flex',
    justifyContent: 'space-between',
    pt: { xs: 4, sm: 8 },
    width: '100%',
    borderTop: '1px solid',
    borderColor: 'primary.contrastText',
  },
  iconButton: {
    alignSelf: 'center',
  },
  copyright: {
    textAlign: 'left',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  boxItems: {
    display: { xs: 'none', sm: 'flex' },
    flexDirection: 'column',
    gap: 1,
  },
};
