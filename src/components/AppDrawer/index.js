import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { AppProtectedRoutes } from 'global/routes/AppRoutes.module';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, List, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AppDrawerItem from './AppDrawerItem';

function AppNavigation() {
  const theme = useTheme();
  const [{ toggleDrawer }, dispatch] = useContext(AppContext);

  const handleToggleDrawer = (event) => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  };

  return (
    <Drawer variant="persistent" anchor="left" open={toggleDrawer} >
      
      <IconButton onClick={handleToggleDrawer}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'white' }} /> : <ChevronRightIcon />}
      </IconButton>
      <Divider />

      <List>
        {AppProtectedRoutes.map((parent) => (
          <List key={parent.id}>
            {parent.inNavigation && <AppDrawerItem parent={parent} />}
          </List>
        ))}
      </List>

    </Drawer >
  );
}

export default AppNavigation;
