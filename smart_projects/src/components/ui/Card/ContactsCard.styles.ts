import { SxProps, Theme } from '@mui/material';

interface ContactsCardStyles {
  container: SxProps<Theme>;
  contactContainer: SxProps<Theme>;
  paper: SxProps<Theme>;
  stack: SxProps<Theme>;
}

export const contactsCardStyles: ContactsCardStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  contactContainer: {
    display: 'flex',
    gap: 1,
  },
  paper: {
    width: { xs: '80vw', sm: '50vw' },
    mt: 4,
    mb: 4,
    p: 2,
    borderRadius: 4,
  },
  stack: {
    margin: '1rem 0',
    '& a': { color: 'text.primary' },
  },
};
