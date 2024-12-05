import { SxProps, Theme } from '@mui/material';

interface ContactsPageStyles {
  container: SxProps<Theme>;
  paper: SxProps<Theme>;
  stack: SxProps<Theme>;
}

export const contactsPageStyles: ContactsPageStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: { xs: '80vw', sm: '30vw' },
    mt: 4,
    mb: 4,
    p: 1,
    borderRadius: 4,
  },
  stack: {
    margin: '1rem 0',
    '& a': { color: 'text.primary' },
  },
};
