import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, Tabs, Tab } from '@mui/material';

import { pagesForNavigationBar } from '../../../config/paths';
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
      >
        <MenuIcon />
      </Button>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: 200,
          },
        }}
        open={drawerOpenState}
        anchor="right"
        onClose={() => setdrawerOpenState(false)}
      >
        <Tabs value={pathname} orientation="vertical">
          {pagesForNavigationBar.map((p) => (
            <Tab
              color="inherit"
              label={p.text}
              key={p.text}
              value={p.path}
              component={Link}
              onClick={() => setdrawerOpenState(false)}
              to={p.path}
            />
          ))}
        </Tabs>
      </Drawer>
    </Fragment>
  );
};
