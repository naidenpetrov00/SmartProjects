import { SxProps, Theme } from '@mui/material';

interface DrawerNavigationStyles {
  button: SxProps<Theme>;
  drawer: SxProps<Theme>;
  tab: SxProps<Theme>;
  selectedTab: SxProps<Theme>;
}

export const drawerNavigationStyles: DrawerNavigationStyles = {
  button: {
    display: 'flex',
    marginLeft: 'auto',
    color: '',
  },
  drawer: {
    '& .MuiDrawer-paper': {
      bgcolor: 'primary.main',
      width: 200,
    },
  },
  tab: {
    color: 'secondary.light',
    '&.Mui-selected': {
      color: '#fff',
    },
  },
  selectedTab: {
    color: '#fff',
  },
};
