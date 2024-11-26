import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, Tabs, Tab } from '@mui/material';

import { paths } from '../../../config/paths';
import { navigationButtonsOnRightStyle } from './sxStyles';

type DrawerNavigationButtonsProps = {
  pathname: string;
  drawerOpenState: boolean;
  setdrawerOpenState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DrawerNavigationButtons = ({
  pathname,
  drawerOpenState,
  setdrawerOpenState,
}: DrawerNavigationButtonsProps) => {
  return (
    <Fragment>
      <Button
        onClick={() => setdrawerOpenState(true)}
        sx={navigationButtonsOnRightStyle}
        color="inherit"
        aria-label="open navigation menu"
      >
        <MenuIcon />
      </Button>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'primary.main',
            width: 200,
          },
        }}
        open={drawerOpenState}
        anchor="right"
        onClose={() => setdrawerOpenState(false)}
        aria-labelledby="drawer-navigation-title"
      >
        <Tabs
          id="drawer-navigation-tabs"
          value={pathname}
          selectionFollowsFocus
          orientation="vertical"
          aria-labelledby="drawer page navigation"
        >
          {Object.values(paths).map((path, index) => (
            <Tab
              id={`drawer-tab-${index}`}
              label={path.label}
              key={path.label}
              value={path.path}
              component={Link}
              onClick={() => setdrawerOpenState(false)}
              to={path.path}
              aria-label={`navigate to ${path.label}`}
              aria-controls={`drawer-tabpanel-${index}`}
              sx={{
                color: 'secondary.light',
                '&.Mui-selected': {
                  color: '#fff',
                },
              }}
            />
          ))}
        </Tabs>
      </Drawer>
    </Fragment>
  );
};
