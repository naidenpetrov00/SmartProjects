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
import { ScrollTop } from '../ui/ScrollTop';
import { ToolBarOffset } from '../ui/Offsets';
import { NavigationButtons } from '../ui/Buttons/NavigationButtons';
import { DrawerNavigationButtons } from '../ui/Buttons/DrawerNavigationButtons';

type PageLayoutProprs = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProprs) => {
  const { pathname } = useLocation();
  const [drawerOpenState, setdrawerOpenState] = useState(false);
  const theme = useTheme();
  const underMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const bottomRadius = 16;
  return (
    <div>
      <AppBar
        component="nav"
        color="primary"
        sx={{
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        }}
      >
        <Toolbar>
          <Link className="noStyle" to={paths.home.path}>
            <ConstructionIcon fontSize="large" />
          </Link>
          <Link className="noStyle" to={paths.home.path}>
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
      <ToolBarOffset id="back-to-top-anchor" />
      <main>{children}</main>
      <ScrollTop />
    </div>
  );
};
