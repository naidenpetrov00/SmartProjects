import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';

import { NavigationButtons } from './Buttons/NavigationButtons';
import { DrawerNavigationButtons } from './Buttons/DrawerNavigationButtons/DrawerNavigationButtons';

import { paths } from '../../config/paths';
import SvgIcon from '../../assets/images/logo/SvgIcon';

export const Header = () => {
  const { pathname } = useLocation();
  const [drawerOpenState, setdrawerOpenState] = useState(false);

  const theme = useTheme();
  const underMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const bottomRadius = 16;
  return (
    <AppBar
      component="header"
      color="primary"
      sx={{
        borderBottomLeftRadius: bottomRadius,
        borderBottomRightRadius: bottomRadius,
      }}
    >
      <Toolbar>
        <Link
          className="noStyle"
          to={paths.home.path}
          aria-label={`navigate to ${paths.home.label}`}
        >
          <SvgIcon width="150" aria-label="SmartProjects logo" />
        </Link>
        {underMediumScreen ? (
          <DrawerNavigationButtons
            pathname={pathname}
            drawerOpenState={drawerOpenState}
            setdrawerOpenState={setdrawerOpenState}
          />
        ) : (
          <NavigationButtons pathname={pathname} />
        )}
      </Toolbar>
    </AppBar>
  );
};
