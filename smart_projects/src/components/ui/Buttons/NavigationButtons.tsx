import { Link } from 'react-router-dom';

import { Tabs, Tab } from '@mui/material';

import { navigationButtonsOnRightStyle } from './sxStyles';
import { pagesForNavigationBar } from '../../../config/paths';

type NavigationButtonsProps = {
  pathname: string;
};

export const NavigationButtons = ({ pathname }: NavigationButtonsProps) => {
  return (
    <Tabs
      sx={{ ...navigationButtonsOnRightStyle }}
      value={pathname}
      textColor="inherit"
    >
      {pagesForNavigationBar.map((p) => (
        <Tab
          label={p.text}
          key={p.text}
          value={p.path}
          component={Link}
          to={p.path}
        />
      ))}
    </Tabs>
  );
};
