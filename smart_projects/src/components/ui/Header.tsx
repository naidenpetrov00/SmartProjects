import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

import { paths } from '../../config/paths';
import { NavigationButtons } from './Buttons/NavigationButtons';
import { DrawerNavigationButtons } from './Buttons/DrawerNavigationButtons';

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
          <ConstructionIcon fontSize="large" titleAccess="SmartProjects Logo" />
        </Link>
        <Link
          className="noStyle"
          to={paths.home.path}
          aria-label={`Go to ${paths.home.label}`}
        >
          <Typography variant="h5">SmartProjects</Typography>
        </Link>
        {underMediumScreen ? (
          <DrawerNavigationButtons
            pathname={pathname}
            drawerOpenState={drawerOpenState}
            setdrawerOpenState={setdrawerOpenState}
          ></DrawerNavigationButtons>
        ) : (
          <NavigationButtons pathname={pathname}></NavigationButtons>
        )}
      </Toolbar>
    </AppBar>
  );
};
