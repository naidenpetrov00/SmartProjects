import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

import { ScrollTop } from '../ui/ScrollTop';
import { pagesForNavigationBar, paths } from '../../config/paths';

type HomeLayoutProprs = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProprs) => {
  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          {/* <ConstructionIcon fontSize="large"></ConstructionIcon>
          <Typography  variant="h5">SmartProjects</Typography> */}
          <Link className="noStyle" to={paths.home.path}>
            <ConstructionIcon fontSize="large" />
          </Link>

          {/* Make the typography clickable and link to paths.home */}
          <Link className="noStyle" to={paths.home.path}>
            <Typography variant="h5">SmartProjects</Typography>
          </Link>
          <List sx={{ display: 'flex', marginLeft: 'auto' }}>
            {pagesForNavigationBar.map((p) => (
              <ListItem key={p.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={p.path}
                  sx={{
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <ListItemText primary={p.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      {children}
      <ScrollTop />
    </div>
  );
};
