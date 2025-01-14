import { Link } from 'react-router-dom';

import {
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { paths } from '../../../config/paths';
import { drawerNavigationStyles } from './DrawerNavigationButtons/DrawerNavigationButtons.styles';
import { LanguageSelector } from './LanguageSelector';

type NavigationButtonsProps = {
  pathname: string;
};

export const NavigationButtons = ({ pathname }: NavigationButtonsProps) => {
  return (
    <Tabs
      id="navigation-tabs"
      aria-labelledby="page navigation"
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
          aria-label={`navigate to ${path.label}`}
          aria-controls={`tabpanel-${index}`}
        />
      ))}
    </Tabs>
  );
};
