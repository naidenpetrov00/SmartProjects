import { Link } from 'react-router-dom';

import { Tabs, Tab } from '@mui/material';

import { navigationButtonsOnRightStyle } from './sxStyles';
import { paths } from '../../../config/paths';

type NavigationButtonsProps = {
  pathname: string;
};

export const NavigationButtons = ({ pathname }: NavigationButtonsProps) => {
  return (
    <Tabs
      id="navigation-tabs"
      aria-labelledby="page navigation"
      sx={navigationButtonsOnRightStyle}
      value={pathname}
      textColor="inherit"
    >
      {Object.values(paths).map((path, index) => (
        <Tab
          id={`tab-${index}`}
          color="inherit"
          label={path.label}
          key={path.label}
          value={path.path}
          component={Link}
          to={path.path}
          aria-label={`navigate to ${path.label}`}
          aria-controls={`tabpanel-${index}`}
        />
      ))}
    </Tabs>
  );
};
