import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { drawerNavigationStyles } from './DrawerNavigationButtons/DrawerNavigationButtons.styles';
import { usePaths } from '../../../hooks/usePaths';

type NavigationButtonsProps = {
  pathname: string;
};

export const NavigationButtons = ({ pathname }: NavigationButtonsProps) => {
  const paths = usePaths();

  return (
    <Tabs
      id="navigation-tabs"
      aria-labelledby="page-navigation-tabs"
      sx={drawerNavigationStyles.button}
      value={pathname}
      textColor="inherit"
    >
      {Object.values(paths).map((path, index) => (
        <Tab
          id={`tab-${index}`}
          color="primary.contrastText"
          label={path.label}
          key={path.label}
          value={path.path}
          component={Link}
          to={path.path}
          aria-label={`Navigate to ${path.label} page`}
          aria-controls={`tabpanel-${index}`}
        />
      ))}
    </Tabs>
  );
};
